# GitHub Security Radar

> 更新时间：2026-07-21T04:29:44.814Z
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
- 候选项目数：17

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [dinosn/fastjson-jsontype-rce-lab](https://github.com/dinosn/fastjson-jsontype-rce-lab) | 86 | Python | 2026-07-20 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/dinosn/fastjson-jsontype-rce-lab) | Docker lab + one-payload exploit + defensive scanner for the fastjson 1.2.66-1.2.83 @JSONType remote-class-load RCE (SSRF->defineClass under Spring Boot LaunchedURLClassLoader; autoType OFF; parseObject binding is not a mitigation) |
| 2 | [Kritt-ai/open-kritt](https://github.com/Kritt-ai/open-kritt) | 77 | JavaScript | 2026-07-20 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/Kritt-ai/open-kritt) / [Homepage](https://kritt.ai/) | Orchestrate AI agents to find real vulnerabilities in code. |
| 3 | [dinosn/wp2shell-lab](https://github.com/dinosn/wp2shell-lab) | 34 | Python | 2026-07-18 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/dinosn/wp2shell-lab) | Non-destructive detector + Docker lab for wp2shell (CVE-2026-63030 REST /batch/v1 route confusion + CVE-2026-60137 author__not_in SQLi) in WordPress core 6.9.0-6.9.4 / 7.0.0-7.0.1 |
| 4 | [astraqcd/athena-ctf-2026-challs](https://github.com/astraqcd/athena-ctf-2026-challs) | 13 | Python | 2026-07-19 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/astraqcd/athena-ctf-2026-challs) | Public archive of Athena CTF 2026 challenges: files, Docker services, and challenge READMEs. |
| 5 | [fhiltscher/awesome-ai-coding-sandboxes](https://github.com/fhiltscher/awesome-ai-coding-sandboxes) | 10 | Unknown | 2026-07-18 | 通用安全, AI 自动化 / Skill, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/fhiltscher/awesome-ai-coding-sandboxes) | Security-posture-first list of sandboxes for running AI coding agents' code, ranked by isolation, egress control and secrets handling |
| 6 | [grave0x/rapiscm](https://github.com/grave0x/rapiscm) | 4 | Rust | 2026-07-19 | 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/grave0x/rapiscm) | Rust API scanner — spec, URL, fuzz, ghost mode, JS bundle analysis |
| 7 | [Realynx/PolySIEM](https://github.com/Realynx/PolySIEM) | 4 | TypeScript | 2026-07-20 | 通用安全, 防守 / 蓝队, 网络安全 | [Repo](https://github.com/Realynx/PolySIEM) / [Homepage](https://demo-polysiem.f0x.app/) | Open-source homelab SIEM — your whole lab mapped, logged, and watched. Proxmox + OPNsense + Elastic sync, Suricata threat intel, and security scoring in one self-hosted dashboard. |
| 8 | [benolenick/security-shallots](https://github.com/benolenick/security-shallots) | 4 | Python | 2026-07-20 | 通用安全, AI 自动化 / Skill, 防守 / 蓝队, 网络安全 | [Repo](https://github.com/benolenick/security-shallots) | Small-footprint AI security scout for homelabs & small networks (1-10 machines). SIEM/NSM value without the 200GB data lake, runs on a Raspberry Pi. |
| 9 | [edenzaraf/wp2shell](https://github.com/edenzaraf/wp2shell) | 4 | Python | 2026-07-19 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/edenzaraf/wp2shell) | - |
| 10 | [frangelbarrera/code-review-agent-mcp](https://github.com/frangelbarrera/code-review-agent-mcp) | 4 | Python | 2026-07-20 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/frangelbarrera/code-review-agent-mcp) / [Homepage](https://pypi.org/project/code-review-agent-mcp/) | AI code review agent MCP server. Reviews code like a kernel maintainer: blunt, technical, no sugarcoating. Detects bugs + OWASP Top 10 security vulnerabilities. 4 harshness levels. Anti-RLHF. |
| 11 | [andikaputradev/nik-checker](https://github.com/andikaputradev/nik-checker) | 4 | Go | 2026-07-18 | 网络安全, 逆向 / 恶意代码 | [Repo](https://github.com/andikaputradev/nik-checker) | NIK Checker Premium: Aplikasi CLI untuk validasi, parsing, dan pelacakan informasi KTP NIK Indonesia dengan lookup wilayah terintegrasi. Dikembangkan dalam Go, arsitektur modular dan produksi-siap. |
| 12 | [screem500/prompt-injection-auditor](https://github.com/screem500/prompt-injection-auditor) | 2 | Python | 2026-07-19 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/screem500/prompt-injection-auditor) | Security audit skill for LLM agents - prompt injection scanner, attack catalog & defense checklist |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：22

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [CyberSunil/LLMVault](https://github.com/CyberSunil/LLMVault) | 215 | Python | 2026-07-15 | 渗透 / 红队, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/CyberSunil/LLMVault) | An intentionally vulnerable OWASP LLM Top 10 training platform for AI Security, Prompt Injection, RAG Security, Agent Security, and GenAI penetration testing. |
| 2 | [dinosn/fastjson-jsontype-rce-lab](https://github.com/dinosn/fastjson-jsontype-rce-lab) | 86 | Python | 2026-07-20 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/dinosn/fastjson-jsontype-rce-lab) | Docker lab + one-payload exploit + defensive scanner for the fastjson 1.2.66-1.2.83 @JSONType remote-class-load RCE (SSRF->defineClass under Spring Boot LaunchedURLClassLoader; autoType OFF; parseObject binding is not a mitigation) |
| 3 | [Kritt-ai/open-kritt](https://github.com/Kritt-ai/open-kritt) | 77 | JavaScript | 2026-07-20 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/Kritt-ai/open-kritt) / [Homepage](https://kritt.ai/) | Orchestrate AI agents to find real vulnerabilities in code. |
| 4 | [Codesteward/codesteward](https://github.com/Codesteward/codesteward) | 61 | TypeScript | 2026-07-14 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/Codesteward/codesteward) / [Homepage](https://docs.codesteward.ai/) | Agentic code review with structural graph intelligence — PR gate + branch stewardship. Self-hosted. Apache-2.0. |
| 5 | [dinosn/wp2shell-lab](https://github.com/dinosn/wp2shell-lab) | 34 | Python | 2026-07-18 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/dinosn/wp2shell-lab) | Non-destructive detector + Docker lab for wp2shell (CVE-2026-63030 REST /batch/v1 route confusion + CVE-2026-60137 author__not_in SQLi) in WordPress core 6.9.0-6.9.4 / 7.0.0-7.0.1 |
| 6 | [JVBotelho/ghosthound](https://github.com/JVBotelho/ghosthound) | 25 | Rust | 2026-07-16 | 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/JVBotelho/ghosthound) | GhostHound is a BloodHound OpenGraph extension that surfaces Active Directory tombstone reanimation as a first-class attack path, enumerating deleted objects via SHOW_DELETED, mapping who can restore them, and revealing when a reanimated identity regains privileged group membership. |
| 7 | [Leadrogue/Lanflux](https://github.com/Leadrogue/Lanflux) | 40 | Python | 2026-07-15 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/Leadrogue/Lanflux) / [Homepage](https://github.com/Leadrogue/Lanflux) | On-LAN recon and exploitation after wireless foothold — sibling to Wiflux |
| 8 | [AnuragRoy485/Telegram-OSINT-Toolkit](https://github.com/AnuragRoy485/Telegram-OSINT-Toolkit) | 23 | Python | 2026-07-15 | 网络安全 | [Repo](https://github.com/AnuragRoy485/Telegram-OSINT-Toolkit) | High-end Telegram OSINT Toolkit built with Telethon. Bulk keyword search, chat export, member enumeration, proxy/Tor support & SQLite. For cybersecurity & intelligence work. |
| 9 | [Moh4696/10-ai-careers-roadmap](https://github.com/Moh4696/10-ai-careers-roadmap) | 17 | Unknown | 2026-07-14 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/Moh4696/10-ai-careers-roadmap) | Free, structured learning library for 10 AI careers paying $135K-$1M+ in 2026. Companion to the @exploraX_ article. |
| 10 | [astraqcd/athena-ctf-2026-challs](https://github.com/astraqcd/athena-ctf-2026-challs) | 13 | Python | 2026-07-19 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/astraqcd/athena-ctf-2026-challs) | Public archive of Athena CTF 2026 challenges: files, Docker services, and challenge READMEs. |
| 11 | [fhiltscher/awesome-ai-coding-sandboxes](https://github.com/fhiltscher/awesome-ai-coding-sandboxes) | 10 | Unknown | 2026-07-18 | 通用安全, AI 自动化 / Skill, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/fhiltscher/awesome-ai-coding-sandboxes) | Security-posture-first list of sandboxes for running AI coding agents' code, ranked by isolation, egress control and secrets handling |
| 12 | [WiLL75G/soc-analyst-toolkit](https://github.com/WiLL75G/soc-analyst-toolkit) | 9 | Unknown | 2026-07-15 | 网络安全, AI 自动化 / Skill, 防守 / 蓝队 | [Repo](https://github.com/WiLL75G/soc-analyst-toolkit) | A curated arsenal of 55 blue team / detection engineering tools across 13 sections, mapped to real SOC workflows. Where a tool appears in your own lab work, the entry links to your writeup. |
| 13 | [Ali-hey-0/recon-modular](https://github.com/Ali-hey-0/recon-modular) | 6 | Shell | 2026-07-16 | 网络安全, 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/Ali-hey-0/recon-modular) | 🛡️ AI-powered reconnaissance framework unifying 130+ security tools — subdomain enum, vuln scanning, cloud/IoT recon, dark web monitoring & blockchain-audited reporting. GAN-driven subdomain prediction, distributed execution post-quantum encryption. Built for bug bounty, red team & DevSecOps. |
| 14 | [rohitkhatri1st/ghost-captcha](https://github.com/rohitkhatri1st/ghost-captcha) | 12 | Go | 2026-07-16 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/rohitkhatri1st/ghost-captcha) / [Homepage](https://rohitkhatri1st.github.io/ghost-captcha/) | Animated Font and CAPTCHA library for Go — invisible in any single frame, only readable in motion. Resists OCR and AI vision models. |
| 15 | [optimuslabs-io/grokpatrol](https://github.com/optimuslabs-io/grokpatrol) | 12 | Go | 2026-07-14 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/optimuslabs-io/grokpatrol) / [Homepage](https://www.optimuslabs.io/grokpatrol/) | Open-source, offline forensic scanner CLI tool designed to detect evidence of git repo collection or upload by the Grok Build CLI to xAI infrastructure. |
| 16 | [Iankulani/blue_swan](https://github.com/Iankulani/blue_swan) | 5 | Python | 2026-07-15 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/Iankulani/blue_swan) | Blue Swan is an enterprise-grade cybersecurity platform designed to help organizations monitor, protect, and manage their digital infrastructure from a single unified interface. The platform enables authorized security administrators to remotely perform security operations, monitor infrastructure, investigate incidents, automate defensive workflows |
