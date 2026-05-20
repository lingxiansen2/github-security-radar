import {
  CATEGORY_KEYWORDS,
  EXCLUDED_HOMEPAGE_HOSTS,
  RELEVANCE_KEYWORDS,
  REQUEST_SETTINGS,
  SEARCH_PROFILES
} from "./config.mjs";

const GITHUB_API_BASE = "https://api.github.com";
const DAY_IN_MS = 24 * 60 * 60 * 1000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toDateOnly(value) {
  return new Date(value).toISOString().slice(0, 10);
}

function wrapBooleanQuery(query) {
  return query.includes(" OR ") ? `(${query})` : query;
}

function buildSearchQuery(profileQuery, createdSince, minStars) {
  return `${wrapBooleanQuery(profileQuery)} created:>=${createdSince} stars:>=${minStars} archived:false fork:false`;
}

function normalizeText(repo) {
  return [repo.full_name, repo.name, repo.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function inferTags(repo, matchedLabels) {
  const text = normalizeText(repo);
  const tags = new Set(matchedLabels);

  for (const rule of CATEGORY_KEYWORDS) {
    if (rule.keywords.some((keyword) => text.includes(keyword))) {
      tags.add(rule.label);
    }
  }

  return Array.from(tags);
}

function hasBlockedHomepage(homepage) {
  if (!homepage) {
    return false;
  }

  try {
    const hostname = new URL(homepage).hostname.replace(/^www\./, "");
    return EXCLUDED_HOMEPAGE_HOSTS.includes(hostname);
  } catch {
    return false;
  }
}

function isConsumerVpnSeo(text) {
  const consumerTerms = ["netflix", "spotify", "youtube", "telegram", "discord", "iphone", "android", "router"];
  return text.includes("vpn") && consumerTerms.some((term) => text.includes(term));
}

function isRelevantRepository(repo) {
  const text = normalizeText({
    full_name: repo.fullName,
    name: repo.name,
    description: repo.description
  });

  if (hasBlockedHomepage(repo.homepage) || /^top-\d+-vpn/i.test(repo.name) || isConsumerVpnSeo(text)) {
    return false;
  }

  const specializedTags = repo.tags.filter((tag) => !["通用安全", "网络安全"].includes(tag));
  if (specializedTags.length > 0) {
    return true;
  }

  return RELEVANCE_KEYWORDS.some((keyword) => text.includes(keyword));
}

function calculateScore(repo, windowConfig) {
  const ageInDays = Math.max(0, (Date.now() - new Date(repo.createdAt).getTime()) / DAY_IN_MS);
  const freshnessBonus = Math.max(0, 1 - ageInDays / windowConfig.days) * 26;
  const starScore = Math.log2(repo.stars + 2) * 18;
  const forkScore = Math.log2(repo.forks + 1) * 4;
  const weight = repo.profileWeights.length ? Math.max(...repo.profileWeights) : 1;

  return Number(((starScore + forkScore + freshnessBonus) * weight).toFixed(2));
}

async function requestGitHub(url, token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "github-security-radar",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = payload?.message || response.statusText;
    const remaining = response.headers.get("x-ratelimit-remaining");
    const reset = response.headers.get("x-ratelimit-reset");
    const resetAt = reset ? new Date(Number(reset) * 1000).toISOString() : "unknown";

    throw new Error(
      `GitHub API request failed (${response.status}): ${message}. Remaining: ${remaining ?? "unknown"}, reset: ${resetAt}.`
    );
  }

  return {
    payload,
    rateLimitRemaining: response.headers.get("x-ratelimit-remaining"),
    rateLimitReset: response.headers.get("x-ratelimit-reset")
  };
}

function mergeRepository(recordMap, item, profile) {
  const existing = recordMap.get(item.full_name);

  if (!existing) {
    recordMap.set(item.full_name, {
      id: item.id,
      name: item.name,
      fullName: item.full_name,
      url: item.html_url,
      homepage: item.homepage || "",
      description: item.description || "",
      stars: item.stargazers_count || 0,
      forks: item.forks_count || 0,
      openIssues: item.open_issues_count || 0,
      language: item.language || "Unknown",
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      matchedProfiles: [profile.label],
      profileWeights: [profile.weight]
    });
    return;
  }

  if (!existing.matchedProfiles.includes(profile.label)) {
    existing.matchedProfiles.push(profile.label);
  }

  existing.profileWeights.push(profile.weight);
}

async function fetchByProfile(profile, windowConfig, token) {
  const createdSince = toDateOnly(Date.now() - windowConfig.days * DAY_IN_MS);
  const searchUrl = new URL("/search/repositories", GITHUB_API_BASE);

  searchUrl.searchParams.set(
    "q",
    buildSearchQuery(profile.query, createdSince, windowConfig.minStars)
  );
  searchUrl.searchParams.set("sort", "stars");
  searchUrl.searchParams.set("order", "desc");
  searchUrl.searchParams.set("per_page", String(REQUEST_SETTINGS.perPage));

  const { payload, rateLimitRemaining, rateLimitReset } = await requestGitHub(searchUrl, token);

  return {
    createdSince,
    items: payload.items || [],
    rateLimitRemaining,
    rateLimitReset
  };
}

export async function fetchWindowLeaderboard(windowConfig, token = "") {
  const repositoryMap = new Map();
  const queryStats = [];
  let createdSince = toDateOnly(Date.now() - windowConfig.days * DAY_IN_MS);

  for (const profile of SEARCH_PROFILES) {
    const result = await fetchByProfile(profile, windowConfig, token);
    createdSince = result.createdSince;

    for (const item of result.items) {
      mergeRepository(repositoryMap, item, profile);
    }

    queryStats.push({
      profile: profile.label,
      query: profile.query,
      fetched: result.items.length,
      rateLimitRemaining: result.rateLimitRemaining,
      rateLimitReset: result.rateLimitReset
    });

    await sleep(REQUEST_SETTINGS.pauseMs);
  }

  const repositories = Array.from(repositoryMap.values())
    .map((repo) => ({
      ...repo,
      tags: inferTags(
        {
          full_name: repo.fullName,
          name: repo.name,
          description: repo.description
        },
        repo.matchedProfiles
      ),
      score: calculateScore(repo, windowConfig)
    }))
    .filter(isRelevantRepository)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      if (right.stars !== left.stars) {
        return right.stars - left.stars;
      }

      return new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
    })
    .slice(0, windowConfig.maxItems);

  return {
    window: windowConfig,
    createdSince,
    totalCandidates: repositoryMap.size,
    queryStats,
    repositories
  };
}
