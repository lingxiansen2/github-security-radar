# GitHub Security Radar

> 更新时间：2026-10-22T06:05:58.727Z
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
- 候选项目数：25

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [opentrap/opentrap](https://github.com/opentrap/opentrap) | 344 | Java | 2026-10-19 | 通用安全, 渗透 / 红队, 网络安全 | [Repo](https://github.com/opentrap/opentrap) / [Homepage](https://opentrap.github.io/opentrap) | A free, open-source alternative to Burp Suite: an intercepting proxy and web app security testing suite with Repeater, Intruder, Collaborator and a built-in OWASP ZAP scanner. Linux, AGPL-3.0. |
| 2 | [Alejandros17487/ai-jailbreaks](https://github.com/Alejandros17487/ai-jailbreaks) | 206 | Unknown | 2026-10-21 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/Alejandros17487/ai-jailbreaks) | AI jailbreaks: 35 paste-ready AI jailbreak prompts for 25+ frontier and open-weight models - system prompts, AGENTS.md specs, and Ollama Modelfiles. Built for AI security research and red-team testing. |
| 3 | [JoasASantos/php2shell-scanner](https://github.com/JoasASantos/php2shell-scanner) | 68 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防 | [Repo](https://github.com/JoasASantos/php2shell-scanner) | Non-destructive scanner for CVE-2026-109618 / CVE-2026-109619 (PHP core RCE). Subdomain recon via crt.sh + subfinder, robust banner grabbing, version-based detection. |
| 4 | [syhunt/php2shell-protection](https://github.com/syhunt/php2shell-protection) | 65 | PHP | 2026-10-21 | 网络安全, 漏洞研究 / 攻防 | [Repo](https://github.com/syhunt/php2shell-protection) | Emergency Apache mitigation and testing toolkit for php2shell (CVE-2026-109618 / CVE-2026-109619), featuring multipart POST blocking, request-size limits, and additional hardening measures. |
| 5 | [david-alvarez-rosa/php-rce](https://github.com/david-alvarez-rosa/php-rce) | 17 | Python | 2026-10-21 | 通用安全, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/david-alvarez-rosa/php-rce) | Exploits for CVE-2026-109618 / CVE-2026-109619 to achieve RCE on PHP targets |
| 6 | [hassan-algo/open-sesame](https://github.com/hassan-algo/open-sesame) | 23 | HTML | 2026-10-21 | 通用安全, 渗透 / 红队, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/hassan-algo/open-sesame) | 🔓 An AI web-pentest skill for Claude Code. Point it at a site you're authorized to test — it maps the attack surface, works through the OWASP WSTG, validates findings, and writes dev + stakeholder reports (PDF). |
| 7 | [QERSSD/HowToAvoidScams](https://github.com/QERSSD/HowToAvoidScams) | 52 | HTML | 2026-10-19 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/QERSSD/HowToAvoidScams) / [Homepage](https://qerssd.github.io/HowToAvoidScams/) | 人间防骗指南：373 篇骗局拆解，覆盖刷单、杀猪盘、AI 换脸、养老诈骗等 16 类；附真实案例报道、生活自查清单、PDF/EPUB/Anki 下载，还有 12 局防骗小游戏 |
| 8 | [Whackermelon/Php2Shell-POC](https://github.com/Whackermelon/Php2Shell-POC) | 10 | Python | 2026-10-21 | 通用安全, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/Whackermelon/Php2Shell-POC) / [Homepage](https://github.com/Whackermelon/Php2Shell-POC) | Pre-auth remote code execution & reverse shell PoC for CVE-2026-109618 / CVE-2026-109619 - PHP core session upload-progress. One URL in, a reverse shell out. |
| 9 | [Anton-Barinov/php2shell-patches](https://github.com/Anton-Barinov/php2shell-patches) | 21 | Shell | 2026-10-21 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/Anton-Barinov/php2shell-patches) | php2shell (CVE-2026-109618/CVE-2026-109619) emergency patches for old PHP 5.6/7.x/8.0/8.1 — official + community backports, enhanced universal patch keeping file uploads & progress bars. For OpenCart, WordPress, HestiaCP/VestaCP legacy servers. EOL PHP RCE fix. |
| 10 | [pentestershell/php2shellbt](https://github.com/pentestershell/php2shellbt) | 17 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/pentestershell/php2shellbt) | Python scanner for CVE-2026-109618, CVE-2026-109619 and the php2shell session chains (handler mismatch + LFI). No external dependencies. |
| 11 | [xuehuolll/php2shell-CVE-2026-109618-109619](https://github.com/xuehuolll/php2shell-CVE-2026-109618-109619) | 17 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/xuehuolll/php2shell-CVE-2026-109618-109619) | CVE-2026-109618/109619 — PHP session.upload_progress pre-auth RCE. Exploit research: remote ASLR chain, PoC & patch analysis. |
| 12 | [UCYBERS/PhoneHackScan](https://github.com/UCYBERS/PhoneHackScan) | 6 | Python | 2026-10-21 | 网络安全 | [Repo](https://github.com/UCYBERS/PhoneHackScan) / [Homepage](https://ucybers.com/) | Android & iPhone intrusion check |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：28

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [opentrap/opentrap](https://github.com/opentrap/opentrap) | 344 | Java | 2026-10-19 | 通用安全, 渗透 / 红队, 网络安全 | [Repo](https://github.com/opentrap/opentrap) / [Homepage](https://opentrap.github.io/opentrap) | A free, open-source alternative to Burp Suite: an intercepting proxy and web app security testing suite with Repeater, Intruder, Collaborator and a built-in OWASP ZAP scanner. Linux, AGPL-3.0. |
| 2 | [Alejandros17487/ai-jailbreaks](https://github.com/Alejandros17487/ai-jailbreaks) | 206 | Unknown | 2026-10-21 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/Alejandros17487/ai-jailbreaks) | AI jailbreaks: 35 paste-ready AI jailbreak prompts for 25+ frontier and open-weight models - system prompts, AGENTS.md specs, and Ollama Modelfiles. Built for AI security research and red-team testing. |
| 3 | [syhunt/php2shell-protection](https://github.com/syhunt/php2shell-protection) | 65 | PHP | 2026-10-21 | 网络安全, 漏洞研究 / 攻防 | [Repo](https://github.com/syhunt/php2shell-protection) | Emergency Apache mitigation and testing toolkit for php2shell (CVE-2026-109618 / CVE-2026-109619), featuring multipart POST blocking, request-size limits, and additional hardening measures. |
| 4 | [JoasASantos/php2shell-scanner](https://github.com/JoasASantos/php2shell-scanner) | 68 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防 | [Repo](https://github.com/JoasASantos/php2shell-scanner) | Non-destructive scanner for CVE-2026-109618 / CVE-2026-109619 (PHP core RCE). Subdomain recon via crt.sh + subfinder, robust banner grabbing, version-based detection. |
| 5 | [Fazmin/cve-intel](https://github.com/Fazmin/cve-intel) | 87 | Rust | 2026-10-18 | 网络安全, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/Fazmin/cve-intel) | Local security intelligence for CVE triage - 38 data sources and 36 tools, risk scores and an MCP server for AI agents, all in native Rust. Private by default. |
| 6 | [hassan-algo/open-sesame](https://github.com/hassan-algo/open-sesame) | 23 | HTML | 2026-10-21 | 通用安全, 渗透 / 红队, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/hassan-algo/open-sesame) | 🔓 An AI web-pentest skill for Claude Code. Point it at a site you're authorized to test — it maps the attack surface, works through the OWASP WSTG, validates findings, and writes dev + stakeholder reports (PDF). |
| 7 | [david-alvarez-rosa/php-rce](https://github.com/david-alvarez-rosa/php-rce) | 17 | Python | 2026-10-21 | 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/david-alvarez-rosa/php-rce) | Exploits for CVE-2026-109618 / CVE-2026-109619 to achieve RCE on PHP targets |
| 8 | [QERSSD/HowToAvoidScams](https://github.com/QERSSD/HowToAvoidScams) | 52 | HTML | 2026-10-19 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/QERSSD/HowToAvoidScams) / [Homepage](https://qerssd.github.io/HowToAvoidScams/) | 人间防骗指南：373 篇骗局拆解，覆盖刷单、杀猪盘、AI 换脸、养老诈骗等 16 类；附真实案例报道、生活自查清单、PDF/EPUB/Anki 下载，还有 12 局防骗小游戏 |
| 9 | [kamalx06/TornadoC2](https://github.com/kamalx06/TornadoC2) | 29 | Python | 2026-10-15 | 渗透 / 红队, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/kamalx06/TornadoC2) | Pull-based C2 framework with ten native transports, concurrent multi-profile handlers, and end-to-end ECDSA-signed tasking. Single Go binary agent with every property baked in at build time. Multi-operator team server with RBAC, audit chain, and a Qt/CLI console. Linux + Windows, amd64 + arm64. |
| 10 | [Whackermelon/Php2Shell-POC](https://github.com/Whackermelon/Php2Shell-POC) | 10 | Python | 2026-10-21 | 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/Whackermelon/Php2Shell-POC) / [Homepage](https://github.com/Whackermelon/Php2Shell-POC) | Pre-auth remote code execution & reverse shell PoC for CVE-2026-109618 / CVE-2026-109619 - PHP core session upload-progress. One URL in, a reverse shell out. |
| 11 | [muhammadrizwan87/frida-hook-engine](https://github.com/muhammadrizwan87/frida-hook-engine) | 13 | JavaScript | 2026-10-18 | 渗透 / 红队, 逆向 / 恶意代码, 网络安全 | [Repo](https://github.com/muhammadrizwan87/frida-hook-engine) | Config-driven Frida instrumentation engine for Android security researchers and reverse engineers. Zero scripting required, built for simplicity and ease of use. |
| 12 | [Anton-Barinov/php2shell-patches](https://github.com/Anton-Barinov/php2shell-patches) | 21 | Shell | 2026-10-21 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/Anton-Barinov/php2shell-patches) | php2shell (CVE-2026-109618/CVE-2026-109619) emergency patches for old PHP 5.6/7.x/8.0/8.1 — official + community backports, enhanced universal patch keeping file uploads & progress bars. For OpenCart, WordPress, HestiaCP/VestaCP legacy servers. EOL PHP RCE fix. |
| 13 | [pentestershell/php2shellbt](https://github.com/pentestershell/php2shellbt) | 17 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/pentestershell/php2shellbt) | Python scanner for CVE-2026-109618, CVE-2026-109619 and the php2shell session chains (handler mismatch + LFI). No external dependencies. |
| 14 | [irraz/vulnerator-ai](https://github.com/irraz/vulnerator-ai) | 34 | Python | 2026-10-15 | 通用安全, AI 自动化 / Skill, 渗透 / 红队 | [Repo](https://github.com/irraz/vulnerator-ai) | Autonomous OODA-loop pentesting agent. Hermes brain, Kali + Playwright tools over MCP, ATT&CK as the Orient language. |
| 15 | [aalbata/machine-learning-for-cybersecurity](https://github.com/aalbata/machine-learning-for-cybersecurity) | 21 | Jupyter Notebook | 2026-10-15 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/aalbata/machine-learning-for-cybersecurity) / [Homepage](https://aalbata.github.io/machine-learning-for-cybersecurity/) | A free course on machine learning for cybersecurity and the security of machine learning, with lessons, runnable labs, exercises and quizzes. By Dr. Ali Al Bataineh, Higher Colleges of Technology. |
| 16 | [pirrandi/flowdit](https://github.com/pirrandi/flowdit) | 16 | JavaScript | 2026-10-17 | 网络安全, 渗透 / 红队 | [Repo](https://github.com/pirrandi/flowdit) | Self-hosted pentest engagement management and report. |
| 17 | [HelpFreedom/nv](https://github.com/HelpFreedom/nv) | 21 | Lua | 2026-10-15 | 通用安全, 网络安全 | [Repo](https://github.com/HelpFreedom/nv) | Neovim 0.12, собранный с нуля: проверенный код, серверы языков без сети, цвета из обоев, всё по-русски · A security-minded Neovim config built from scratch |
| 18 | [QuacksOnWelfare/DedSecLab](https://github.com/QuacksOnWelfare/DedSecLab) | 13 | Python | 2026-10-19 | 网络安全 | [Repo](https://github.com/QuacksOnWelfare/DedSecLab) / [Homepage](https://dedsecvpn.cloud/) | DedSecLab — open-source cyber lab: a Windows PyQt6 client, OpenVPN-gated FastAPI backend, and ForceCommand SSH ops menus in one tree. Run it on your own VPS with your own profiles. |
