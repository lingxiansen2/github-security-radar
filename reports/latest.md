# GitHub Security Radar

> 更新时间：2026-09-23T05:56:44.694Z
>
> 聚焦信息安全、网络安全、渗透 / 红队、防守 / 蓝队，以及 AI 自动化 / Skill 相关的新项目。

## 检索说明

- 数据源：GitHub Search API
- 排序方式：GitHub 星标热度 + 新鲜度加权
- 建议：配置 `GITHUB_TOKEN` 提高请求速率限制

默认查询：
- `通用安全`：topic:security
- `网络安全`：topic:cybersecurity
- `渗透 / 红队`：topic:penetration-testing
- `防守 / 蓝队`：topic:defensive-security
- `AI 自动化 / Skill`："security automation" OR "ai security" OR "agent security" OR "mcp security" OR "security skill"

## 近 3 天新项目

- 时间窗口：最近 3 天
- 最少星标：2
- 候选项目数：24

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [Matthew0822/MCPBastion](https://github.com/Matthew0822/MCPBastion) | 20 | Rust | 2026-09-22 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/Matthew0822/MCPBastion) | Zero-trust security gateway between AI agents and MCP servers: scoped capabilities, redaction, rate and cost limits, and verifiable session logs. |
| 2 | [ressl/cve-2026-87902-poc](https://github.com/ressl/cve-2026-87902-poc) | 9 | Python | 2026-09-22 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/ressl/cve-2026-87902-poc) / [Homepage](https://ressl.ch/blog/cve-2026-87902-wordpress/) | PoC for CVE-2026-87902 — unauthenticated path traversal in WordPress page-template resolution (local PHP inclusion, conditional RCE) with a pinned vulnerable lab |
| 3 | [BillyBobMcgee/footprint-osint](https://github.com/BillyBobMcgee/footprint-osint) | 18 | Python | 2026-09-20 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/BillyBobMcgee/footprint-osint) | Defensive OSINT exposure checker: see what an email, password, domain or username leaks in public breach data. No API keys. CLI + local web GUI. |
| 4 | [5h4d0wn1k/cybersecurity-framework](https://github.com/5h4d0wn1k/cybersecurity-framework) | 3 | Python | 2026-09-22 | 网络安全, 渗透 / 红队, 防守 / 蓝队, AI 自动化 / Skill, 逆向 / 恶意代码, 漏洞研究 / 攻防 | [Repo](https://github.com/5h4d0wn1k/cybersecurity-framework) / [Homepage](https://5h4d0wn1k.github.io/cybersecurity-framework/) | Interactive map of everything in cybersecurity: 27 domains, 776 categories, 1067 curated offensive & defensive tools with effort ratings and when-to-use guidance. |
| 5 | [dispersal-wolves/pack-sentinel](https://github.com/dispersal-wolves/pack-sentinel) | 2 | TypeScript | 2026-09-23 | 网络安全 | [Repo](https://github.com/dispersal-wolves/pack-sentinel) / [Homepage](http://dispersalwolves.com/) | A local security operations server that collects findings from Dispersal Wolves utilities, records changes in SQLite, correlates related signals, and presents incidents through a dashboard, CLI, and HTTP API. |
| 6 | [CodingJeffRoblox/ByteRescue](https://github.com/CodingJeffRoblox/ByteRescue) | 2 | Python | 2026-09-22 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/CodingJeffRoblox/ByteRescue) | ByteRescue — Storage analysis and data recovery tool for analyzing drives, files, and recovering available deleted data. |
| 7 | [FlashyLabs/wdk-staking-kit](https://github.com/FlashyLabs/wdk-staking-kit) | 3 | JavaScript | 2026-09-22 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/FlashyLabs/wdk-staking-kit) / [Homepage](https://flashygroup.com) | ⚡ A reference staking primitive for wallets on Tether's WDK: a lock earmarks a balance at a published rate, no on-chain contract required — only yield, paid on close, ever moves. Apache-2.0 — npm install @flashy/wdk-staking-kit. The terms are open; the balance they lock is not. |
| 8 | [FlashyLabs/wdk-policy-guard](https://github.com/FlashyLabs/wdk-policy-guard) | 3 | JavaScript | 2026-09-22 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/FlashyLabs/wdk-policy-guard) / [Homepage](https://flashygroup.com) | ⚡ A spending-policy layer for wallets on Tether's WDK: per-agent envelopes graded before anything signs — asset, destination, per-transaction and daily caps. Three verdicts, always with a reason: ALLOW, ESCALATE, DENY. Apache-2.0 — npm install @flashy/wdk-policy-guard. The policy is open; the money it guards is not. |
| 9 | [wangke-112/agent-safe-tools](https://github.com/wangke-112/agent-safe-tools) | 3 | Python | 2026-09-22 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/wangke-112/agent-safe-tools) | Ask your AI coding agent, in natural language, to search production logs or inspect a database — safely. Two drop-in MCP servers (MySQL, SSH logs) keep safety red lines in code: read-only by default, dangerous SQL/shell blocked, production disabled, no stored credentials. A recommended Skill layer teaches the model when and how to use them. |
| 10 | [jev-ids/jev-ids](https://github.com/jev-ids/jev-ids) | 3 | Python | 2026-09-21 | 网络安全, 防守 / 蓝队 | [Repo](https://github.com/jev-ids/jev-ids) / [Homepage](https://jev-ids.github.io) | Blazing-Fast Token-Efficient Intrusion Detection System (IDS) based on TypeSafe's Jev. |
| 11 | [Krishita17/leak-scan](https://github.com/Krishita17/leak-scan) | 6 | Python | 2026-09-20 | 防守 / 蓝队 | [Repo](https://github.com/Krishita17/leak-scan) | 🛡️ LeakScan — passive personal wireless-footprint auditor for Flipper Zero. See what your own devices broadcast and how trackable you are. Never transmits. Sole contributor: Krishita Sanjay Choksi. |
| 12 | [nftstillup/chatgpt-codex-handoff](https://github.com/nftstillup/chatgpt-codex-handoff) | 4 | TypeScript | 2026-09-20 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/nftstillup/chatgpt-codex-handoff) | A restricted, auditable handoff bridge between ChatGPT-compatible MCP clients and Codex-oriented local workers. |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：18

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [Matthew0822/MCPBastion](https://github.com/Matthew0822/MCPBastion) | 20 | Rust | 2026-09-22 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/Matthew0822/MCPBastion) | Zero-trust security gateway between AI agents and MCP servers: scoped capabilities, redaction, rate and cost limits, and verifiable session logs. |
| 2 | [vitalsecurity/awesome-cissp](https://github.com/vitalsecurity/awesome-cissp) | 22 | Unknown | 2026-09-17 | 网络安全 | [Repo](https://github.com/vitalsecurity/awesome-cissp) | A last-mile CISSP guide for security architects: the business side of cyber (risk, governance, law, and the manager mindset) |
| 3 | [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 27 | JavaScript | 2026-09-17 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/leepokai/jev-guard) | Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP. |
| 4 | [BillyBobMcgee/footprint-osint](https://github.com/BillyBobMcgee/footprint-osint) | 18 | Python | 2026-09-20 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/BillyBobMcgee/footprint-osint) | Defensive OSINT exposure checker: see what an email, password, domain or username leaks in public breach data. No API keys. CLI + local web GUI. |
| 5 | [agent-chaperone/agent-chaperone](https://github.com/agent-chaperone/agent-chaperone) | 20 | TypeScript | 2026-09-18 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/agent-chaperone/agent-chaperone) / [Homepage](https://agentchaperone.dev) | Screens an AI agent's tool calls before they run and tool results before the agent reads them. An MCP proxy plus a hooks adapter for a client's built-in tools. |
| 6 | [ressl/cve-2026-87902-poc](https://github.com/ressl/cve-2026-87902-poc) | 9 | Python | 2026-09-22 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/ressl/cve-2026-87902-poc) / [Homepage](https://ressl.ch/blog/cve-2026-87902-wordpress/) | PoC for CVE-2026-87902 — unauthenticated path traversal in WordPress page-template resolution (local PHP inclusion, conditional RCE) with a pinned vulnerable lab |
| 7 | [riteshs4hu/LLM-OWASP-LAB](https://github.com/riteshs4hu/LLM-OWASP-LAB) | 13 | CSS | 2026-09-16 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/riteshs4hu/LLM-OWASP-LAB) | Vulnerable AI applications and hands-on labs for learning the OWASP Top 10 for Large Language Model Applications. |
| 8 | [Krishita17/skim-guard](https://github.com/Krishita17/skim-guard) | 7 | Python | 2026-09-19 | 网络安全, 防守 / 蓝队 | [Repo](https://github.com/Krishita17/skim-guard) | SkimGuard: a passive 13.56 MHz NFC reader (skimmer) detector for Flipper Zero. Receive-only, never transmits. Sole contributor: Krishita Sanjay Choksi. |
| 9 | [DevCop95/dev101x-pentest-lab](https://github.com/DevCop95/dev101x-pentest-lab) | 9 | Python | 2026-09-16 | 网络安全, AI 自动化 / Skill, 渗透 / 红队, 逆向 / 恶意代码 | [Repo](https://github.com/DevCop95/dev101x-pentest-lab) | Self-contained Docker Pro Lab for pentest practice: boolean blind SQLi + hashcat cracking, web path traversal, command injection, internal network pivoting and SUID PATH-hijack privesc — with live flag validation and completion certificate. No VPN needed. |
| 10 | [Krishita17/leak-scan](https://github.com/Krishita17/leak-scan) | 6 | Python | 2026-09-20 | 防守 / 蓝队 | [Repo](https://github.com/Krishita17/leak-scan) | 🛡️ LeakScan — passive personal wireless-footprint auditor for Flipper Zero. See what your own devices broadcast and how trackable you are. Never transmits. Sole contributor: Krishita Sanjay Choksi. |
| 11 | [cyancity/easy-unlocker](https://github.com/cyancity/easy-unlocker) | 10 | Kotlin | 2026-09-16 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/cyancity/easy-unlocker) / [Homepage](https://easy-unlocker.pages.dev) | Secrets management for AI agents: approve API keys and credentials on your phone with biometrics, delivered end-to-end encrypted into the target process. Plaintext never enters the chat, logs, or relay. |
| 12 | [NIKJOO/Golang-REVoid](https://github.com/NIKJOO/Golang-REVoid) | 6 | Pascal | 2026-09-19 | 通用安全, 逆向 / 恶意代码 | [Repo](https://github.com/NIKJOO/Golang-REVoid) | Go_VM — Delphi Go Source Virtualizer & Obfuscator |
| 13 | [CogFlux/farhand](https://github.com/CogFlux/farhand) | 6 | Rust | 2026-09-19 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/CogFlux/farhand) / [Homepage](farhand.cogflux.io) | Remote hands for coding agents: an MCP server that runs OpenCode / Claude Code / Codex work on a remote host over SSH, keeps credentials and the local machine closed, and audits everything |
| 14 | [tikket1/honey](https://github.com/tikket1/honey) | 5 | Rust | 2026-09-17 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/tikket1/honey) | A typed language for eBPF security probes that compiles straight to BPF bytecode; if it typechecks, the verifier accepts it |
