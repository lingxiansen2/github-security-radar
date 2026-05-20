import { SEARCH_PROFILES } from "./config.mjs";

function escapeMarkdown(value) {
  return String(value || "")
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(value) {
  return new Date(value).toISOString().slice(0, 10);
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("zh-CN", {
    hour12: false
  });
}

function renderMarkdownRow(repo, index) {
  const primaryLink = `[${repo.fullName}](${repo.url})`;
  const extraLinks = [`[Repo](${repo.url})`];

  if (repo.homepage) {
    extraLinks.push(`[Homepage](${repo.homepage})`);
  }

  return `| ${index + 1} | ${primaryLink} | ${repo.stars} | ${escapeMarkdown(repo.language)} | ${formatDate(
    repo.createdAt
  )} | ${escapeMarkdown(repo.tags.join(", "))} | ${extraLinks.join(" / ")} | ${escapeMarkdown(repo.description || "-")} |`;
}

function renderMarkdownSection(board) {
  const lines = [
    `## ${board.window.label}`,
    "",
    `- 时间窗口：最近 ${board.window.days} 天`,
    `- 最少星标：${board.window.minStars}`,
    `- 候选项目数：${board.totalCandidates}`,
    "",
    "| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |",
    "|---|---|---:|---|---|---|---|---|"
  ];

  if (board.repositories.length === 0) {
    lines.push("| - | 暂无结果 | - | - | - | - | - | 当前时间窗口内没有满足条件的项目 |");
    return lines.join("\n");
  }

  for (const [index, repo] of board.repositories.entries()) {
    lines.push(renderMarkdownRow(repo, index));
  }

  return lines.join("\n");
}

function renderProfileBadges() {
  return SEARCH_PROFILES.map((profile) => `- \`${profile.label}\`：${profile.query}`).join("\n");
}

function renderCard(repo, index) {
  const chips = repo.tags
    .map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`)
    .join("");
  const homepageLink = repo.homepage
    ? `<a href="${escapeHtml(repo.homepage)}" target="_blank" rel="noreferrer">Homepage</a>`
    : "";

  return `
    <article class="card">
      <div class="card-top">
        <span class="rank">#${index + 1}</span>
        <span class="score">热度分 ${repo.score}</span>
      </div>
      <h3><a href="${escapeHtml(repo.url)}" target="_blank" rel="noreferrer">${escapeHtml(repo.fullName)}</a></h3>
      <p class="desc">${escapeHtml(repo.description || "暂无描述")}</p>
      <div class="meta">
        <span>⭐ ${repo.stars}</span>
        <span>🍴 ${repo.forks}</span>
        <span>${escapeHtml(repo.language)}</span>
        <span>创建于 ${formatDate(repo.createdAt)}</span>
      </div>
      <div class="chips">${chips}</div>
      <div class="links">
        <a href="${escapeHtml(repo.url)}" target="_blank" rel="noreferrer">GitHub</a>
        ${homepageLink}
      </div>
    </article>
  `;
}

function renderBoardSection(board) {
  const cards = board.repositories.length
    ? board.repositories.map((repo, index) => renderCard(repo, index)).join("\n")
    : `<article class="empty">当前时间窗口内没有满足条件的项目。</article>`;

  return `
    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">${board.window.days} DAY WINDOW</p>
          <h2>${escapeHtml(board.window.label)}</h2>
        </div>
        <div class="summary">
          <span>候选 ${board.totalCandidates}</span>
          <span>至少 ${board.window.minStars} Stars</span>
        </div>
      </div>
      <div class="grid">
        ${cards}
      </div>
    </section>
  `;
}

export function renderMarkdown(payload) {
  const sections = payload.leaderboards.map(renderMarkdownSection).join("\n\n");

  return `# ${payload.title}

> 更新时间：${payload.generatedAt}
>
> 聚焦信息安全、网络安全、渗透 / 红队、防守 / 蓝队，以及 AI 自动化 / Skill 相关的新项目。

## 检索说明

- 数据源：GitHub Search API
- 排序方式：GitHub 星标热度 + 新鲜度加权
- 建议：配置 \`GITHUB_TOKEN\` 提高请求速率限制

默认查询：
${renderProfileBadges()}

${sections}
`;
}

export function renderHtml(payload) {
  const sections = payload.leaderboards.map(renderBoardSection).join("\n");

  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(payload.title)}</title>
    <style>
      :root {
        --bg: #f6f3eb;
        --panel: rgba(255, 255, 255, 0.82);
        --panel-strong: #ffffff;
        --ink: #101b16;
        --muted: #55615c;
        --line: rgba(16, 27, 22, 0.1);
        --accent: #0b6e4f;
        --accent-soft: rgba(11, 110, 79, 0.12);
        --hot: #d97706;
        --shadow: 0 22px 50px rgba(28, 39, 34, 0.1);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
        color: var(--ink);
        background:
          radial-gradient(circle at top left, rgba(11, 110, 79, 0.18), transparent 28%),
          linear-gradient(180deg, #fbfaf6 0%, var(--bg) 100%);
      }

      a {
        color: var(--accent);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .shell {
        max-width: 1180px;
        margin: 0 auto;
        padding: 48px 20px 72px;
      }

      .hero {
        padding: 32px;
        border: 1px solid var(--line);
        border-radius: 28px;
        background:
          linear-gradient(135deg, rgba(11, 110, 79, 0.08), rgba(217, 119, 6, 0.08)),
          var(--panel);
        box-shadow: var(--shadow);
        backdrop-filter: blur(14px);
      }

      .hero p {
        margin: 0;
      }

      .kicker {
        display: inline-block;
        margin-bottom: 14px;
        padding: 8px 12px;
        border-radius: 999px;
        background: var(--accent-soft);
        color: var(--accent);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
      }

      h1 {
        margin: 0;
        font-family: "IBM Plex Mono", "Consolas", monospace;
        font-size: clamp(32px, 5vw, 56px);
        line-height: 1.02;
      }

      .hero-copy {
        margin-top: 18px;
        max-width: 760px;
        color: var(--muted);
        font-size: 16px;
        line-height: 1.7;
      }

      .stats,
      .query-list,
      .summary,
      .meta,
      .chips,
      .links,
      .grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .stats {
        margin-top: 24px;
      }

      .stat {
        padding: 14px 16px;
        border-radius: 18px;
        background: var(--panel-strong);
        border: 1px solid var(--line);
        min-width: 160px;
      }

      .stat strong {
        display: block;
        font-size: 13px;
        color: var(--muted);
        margin-bottom: 6px;
      }

      .stat span {
        font-size: 24px;
        font-weight: 700;
      }

      .query-wrap {
        margin-top: 22px;
      }

      .query-list {
        margin-top: 12px;
      }

      .query {
        padding: 10px 12px;
        border-radius: 16px;
        border: 1px solid var(--line);
        background: rgba(255, 255, 255, 0.7);
        font-family: "IBM Plex Mono", "Consolas", monospace;
        font-size: 12px;
        color: #204236;
      }

      .panel {
        margin-top: 30px;
        padding: 26px;
        border-radius: 26px;
        border: 1px solid var(--line);
        background: var(--panel);
        box-shadow: var(--shadow);
      }

      .panel-head {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: flex-end;
        margin-bottom: 20px;
      }

      .eyebrow {
        margin: 0 0 8px;
        color: var(--hot);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.1em;
      }

      h2 {
        margin: 0;
        font-size: clamp(24px, 3vw, 34px);
      }

      .summary span {
        padding: 10px 14px;
        border-radius: 999px;
        border: 1px solid var(--line);
        background: var(--panel-strong);
        font-size: 13px;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 18px;
      }

      .card,
      .empty {
        padding: 20px;
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid var(--line);
      }

      .card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 12px;
      }

      .rank,
      .score,
      .chip {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
      }

      .rank {
        padding: 7px 11px;
        background: #101b16;
        color: white;
        font-family: "IBM Plex Mono", "Consolas", monospace;
        font-size: 12px;
      }

      .score {
        padding: 7px 11px;
        background: rgba(217, 119, 6, 0.1);
        color: var(--hot);
        font-size: 12px;
        font-weight: 700;
      }

      h3 {
        margin: 0;
        font-size: 20px;
        line-height: 1.3;
      }

      .desc {
        min-height: 66px;
        margin: 14px 0 0;
        color: var(--muted);
        line-height: 1.7;
      }

      .meta {
        margin-top: 16px;
        color: #29463b;
        font-size: 13px;
      }

      .meta span {
        padding: 8px 10px;
        border-radius: 12px;
        background: #f2f7f4;
      }

      .chips {
        margin-top: 16px;
      }

      .chip {
        padding: 7px 10px;
        background: var(--accent-soft);
        color: var(--accent);
        font-size: 12px;
        font-weight: 700;
      }

      .links {
        margin-top: 18px;
      }

      .links a {
        padding: 10px 14px;
        border-radius: 14px;
        border: 1px solid var(--line);
        background: white;
        font-weight: 700;
      }

      footer {
        margin-top: 28px;
        color: var(--muted);
        font-size: 13px;
      }

      @media (max-width: 720px) {
        .shell {
          padding: 24px 14px 52px;
        }

        .hero,
        .panel {
          padding: 20px;
          border-radius: 22px;
        }

        .panel-head {
          flex-direction: column;
          align-items: flex-start;
        }

        .desc {
          min-height: 0;
        }
      }
    </style>
  </head>
  <body>
    <main class="shell">
      <section class="hero">
        <span class="kicker">SECURITY PROJECT RADAR</span>
        <h1>${escapeHtml(payload.title)}</h1>
        <p class="hero-copy">
          聚焦最近 3 天和 7 天内出现的网络安全、信息安全、渗透 / 红队、防守 / 蓝队，以及 AI 安全自动化项目。
          排名基于 GitHub 星标表现，并叠加新鲜度加权，方便快速发现值得跟进的新仓库。
        </p>
        <div class="stats">
          <div class="stat">
            <strong>更新时间</strong>
            <span>${escapeHtml(formatDateTime(payload.generatedAt))}</span>
          </div>
          <div class="stat">
            <strong>时间窗口</strong>
            <span>3 天 / 7 天</span>
          </div>
          <div class="stat">
            <strong>数据来源</strong>
            <span>GitHub Search API</span>
          </div>
        </div>
        <div class="query-wrap">
          <p>默认查询方向</p>
          <div class="query-list">
            ${SEARCH_PROFILES.map(
              (profile) =>
                `<span class="query">${escapeHtml(profile.label)} · ${escapeHtml(profile.query)}</span>`
            ).join("")}
          </div>
        </div>
      </section>
      ${sections}
      <footer>
        建议在运行时配置 <code>GITHUB_TOKEN</code>，以获得更稳定的 GitHub API 速率限制。
      </footer>
    </main>
  </body>
</html>
`;
}
