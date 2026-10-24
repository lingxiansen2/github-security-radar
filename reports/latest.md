# GitHub Security Radar

> 更新时间：2026-10-24T05:48:33.132Z
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
- 候选项目数：31

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [Alejandros17487/ai-jailbreaks](https://github.com/Alejandros17487/ai-jailbreaks) | 495 | Unknown | 2026-10-21 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/Alejandros17487/ai-jailbreaks) | AI jailbreaks: 35 paste-ready AI jailbreak prompts for 25+ frontier and open-weight models - system prompts, AGENTS.md specs, and Ollama Modelfiles. Built for AI security research and red-team testing. |
| 2 | [devploit/php2shell](https://github.com/devploit/php2shell) | 143 | Python | 2026-10-21 | 渗透 / 红队, 防守 / 蓝队, 逆向 / 恶意代码, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/devploit/php2shell) | PHP2Shell: version-aware research toolkit for CVE-2026-109618 / CVE-2026-109619 — pre-auth RCE in PHP session.upload_progress (mod_php). Build profiles, labs, heap calibration and detection guidance for authorized security testing. |
| 3 | [hassan-algo/open-sesame](https://github.com/hassan-algo/open-sesame) | 86 | HTML | 2026-10-21 | 通用安全, 渗透 / 红队, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/hassan-algo/open-sesame) | 🔓 An AI web-pentest skill for Claude Code. Point it at a site you're authorized to test — it maps the attack surface, works through the OWASP WSTG, validates findings, and writes dev + stakeholder reports (PDF). |
| 4 | [aarsaputra/php2shell](https://github.com/aarsaputra/php2shell) | 30 | Python | 2026-10-23 | 通用安全, 渗透 / 红队, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/aarsaputra/php2shell) | Unauthenticated RCE toolkit for PHP 5.4–8.4.26 (CVE-2026-109619/109618) — pure-HTTP chain, JA3 impersonation, prpenetration-testingoof-of-access design |
| 5 | [syhunt/php2shell-protection](https://github.com/syhunt/php2shell-protection) | 103 | PHP | 2026-10-21 | 网络安全, 逆向 / 恶意代码, 漏洞研究 / 攻防 | [Repo](https://github.com/syhunt/php2shell-protection) | Defensive mitigation and testing toolkit for PHP security vulnerabilities (CVE-2026-109618, CVE-2026-109619, CVE-2026-115560), including Apache protections and PHP hardening guidance |
| 6 | [JoasASantos/php2shell-scanner](https://github.com/JoasASantos/php2shell-scanner) | 106 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防 | [Repo](https://github.com/JoasASantos/php2shell-scanner) | Non-destructive scanner for CVE-2026-109618 / CVE-2026-109619 (PHP core RCE). Subdomain recon via crt.sh + subfinder, robust banner grabbing, version-based detection. |
| 7 | [HOSTED-POWER/php_uploadprogress_guard](https://github.com/HOSTED-POWER/php_uploadprogress_guard) | 142 | C | 2026-10-21 | 通用安全, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/HOSTED-POWER/php_uploadprogress_guard) / [Homepage](https://www.hosted-power.com) | Protects an unpatched PHP against php2shell (CVE-2026-109618 / CVE-2026-109619): a small extension that mirrors the official fix component by component and steps aside once the engine carries it. PHP 5.6-8.5; Sury, cPanel EA4, DirectAdmin, Docker, Windows. |
| 8 | [Anton-Barinov/php2shell-patches](https://github.com/Anton-Barinov/php2shell-patches) | 97 | Shell | 2026-10-21 | 通用安全, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/Anton-Barinov/php2shell-patches) | php2shell (CVE-2026-109618 & CVE-2026-109619) security patches for EOL PHP 5.4–8.1. Official & enhanced backports for vanilla php.net and Remi Collet trees. Restores safe file uploads & progress bars without RCE. Fleet-tested on OpenCart, WordPress, HestiaCP, aaPanel. |
| 9 | [UCYBERS/PhoneHackScan](https://github.com/UCYBERS/PhoneHackScan) | 71 | Python | 2026-10-21 | 网络安全 | [Repo](https://github.com/UCYBERS/PhoneHackScan) / [Homepage](https://ucybers.com/) | Android & iPhone intrusion check |
| 10 | [david-alvarez-rosa/php-rce](https://github.com/david-alvarez-rosa/php-rce) | 34 | Python | 2026-10-21 | 通用安全, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/david-alvarez-rosa/php-rce) | Exploits for CVE-2026-109618 / CVE-2026-109619 to achieve RCE on PHP targets |
| 11 | [pentestershell/php2shellbt](https://github.com/pentestershell/php2shellbt) | 66 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/pentestershell/php2shellbt) | Python scanner for CVE-2026-109618, CVE-2026-109619 and the php2shell session chains (handler mismatch + LFI). No external dependencies. |
| 12 | [mpyw/php-eol-CVE-2026-109618-109619](https://github.com/mpyw/php-eol-CVE-2026-109618-109619) | 56 | Dockerfile | 2026-10-21 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/mpyw/php-eol-CVE-2026-109618-109619) / [Homepage](https://ghcr.io/mpyw/php-eol-cve-2026-109618-109619) | PHP 7.4 / 8.0 / 8.1 Docker images with the CVE-2026-109618 / CVE-2026-109619 fix backported |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：32

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [opentrap/opentrap](https://github.com/opentrap/opentrap) | 450 | Java | 2026-10-19 | 通用安全, 渗透 / 红队, 网络安全 | [Repo](https://github.com/opentrap/opentrap) / [Homepage](https://opentrap.github.io/opentrap) | A free, open-source alternative to Burp Suite: an intercepting proxy and web app security testing suite with Repeater, Intruder, Collaborator and a built-in OWASP ZAP scanner. Linux, AGPL-3.0. |
| 2 | [Alejandros17487/ai-jailbreaks](https://github.com/Alejandros17487/ai-jailbreaks) | 495 | Unknown | 2026-10-21 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/Alejandros17487/ai-jailbreaks) | AI jailbreaks: 35 paste-ready AI jailbreak prompts for 25+ frontier and open-weight models - system prompts, AGENTS.md specs, and Ollama Modelfiles. Built for AI security research and red-team testing. |
| 3 | [devploit/php2shell](https://github.com/devploit/php2shell) | 143 | Python | 2026-10-21 | 渗透 / 红队, 防守 / 蓝队, 逆向 / 恶意代码, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/devploit/php2shell) | PHP2Shell: version-aware research toolkit for CVE-2026-109618 / CVE-2026-109619 — pre-auth RCE in PHP session.upload_progress (mod_php). Build profiles, labs, heap calibration and detection guidance for authorized security testing. |
| 4 | [hassan-algo/open-sesame](https://github.com/hassan-algo/open-sesame) | 86 | HTML | 2026-10-21 | 通用安全, 渗透 / 红队, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/hassan-algo/open-sesame) | 🔓 An AI web-pentest skill for Claude Code. Point it at a site you're authorized to test — it maps the attack surface, works through the OWASP WSTG, validates findings, and writes dev + stakeholder reports (PDF). |
| 5 | [syhunt/php2shell-protection](https://github.com/syhunt/php2shell-protection) | 103 | PHP | 2026-10-21 | 网络安全, 逆向 / 恶意代码, 漏洞研究 / 攻防 | [Repo](https://github.com/syhunt/php2shell-protection) | Defensive mitigation and testing toolkit for PHP security vulnerabilities (CVE-2026-109618, CVE-2026-109619, CVE-2026-115560), including Apache protections and PHP hardening guidance |
| 6 | [JoasASantos/php2shell-scanner](https://github.com/JoasASantos/php2shell-scanner) | 106 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防 | [Repo](https://github.com/JoasASantos/php2shell-scanner) | Non-destructive scanner for CVE-2026-109618 / CVE-2026-109619 (PHP core RCE). Subdomain recon via crt.sh + subfinder, robust banner grabbing, version-based detection. |
| 7 | [HOSTED-POWER/php_uploadprogress_guard](https://github.com/HOSTED-POWER/php_uploadprogress_guard) | 142 | C | 2026-10-21 | 通用安全, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/HOSTED-POWER/php_uploadprogress_guard) / [Homepage](https://www.hosted-power.com) | Protects an unpatched PHP against php2shell (CVE-2026-109618 / CVE-2026-109619): a small extension that mirrors the official fix component by component and steps aside once the engine carries it. PHP 5.6-8.5; Sury, cPanel EA4, DirectAdmin, Docker, Windows. |
| 8 | [aarsaputra/php2shell](https://github.com/aarsaputra/php2shell) | 30 | Python | 2026-10-23 | 渗透 / 红队, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/aarsaputra/php2shell) | Unauthenticated RCE toolkit for PHP 5.4–8.4.26 (CVE-2026-109619/109618) — pure-HTTP chain, JA3 impersonation, prpenetration-testingoof-of-access design |
| 9 | [Anton-Barinov/php2shell-patches](https://github.com/Anton-Barinov/php2shell-patches) | 97 | Shell | 2026-10-21 | 通用安全, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/Anton-Barinov/php2shell-patches) | php2shell (CVE-2026-109618 & CVE-2026-109619) security patches for EOL PHP 5.4–8.1. Official & enhanced backports for vanilla php.net and Remi Collet trees. Restores safe file uploads & progress bars without RCE. Fleet-tested on OpenCart, WordPress, HestiaCP, aaPanel. |
| 10 | [UCYBERS/PhoneHackScan](https://github.com/UCYBERS/PhoneHackScan) | 71 | Python | 2026-10-21 | 网络安全 | [Repo](https://github.com/UCYBERS/PhoneHackScan) / [Homepage](https://ucybers.com/) | Android & iPhone intrusion check |
| 11 | [david-alvarez-rosa/php-rce](https://github.com/david-alvarez-rosa/php-rce) | 34 | Python | 2026-10-21 | 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/david-alvarez-rosa/php-rce) | Exploits for CVE-2026-109618 / CVE-2026-109619 to achieve RCE on PHP targets |
| 12 | [Fazmin/cve-intel](https://github.com/Fazmin/cve-intel) | 94 | Rust | 2026-10-18 | 网络安全, AI 自动化 / Skill, 漏洞研究 / 攻防 | [Repo](https://github.com/Fazmin/cve-intel) | Local security intelligence for CVE triage - 39 data sources and 36 tools, risk scores and an MCP server for AI agents, all in native Rust. Private by default. |
| 13 | [pentestershell/php2shellbt](https://github.com/pentestershell/php2shellbt) | 66 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/pentestershell/php2shellbt) | Python scanner for CVE-2026-109618, CVE-2026-109619 and the php2shell session chains (handler mismatch + LFI). No external dependencies. |
| 14 | [mpyw/php-eol-CVE-2026-109618-109619](https://github.com/mpyw/php-eol-CVE-2026-109618-109619) | 56 | Dockerfile | 2026-10-21 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/mpyw/php-eol-CVE-2026-109618-109619) / [Homepage](https://ghcr.io/mpyw/php-eol-cve-2026-109618-109619) | PHP 7.4 / 8.0 / 8.1 Docker images with the CVE-2026-109618 / CVE-2026-109619 fix backported |
| 15 | [QERSSD/HowToAvoidScams](https://github.com/QERSSD/HowToAvoidScams) | 83 | HTML | 2026-10-19 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/QERSSD/HowToAvoidScams) / [Homepage](https://qerssd.github.io/HowToAvoidScams/) | 人间防骗指南：373 篇骗局拆解，覆盖刷单、杀猪盘、AI 换脸、养老诈骗等 16 类；附真实案例报道、生活自查清单、PDF/EPUB/Anki 下载，还有 12 局防骗小游戏 |
| 16 | [xuehuolll/php2shell-CVE-2026-109618-109619](https://github.com/xuehuolll/php2shell-CVE-2026-109618-109619) | 43 | Python | 2026-10-21 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/xuehuolll/php2shell-CVE-2026-109618-109619) | CVE-2026-109618/109619 — PHP session.upload_progress pre-auth RCE. Exploit research: remote ASLR chain, PoC & patch analysis. |
| 17 | [agentshield-dev/agentshield](https://github.com/agentshield-dev/agentshield) | 49 | Go | 2026-10-21 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/agentshield-dev/agentshield) / [Homepage](https://agent-shield.dev) | Agentshield is open source defense for Kubernetes and AWS. It learns how your workloads really talk, flags lateral movement with evidence, and proposes fixes you approve. |
| 18 | [BastionPHP/Bastion](https://github.com/BastionPHP/Bastion) | 57 | Go | 2026-10-22 | 通用安全, 网络安全 | [Repo](https://github.com/BastionPHP/Bastion) / [Homepage](https://www.bastionphp.com/) | Evidence-based PHP security assessment: patch verification, intrusion tracing, and offline reports. |
