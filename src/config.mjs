export const PROJECT_TITLE = "GitHub Security Radar";

export const WINDOWS = [
  {
    id: "3d",
    days: 3,
    label: "近 3 天新项目",
    minStars: 2,
    maxItems: 12
  },
  {
    id: "7d",
    days: 7,
    label: "近 7 天新项目",
    minStars: 5,
    maxItems: 18
  }
];

export const SEARCH_PROFILES = [
  {
    id: "security",
    label: "通用安全",
    query: "topic:security",
    weight: 1
  },
  {
    id: "cybersecurity",
    label: "网络安全",
    query: "topic:cybersecurity",
    weight: 1.08
  },
  {
    id: "offensive",
    label: "渗透 / 红队",
    query: "topic:penetration-testing",
    weight: 1.18
  },
  {
    id: "defensive",
    label: "防守 / 蓝队",
    query: "topic:defensive-security",
    weight: 1.12
  },
  {
    id: "automation",
    label: "AI 自动化 / Skill",
    query: "\"security automation\" OR \"ai security\" OR \"agent security\" OR \"mcp security\" OR \"security skill\"",
    weight: 1.24
  }
];

export const REQUEST_SETTINGS = {
  perPage: 12,
  pauseMs: 350
};

export const CATEGORY_KEYWORDS = [
  {
    label: "AI 自动化 / Skill",
    keywords: ["agent", "automation", "workflow", "mcp", "skill", "prompt", "llm", "ai"]
  },
  {
    label: "渗透 / 红队",
    keywords: ["penetration", "pentest", "red team", "c2", "exploit", "payload", "recon", "ctf"]
  },
  {
    label: "防守 / 蓝队",
    keywords: ["blue team", "detection", "threat hunting", "sigma", "yara", "forensics", "malware", "soc", "siem"]
  },
  {
    label: "逆向 / 恶意代码",
    keywords: [
      "reverse engineering",
      "reversing",
      "ghidra",
      "ida",
      "radare2",
      "firmware",
      "disassembly",
      "binary",
      "virtualizer",
      "obfuscation"
    ]
  },
  {
    label: "漏洞研究 / 攻防",
    keywords: ["vulnerability", "cve", "fuzz", "sandbox", "offensive", "attack defense"]
  },
  {
    label: "网络安全",
    keywords: ["security", "cyber", "network security", "infosec", "opsec"]
  }
];

export const RELEVANCE_KEYWORDS = [
  "security",
  "cyber",
  "infosec",
  "appsec",
  "reverse engineering",
  "reversing",
  "malware",
  "osint",
  "forensics",
  "threat",
  "siem",
  "soc",
  "exploit",
  "vulnerability",
  "cve",
  "bug bounty",
  "red team",
  "blue team",
  "pentest",
  "penetration",
  "proxy",
  "scanner",
  "fuzz",
  "firmware",
  "binary",
  "virtualizer",
  "obfuscation",
  "kill-chain",
  "frida"
];

export const EXCLUDED_HOMEPAGE_HOSTS = ["ivpnus.ru"];

export const OUTPUT_FILES = {
  json: "reports/latest.json",
  markdown: "reports/latest.md",
  html: "docs/index.html"
};
