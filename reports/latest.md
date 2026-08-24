# GitHub Security Radar

> 更新时间：2026-08-24T14:03:39.975Z
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
- 候选项目数：26

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [DavidCarliez/cover](https://github.com/DavidCarliez/cover) | 38 | Go | 2026-08-21 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/DavidCarliez/cover) | Reversible privacy proxy for AI agents: send realistic fakes, restore originals locally. |
| 2 | [shoebpate1/ai-agent-hacking-writeups](https://github.com/shoebpate1/ai-agent-hacking-writeups) | 19 | Unknown | 2026-08-21 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/shoebpate1/ai-agent-hacking-writeups) / [Homepage](https://research.shoebpatel.com/how-to-hack-ai-agents/) | A collection of public writeups on attacks against AI agents: prompt injection, tool abuse, memory poisoning, and data exfiltration. |
| 3 | [MNSH-Nexo/telegram-webproxy-installer](https://github.com/MNSH-Nexo/telegram-webproxy-installer) | 9 | Shell | 2026-08-22 | 通用安全 | [Repo](https://github.com/MNSH-Nexo/telegram-webproxy-installer) | One-click multi-instance Telegram web proxy installer (MTProxy + Caddy) for Debian/Ubuntu servers. |
| 4 | [F0ran9/AI-PENTEST](https://github.com/F0ran9/AI-PENTEST) | 4 | Python | 2026-08-23 | 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/F0ran9/AI-PENTEST) | AI 驱动的多 Agent 自动化渗透测试平台：LLM 协调员+监察员编排专项子 Agent，授权边界内自动完成侦察→漏洞检测→利用验证→取证报告。Web 渗透 + C2 双作业线，45+ 原生工具，Docker 一键部署 |
| 5 | [Mon-bid/Diffuzz](https://github.com/Mon-bid/Diffuzz) | 2 | JavaScript | 2026-08-24 | 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/Mon-bid/Diffuzz) | 在 Chrome DevTools 中直接对授权目标做请求变异与响应差异分析的轻量级工具，无需代理或Burp。Authorized-testing request fuzzing & response diffing. |
| 6 | [Krishita17/TokenTaint](https://github.com/Krishita17/TokenTaint) | 4 | Python | 2026-08-23 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/Krishita17/TokenTaint) | Provenance-tracking firewall that stops LLM agent prompt injection (OWASP LLM01) via token-level taint analysis — a zero-trust, deny-by-default guard on privileged tool calls. |
| 7 | [Naqaab50/Dork](https://github.com/Naqaab50/Dork) | 5 | Unknown | 2026-08-21 | 网络安全, AI 自动化 / Skill, 渗透 / 红队 | [Repo](https://github.com/Naqaab50/Dork) | A curated collection of advanced Google Dork search patterns built for modern security auditing, OSINT, and bug bounty recon. Covers sensitive file leaks, misconfigured cloud storage, unlinked API endpoints, vector database exposures, and IoT infrastructure. Designed to cut search noise and deliver high-impact reconnaissance. Educational use only. |
| 8 | [PrismorSec/patchbot](https://github.com/PrismorSec/patchbot) | 2 | Python | 2026-08-23 | 通用安全, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/PrismorSec/patchbot) / [Homepage](https://pypi.org/project/patchbot/) | Vulnerability scanning with your own scanners and threat feeds, plus a coding agent that opens the fix PR. CLI, GitHub Action, or scheduled Managed Agents deployment. |
| 9 | [tkusal/ClipCloak](https://github.com/tkusal/ClipCloak) | 4 | TypeScript | 2026-08-22 | 通用安全, 网络安全, AI 自动化 / Skill | [Repo](https://github.com/tkusal/ClipCloak) | A local-first security layer that helps prevent accidental leaks of secrets, API keys, and PII to AI coding agents, developer tools, and chats. |
| 10 | [RaffiDevYT/fluxwall-antiddos](https://github.com/RaffiDevYT/fluxwall-antiddos) | 2 | TypeScript | 2026-08-23 | 网络安全, 渗透 / 红队 | [Repo](https://github.com/RaffiDevYT/fluxwall-antiddos) | Ultimate Nginx & OpenResty Anti-DDoS Layer 7 Security Gateway. Mitigates HTTP Floods, Botnets, Slowloris & Brute Force with Redis Rate Limiting, JS PoW Challenge (Cloudflare Under Attack Mode), WAF Exploit Blocker (SQLi/XSS), GeoIP/ASN Bot Filter, Kernel iptables Sync, Prometheus Metrics & Live Web Admin Dashboard UI. |
| 11 | [softwareasg-tools/information-security-for-vibecoded-apps](https://github.com/softwareasg-tools/information-security-for-vibecoded-apps) | 2 | Unknown | 2026-08-22 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/softwareasg-tools/information-security-for-vibecoded-apps) | An autonomous Application Security (AppSec) prompt and skill module for AI coding assistants (Antigravity, Cursor, Copilot). Converts vibe-coded apps into secure production software |
| 12 | [Jasil-cyber/netguard-lite](https://github.com/Jasil-cyber/netguard-lite) | 4 | Python | 2026-08-21 | 网络安全 | [Repo](https://github.com/Jasil-cyber/netguard-lite) | Python + Scapy network intrusion detector for ARP spoofing & port scans, with a Splunk dashboard |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：24

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [Zyrexnn/Cybermes](https://github.com/Zyrexnn/Cybermes) | 372 | Python | 2026-08-19 | 网络安全, 渗透 / 红队, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/Zyrexnn/Cybermes) | Autonomous Offensive Security, Bug Bounty & Red Teaming Agent Framework powered by Hermes Agent, specialized reasoning skills, and multi-model LLM orchestration. |
| 2 | [DavidCarliez/cover](https://github.com/DavidCarliez/cover) | 38 | Go | 2026-08-21 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/DavidCarliez/cover) | Reversible privacy proxy for AI agents: send realistic fakes, restore originals locally. |
| 3 | [sanjarbiy/bugbountyrules](https://github.com/sanjarbiy/bugbountyrules) | 30 | Shell | 2026-08-17 | 网络安全, 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/sanjarbiy/bugbountyrules) | Behavioral-discipline skill turning an AI agent into a methodical, non-robotic bug-bounty & pentest hunter - 42 always-on rules: scope, coverage, no false positives, never quits early. |
| 4 | [KBT096/windows-secure-toolkit](https://github.com/KBT096/windows-secure-toolkit) | 37 | C# | 2026-08-18 | 通用安全, 网络安全 | [Repo](https://github.com/KBT096/windows-secure-toolkit) | Local Windows security auditing and reversible hardening with a C#/.NET Framework 4.8 core and CMD/BAT entry points. |
| 5 | [armourinfosec/Offensive-Linux-Privilege-Escalation](https://github.com/armourinfosec/Offensive-Linux-Privilege-Escalation) | 14 | Unknown | 2026-08-19 | 渗透 / 红队, AI 自动化 / Skill, 防守 / 蓝队, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/armourinfosec/Offensive-Linux-Privilege-Escalation) / [Homepage](https://www.armourinfosec.com) | Offensive Linux Privilege Escalation — hands-on study notes: enumeration, sudo/SUID/capabilities, cron & systemd timers, kernel LPEs (DirtyPipe/OverlayFS/PwnKit), container & namespace escapes, and credential mining. Each technique with detection & defenses. CC BY 4.0. |
| 6 | [armourinfosec/Offensive-Windows-Privilege-Escalation](https://github.com/armourinfosec/Offensive-Windows-Privilege-Escalation) | 14 | Unknown | 2026-08-19 | 网络安全, 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防 | [Repo](https://github.com/armourinfosec/Offensive-Windows-Privilege-Escalation) / [Homepage](https://www.armourinfosec.com) | Offensive Windows Privilege Escalation — hands-on study notes: enumeration & methodology, service/scheduled-task misconfigs, UAC bypass, token-privilege abuse, the potato family, kernel exploits, and credential mining. Each technique with detection & defenses. CC BY 4.0. |
| 7 | [armourinfosec/Offensive-File-Transfer-Techniques](https://github.com/armourinfosec/Offensive-File-Transfer-Techniques) | 13 | Unknown | 2026-08-19 | 网络安全, 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防 | [Repo](https://github.com/armourinfosec/Offensive-File-Transfer-Techniques) / [Homepage](https://www.armourinfosec.com) | Offensive File Transfer Techniques — hands-on study notes on moving files to and from a target during an engagement across every channel: HTTP/SMB/FTP/TFTP/WebDAV, netcat/socat, scp/rsync, LOLBAS/GTFOBins, base64 no-egress, Meterpreter, plus detection. CC BY 4.0. |
| 8 | [armourinfosec/Python-for-Security-Professionals](https://github.com/armourinfosec/Python-for-Security-Professionals) | 12 | Unknown | 2026-08-19 | 网络安全, 渗透 / 红队 | [Repo](https://github.com/armourinfosec/Python-for-Security-Professionals) / [Homepage](https://www.armourinfosec.com) | Python for Security Professionals — lab-driven study notes: language fundamentals, the standard library, concurrency and packaging, then building port scanners, log analysers, and recon tooling. 14 modules, 8 labs, 16 projects, 138 flashcards. CC BY 4.0. |
| 9 | [pale-knight/redteam-skill](https://github.com/pale-knight/redteam-skill) | 13 | Python | 2026-08-20 | 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/pale-knight/redteam-skill) | Redteam / Pentest Skill Pack — semi-automated workflow + on-demand module selection + real-world attack chains \| Kali + Claude Code 红队/渗透/技能包 - 半自动工作流 + 按需点选模块 + 实战利用链 \| 基于 Kali 与 Claude Code |
| 10 | [shoebpate1/ai-agent-hacking-writeups](https://github.com/shoebpate1/ai-agent-hacking-writeups) | 19 | Unknown | 2026-08-21 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/shoebpate1/ai-agent-hacking-writeups) / [Homepage](https://research.shoebpatel.com/how-to-hack-ai-agents/) | A collection of public writeups on attacks against AI agents: prompt injection, tool abuse, memory poisoning, and data exfiltration. |
| 11 | [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) | 23 | JavaScript | 2026-08-19 | 通用安全, AI 自动化 / Skill, 防守 / 蓝队, 网络安全 | [Repo](https://github.com/PensiveFei/dsh-secure-audit) | Read-only security & compliance plugin for DeepSeek Harness: prompt-injection detection, Chinese-PII redaction, and local configuration audit with redacted, reproducible reports. |
| 12 | [duty1g/jspacket](https://github.com/duty1g/jspacket) | 9 | TypeScript | 2026-08-18 | 渗透 / 红队 | [Repo](https://github.com/duty1g/jspacket) | a lightweight, fast, and fully portable reimplementation of Impacket in TypeScript and JavaScript. |
| 13 | [MNSH-Nexo/telegram-webproxy-installer](https://github.com/MNSH-Nexo/telegram-webproxy-installer) | 9 | Shell | 2026-08-22 | 通用安全 | [Repo](https://github.com/MNSH-Nexo/telegram-webproxy-installer) | One-click multi-instance Telegram web proxy installer (MTProxy + Caddy) for Debian/Ubuntu servers. |
| 14 | [kyos-public/keycloak-cve-2026-18963-hunt](https://github.com/kyos-public/keycloak-cve-2026-18963-hunt) | 9 | Unknown | 2026-08-20 | 通用安全, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/kyos-public/keycloak-cve-2026-18963-hunt) | Hunt for CVE-2026-18963 exploitation traces (Keycloak unauthenticated account takeover) in the Keycloak database |
| 15 | [fxerkan/concealer](https://github.com/fxerkan/concealer) | 14 | Python | 2026-08-17 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/fxerkan/concealer) / [Homepage](https://fxerkan.github.io/concealer/) | 🔐 Local‑only, single‑file secret manager for the AI‑coding era with MCP, TUI, Web UI and CLI. No cloud, No telemetry, No account. |
| 16 | [jiangkoumo/toolfence](https://github.com/jiangkoumo/toolfence) | 14 | TypeScript | 2026-08-17 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/jiangkoumo/toolfence) | Local, fail-closed policy enforcement and human approval for MCP tool calls. |
| 17 | [Naqaab50/Dork](https://github.com/Naqaab50/Dork) | 5 | Unknown | 2026-08-21 | 网络安全, AI 自动化 / Skill, 渗透 / 红队 | [Repo](https://github.com/Naqaab50/Dork) | A curated collection of advanced Google Dork search patterns built for modern security auditing, OSINT, and bug bounty recon. Covers sensitive file leaks, misconfigured cloud storage, unlinked API endpoints, vector database exposures, and IoT infrastructure. Designed to cut search noise and deliver high-impact reconnaissance. Educational use only. |
| 18 | [Krishita17/KeyWraith](https://github.com/Krishita17/KeyWraith) | 5 | Python | 2026-08-19 | 网络安全, 防守 / 蓝队, AI 自动化 / Skill | [Repo](https://github.com/Krishita17/KeyWraith) | Adaptive BadUSB/HID attack emulation + behavioral endpoint detection with the Flipper Zero. Defensive-security research: build a labeled human-vs-injected keystroke dataset, train an EDR-style detector, and red-team it with an adaptive humanized attacker. |
