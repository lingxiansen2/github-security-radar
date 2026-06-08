# GitHub Security Radar

> 更新时间：2026-06-08T16:53:38.804Z
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
| 1 | [Tools2U/AI-Website-Audit-CLI](https://github.com/Tools2U/AI-Website-Audit-CLI) | 55 | Python | 2026-06-07 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/Tools2U/AI-Website-Audit-CLI) | Open-source AI-powered website audit CLI using the OpenAI API for SEO, UX, accessibility, performance, trust, and content analysis. |
| 2 | [execveat/flawed](https://github.com/execveat/flawed) | 18 | Python | 2026-06-06 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/execveat/flawed) | Static analysis engine for Python web-applications |
| 3 | [NovaCode37/claude-security-skills](https://github.com/NovaCode37/claude-security-skills) | 8 | Python | 2026-06-07 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/NovaCode37/claude-security-skills) | Production-ready Claude Code skills for cybersecurity — secret scanning, SAST, prompt-injection testing, HTTP/JWT/dependency auditing. Zero dependencies. |
| 4 | [Wadan3/ai-api-firewall](https://github.com/Wadan3/ai-api-firewall) | 6 | Python | 2026-06-07 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/Wadan3/ai-api-firewall) | An intelligent, machine-learning-powered API Gateway to detect and block malicious web traffic in real-time |
| 5 | [Wadan3/SmartCode-Guard](https://github.com/Wadan3/SmartCode-Guard) | 6 | Java | 2026-06-06 | 通用安全, 网络安全, AI 自动化 / Skill, 防守 / 蓝队 | [Repo](https://github.com/Wadan3/SmartCode-Guard) | An AI-driven tool designed to automate the detection of security vulnerabilities in Java source code. |
| 6 | [dimasma0305/wp-taint-scan](https://github.com/dimasma0305/wp-taint-scan) | 10 | Go | 2026-06-06 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/dimasma0305/wp-taint-scan) | Go static taint-analysis engine that finds vulnerabilities in WordPress plugins — WordPress-aware (capability tiers, nonce≠authz, REST/AJAX entrypoints). Detects SQLi, XSS, IDOR, privesc, RCE. Built on php-parser-go. |
| 7 | [admmoises/sqli-striker](https://github.com/admmoises/sqli-striker) | 2 | TypeScript | 2026-06-08 | 渗透 / 红队 | [Repo](https://github.com/admmoises/sqli-striker) | Tactical web interface for sqlmap — SQL injection strike platform. Terminal aesthetic, real-time SSE streaming, dual modes. |
| 8 | [RedamusOffSec05/web-pentest-lab](https://github.com/RedamusOffSec05/web-pentest-lab) | 3 | PHP | 2026-06-08 | 网络安全, 渗透 / 红队 | [Repo](https://github.com/RedamusOffSec05/web-pentest-lab) | Docker-based web penetration testing lab with 7 intentionally vulnerable targets — for beginners learning ethical hacking |
| 9 | [brunoaugusto1978/osint-vision-agent](https://github.com/brunoaugusto1978/osint-vision-agent) | 3 | HTML | 2026-06-06 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/brunoaugusto1978/osint-vision-agent) | 👁 OSINT Vision Agent — Investigação forense de imagens com múltiplos LLMs (Claude, GPT-4o, Gemini, Groq, Ollama) |
| 10 | [tahakouiyasse/cyber-signal-ebpf](https://github.com/tahakouiyasse/cyber-signal-ebpf) | 3 | Rust | 2026-06-07 | 通用安全, 网络安全 | [Repo](https://github.com/tahakouiyasse/cyber-signal-ebpf) | High-performance, zero-copy L2–L4 network signal extractor built with Rust & eBPF(CO-RE). Captures packets via XDP ingress, transforms data into 64byte frames, and delivers to userspace via lock-free per-CPU ring buffers with sub-microsecond jitter. Designed for 100 Mpps line-rate critical protocols. Post-init heapless, multi-threaded architecture. |
| 11 | [tahakouiyasse/ebpf-impostor-detector](https://github.com/tahakouiyasse/ebpf-impostor-detector) | 2 | Rust | 2026-06-07 | 网络安全, 防守 / 蓝队, 逆向 / 恶意代码 | [Repo](https://github.com/tahakouiyasse/ebpf-impostor-detector) | Host Intrusion Detection & Active Signaling System (HIDASS) for Linux kernel 5.15+. Implements a Stackelberg defender-leader game-theoretic model to expose interactive APTs via eBPF-driven TTY timing analysis (Welford/Shannon entropy) and adaptive zero-copy RingBuffer jitter injection. Built in Rust (no_std probe, Tokio user-space daemon). |
| 12 | [can1357/isobox](https://github.com/can1357/isobox) | 5 | Go | 2026-06-05 | 通用安全, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/can1357/isobox) / [Homepage](https://pkg.go.dev/github.com/can1357/isobox) | Run a command in a sandbox with the same flags on every OS — one capability model compiled to Seatbelt (macOS), gVisor (Linux), and AppContainer (Windows). |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：23

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [Albert-Weasker/niubi_guard](https://github.com/Albert-Weasker/niubi_guard) | 234 | TypeScript | 2026-06-03 | 通用安全, 防守 / 蓝队 | [Repo](https://github.com/Albert-Weasker/niubi_guard) / [Homepage](https://www.niubistar.com/guard) | Open-source GitHub repository abuse detection and response system. |
| 2 | [Tools2U/AI-Website-Audit-CLI](https://github.com/Tools2U/AI-Website-Audit-CLI) | 55 | Python | 2026-06-07 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/Tools2U/AI-Website-Audit-CLI) | Open-source AI-powered website audit CLI using the OpenAI API for SEO, UX, accessibility, performance, trust, and content analysis. |
| 3 | [spearchucker667/kimiko](https://github.com/spearchucker667/kimiko) | 69 | Python | 2026-06-01 | 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/spearchucker667/kimiko) / [Homepage](https://www.moonshot.ai) | Bypass all api restraints within Kimi-CLI |
| 4 | [darkdisaster08/darkbuster](https://github.com/darkdisaster08/darkbuster) | 29 | Python | 2026-06-03 | 网络安全, 渗透 / 红队 | [Repo](https://github.com/darkdisaster08/darkbuster) | Advanced Web Directory & File Bruteforcer with Updated Wordlists (May 2026) |
| 5 | [Unclecheng-li/cybersecurity-daily](https://github.com/Unclecheng-li/cybersecurity-daily) | 33 | HTML | 2026-06-04 | 通用安全, 网络安全, AI 自动化 / Skill | [Repo](https://github.com/Unclecheng-li/cybersecurity-daily) | 网络安全日报—每日推送；Daily updated report on cybersecurity hotspots |
| 6 | [ChrisHuber1/KustoForge](https://github.com/ChrisHuber1/KustoForge) | 35 | Python | 2026-06-03 | 通用安全, 网络安全 | [Repo](https://github.com/ChrisHuber1/KustoForge) | Desktop KQL query builder for Microsoft security and Azure services - 52 tables across Defender, Sentinel, Entra ID, Azure Monitor, App Insights, and more |
| 7 | [Division-36/Z-Jail](https://github.com/Division-36/Z-Jail) | 31 | C | 2026-06-02 | 通用安全, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/Division-36/Z-Jail) | A lightweight, multi-layer Linux sandbox combining namespaces, pivot_root, seccomp-bpf, capability dropping, and an evidence-based verdict engine (Truthimatics Public Version) for secure, auditable code execution. |
| 8 | [execveat/flawed](https://github.com/execveat/flawed) | 18 | Python | 2026-06-06 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/execveat/flawed) | Static analysis engine for Python web-applications |
| 9 | [Chunkcleprovide/Malwarebytes-Premium-Security-Suite](https://github.com/Chunkcleprovide/Malwarebytes-Premium-Security-Suite) | 40 | Unknown | 2026-06-02 | 通用安全, 防守 / 蓝队, 网络安全 | [Repo](https://github.com/Chunkcleprovide/Malwarebytes-Premium-Security-Suite) | Malwarebytes Premium Security Suite — full premium build for Windows with pro features unlocked. Pre-Activated |
| 10 | [CarterPerez-dev/exs-cyberjob-scraper](https://github.com/CarterPerez-dev/exs-cyberjob-scraper) | 23 | Elixir | 2026-06-02 | 网络安全 | [Repo](https://github.com/CarterPerez-dev/exs-cyberjob-scraper) / [Homepage](https://www.instagram.com/certsgamified/) | Web scraper, written in Elixir, that pulls cybersecurity job postings from public hiring APIs, isolates the genuine cybersecurity roles, and reports which certifications employers ask for most. 💜 |
| 11 | [NovaCode37/claude-security-skills](https://github.com/NovaCode37/claude-security-skills) | 8 | Python | 2026-06-07 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/NovaCode37/claude-security-skills) | Production-ready Claude Code skills for cybersecurity — secret scanning, SAST, prompt-injection testing, HTTP/JWT/dependency auditing. Zero dependencies. |
| 12 | [0xGhostCAT/claude-ai-cyber-security-skills](https://github.com/0xGhostCAT/claude-ai-cyber-security-skills) | 17 | Shell | 2026-06-02 | 渗透 / 红队, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/0xGhostCAT/claude-ai-cyber-security-skills) | 30 Claude Code Skills + 60+ integrated tools for HackerOne/Bugcrowd bug bounty hunters |
| 13 | [Karib0u/rustinel-rules](https://github.com/Karib0u/rustinel-rules) | 15 | Python | 2026-06-04 | 通用安全, 防守 / 蓝队 | [Repo](https://github.com/Karib0u/rustinel-rules) / [Homepage](https://docs.rustinel.io/) | Official, curated detection content (Sigma, YARA, IOC packs) for the Rustinel endpoint detection engine. |
| 14 | [Delego-Dev/delego](https://github.com/Delego-Dev/delego) | 20 | Python | 2026-06-03 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/Delego-Dev/delego) | Intent-bound action authorization for AI agents — deterministic, per-action approval a prompt injection can't re-point, with a signed, tamper-evident audit trail. |
| 15 | [wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform](https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform) | 16 | Python | 2026-06-01 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform) / [Homepage](https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform) | SENTINEL-X adalah proof-of-concept platform yang dikembangkan sebagai simulasi dan demonstrasi konsep untuk sistem threat intelligence dan monitoring multi-domain. Proyek ini berawal dari ide untuk membuat platform yang bisa mengintegrasikan berbagai sumber data untuk situational awareness. |
| 16 | [Wadan3/ai-api-firewall](https://github.com/Wadan3/ai-api-firewall) | 6 | Python | 2026-06-07 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/Wadan3/ai-api-firewall) | An intelligent, machine-learning-powered API Gateway to detect and block malicious web traffic in real-time |
| 17 | [Wadan3/SmartCode-Guard](https://github.com/Wadan3/SmartCode-Guard) | 6 | Java | 2026-06-06 | 网络安全, AI 自动化 / Skill, 防守 / 蓝队 | [Repo](https://github.com/Wadan3/SmartCode-Guard) | An AI-driven tool designed to automate the detection of security vulnerabilities in Java source code. |
| 18 | [MarianoFacundoArch/nist-csf-evidence-gap-analysis-tool](https://github.com/MarianoFacundoArch/nist-csf-evidence-gap-analysis-tool) | 11 | JavaScript | 2026-06-03 | 通用安全, 网络安全, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/MarianoFacundoArch/nist-csf-evidence-gap-analysis-tool) | Free, open-source tool to build a NIST CSF 2.0 Current Profile and gap analysis from an organization's documents (AI-assisted, human-validated, runs offline). |
