# GitHub Security Radar

> 更新时间：2026-10-15T05:52:50.671Z
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
- 候选项目数：18

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [MrLouisWright/csp-forge](https://github.com/MrLouisWright/csp-forge) | 27 | JavaScript | 2026-10-13 | 通用安全, 网络安全 | [Repo](https://github.com/MrLouisWright/csp-forge) / [Homepage](https://mrlouiswright.github.io/csp-forge/) | Scan a built static site (dist/, build/, out/) or live URL and generate a tight Content-Security-Policy with sha256 hashes for inline code. Outputs header, meta, Nginx, Apache, Netlify, Vercel, Helmet, JSON; --check mode for CI. |
| 2 | [MrLouisWright/header-sentinel](https://github.com/MrLouisWright/header-sentinel) | 27 | JavaScript | 2026-10-13 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/MrLouisWright/header-sentinel) / [Homepage](https://mrlouiswright.github.io/header-sentinel/) | CI-friendly CLI and API that fails builds when deployed URLs are missing or misconfigure HTTP security headers (HSTS, CSP, COOP, cookies...) with specific fixes. JSON & SARIF output. |
| 3 | [SLP-DEV1/PenX](https://github.com/SLP-DEV1/PenX) | 2 | Python | 2026-10-14 | 网络安全, 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/SLP-DEV1/PenX) | PenX is an open-source Windows security reconnaissance toolkit powered by Nmap, Nikto, WhatWeb, DNS, WHOIS, and local AI analysis with Ollama or LM Studio. |
| 4 | [synapticcybersecurity/ai-service-indicators](https://github.com/synapticcybersecurity/ai-service-indicators) | 4 | Python | 2026-10-14 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/synapticcybersecurity/ai-service-indicators) | DNS hostnames of generative-AI services, classified by role (chat app, API, agent, web, auth, CDN, telemetry) for measuring observed AI usage. |
| 5 | [joshuavanderpoll/CVE-2026-104748](https://github.com/joshuavanderpoll/CVE-2026-104748) | 2 | Python | 2026-10-14 | 渗透 / 红队, 漏洞研究 / 攻防 | [Repo](https://github.com/joshuavanderpoll/CVE-2026-104748) | Unauthenticated privilege escalation in SimpleForm WordPress plugin <= 3.10.0. Registers an administrator account without authentication |
| 6 | [podatnosci/straznica-soc](https://github.com/podatnosci/straznica-soc) | 2 | Unknown | 2026-10-14 | 网络安全, 防守 / 蓝队 | [Repo](https://github.com/podatnosci/straznica-soc) / [Homepage](https://www.linkedin.com/in/pesiek/) | Polski SIEM i system obsługi incydentów z gotowymi zgłoszeniami NIS2/KSC |
| 7 | [vasikmansuri/agentconfig-doctor](https://github.com/vasikmansuri/agentconfig-doctor) | 3 | TypeScript | 2026-10-14 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/vasikmansuri/agentconfig-doctor) | MCP security scanner & config linter for AI coding agents. Finds leaked secrets, risky commands, broad permissions and invalid MCP servers in Claude Code, Cursor and VS Code (Copilot) configs. Local-first CLI, no telemetry. |
| 8 | [ronitgupta138/rev-core](https://github.com/ronitgupta138/rev-core) | 4 | Rust | 2026-10-13 | 通用安全, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/ronitgupta138/rev-core) / [Homepage](https://crates.io/crates/rev-core) | ⚡ Autonomous reverse engineering engine & Model Context Protocol (MCP) server for binaries and applications in Systems Rust |
| 9 | [Alexandre-LPZ/avant-garde](https://github.com/Alexandre-LPZ/avant-garde) | 2 | Unknown | 2026-10-13 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/Alexandre-LPZ/avant-garde) | Think before you build. Guard before you ship. A Claude skill: 6 foundation docs + a security gate before any vibe-coded app. |
| 10 | [SilentisVox/SyscallPredator](https://github.com/SilentisVox/SyscallPredator) | 2 | PowerShell | 2026-10-12 | 防守 / 蓝队 | [Repo](https://github.com/SilentisVox/SyscallPredator) | Implementation and documentation of detecting direct syscalls via ETW |
| 11 | [AstraeusZhao/evm-patterns](https://github.com/AstraeusZhao/evm-patterns) | 2 | Solidity | 2026-10-13 | 通用安全, 网络安全 | [Repo](https://github.com/AstraeusZhao/evm-patterns) | Collection of Solidity smart contract patterns and security audit examples, built with Foundry |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：21

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [morluto/awesome-reverse-engineering](https://github.com/morluto/awesome-reverse-engineering) | 520 | Unknown | 2026-10-09 | 通用安全, 网络安全, 逆向 / 恶意代码 | [Repo](https://github.com/morluto/awesome-reverse-engineering) | Curated reverse-engineering tools and learning resources for binaries, apps, firmware, formats, and protocols. |
| 2 | [bdg9412/artex-ko-plus](https://github.com/bdg9412/artex-ko-plus) | 185 | Go | 2026-10-09 | 通用安全, 网络安全, AI 自动化 / Skill | [Repo](https://github.com/bdg9412/artex-ko-plus) | ARTEX 한국어판 ·AI 기반 침해사고 대응 기능 추가 (upstream: Autumn-27/ARTEX, AGPL-3.0) |
| 3 | [Sequester-AG/bug-bounty-triage](https://github.com/Sequester-AG/bug-bounty-triage) | 135 | Unknown | 2026-10-09 | 通用安全, AI 自动化 / Skill, 逆向 / 恶意代码 | [Repo](https://github.com/Sequester-AG/bug-bounty-triage) | Agent skill for rigorous bug bounty report triage, validation, severity escalation, and submission-ready reporting. |
| 4 | [MrLouisWright/csp-forge](https://github.com/MrLouisWright/csp-forge) | 27 | JavaScript | 2026-10-13 | 通用安全, 网络安全 | [Repo](https://github.com/MrLouisWright/csp-forge) / [Homepage](https://mrlouiswright.github.io/csp-forge/) | Scan a built static site (dist/, build/, out/) or live URL and generate a tight Content-Security-Policy with sha256 hashes for inline code. Outputs header, meta, Nginx, Apache, Netlify, Vercel, Helmet, JSON; --check mode for CI. |
| 5 | [MrLouisWright/header-sentinel](https://github.com/MrLouisWright/header-sentinel) | 27 | JavaScript | 2026-10-13 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/MrLouisWright/header-sentinel) / [Homepage](https://mrlouiswright.github.io/header-sentinel/) | CI-friendly CLI and API that fails builds when deployed URLs are missing or misconfigure HTTP security headers (HSTS, CSP, COOP, cookies...) with specific fixes. JSON & SARIF output. |
| 6 | [scs0209/laya-guard](https://github.com/scs0209/laya-guard) | 27 | Python | 2026-10-11 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/scs0209/laya-guard) | Free local guardrail for AI coding agents: every tool_call judged on-device (regex + Laya), allow/review/block |
| 7 | [MorDavid/NucleiSniper](https://github.com/MorDavid/NucleiSniper) | 24 | Python | 2026-10-08 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/MorDavid/NucleiSniper) / [Homepage](https://mordavid.com) | AI-powered Nuclei template prioritization using deep target fingerprinting and TypeSafe Jev to surface relevant security findings faster. |
| 8 | [Sahil-Hossain-1429/pentest-projects-discovery](https://github.com/Sahil-Hossain-1429/pentest-projects-discovery) | 19 | Unknown | 2026-10-10 | 网络安全, 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/Sahil-Hossain-1429/pentest-projects-discovery) | An automated way to discover practical, hands on penetration testing projects using Claude, with structured learning roadmaps, relevant security tools, and progressive challenges to build real world cybersecurity skills. |
| 9 | [AmbitSecurity/jshound](https://github.com/AmbitSecurity/jshound) | 11 | Python | 2026-10-08 | 渗透 / 红队, 网络安全 | [Repo](https://github.com/AmbitSecurity/jshound) | Find every API request a web app makes, from the JavaScript it ships: method, URL, body, headers and GraphQL operations. One command. |
| 10 | [cleonaia/hack_cameraWeb](https://github.com/cleonaia/hack_cameraWeb) | 10 | Python | 2026-10-10 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/cleonaia/hack_cameraWeb) | This project is used analyzing my own webcam’s network traffic from Kali Linux. The workflow uses Ettercap for an ARP MiTM demonstration, Wireshark for traffic analysis and Metasploit as an external lab tool. This repository also includes camera discovery and authenticated RTSP playback. |
| 11 | [casareanderson/sieve](https://github.com/casareanderson/sieve) | 12 | Python | 2026-10-10 | 通用安全, AI 自动化 / Skill, 逆向 / 恶意代码, 漏洞研究 / 攻防 | [Repo](https://github.com/casareanderson/sieve) / [Homepage](https://github.com/casareanderson/warden) | Find the CVEs that matter on a Linux box and its running containers. Reads the package lists already there, asks OSV.dev, ranks by CISA KEV and EPSS. No scanner binary, no database, no server. |
| 12 | [notaaaronfr/ship-ready](https://github.com/notaaaronfr/ship-ready) | 14 | Shell | 2026-10-09 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/notaaaronfr/ship-ready) | Make AI-written code production-ready, with proof. Agent skill for Claude Code, Codex, GitHub Copilot & Gemini CLI: locks behavior, finds bugs and security holes, fixes Big-O, adds property and mutation tests, and won't say "done" without evidence. |
| 13 | [Abhishek-Gali/HookRelay](https://github.com/Abhishek-Gali/HookRelay) | 11 | Python | 2026-10-08 | 网络安全 | [Repo](https://github.com/Abhishek-Gali/HookRelay) | Security-hardened webhook ingestion & multi-destination delivery gateway (GitHub ➔ Discord, Slack, HTTP) with HMAC-SHA256 verification, durable SQL queueing, fencing leases, smart retries, and DLQ. |
| 14 | [MohammadThabetHassan/web-posture-check](https://github.com/MohammadThabetHassan/web-posture-check) | 6 | Python | 2026-10-09 | 通用安全, 网络安全 | [Repo](https://github.com/MohammadThabetHassan/web-posture-check) | Command-line security posture checker for websites: security headers, cookies, CORS, TLS certificate and protocols, CAA, security.txt, SPF/DMARC/DKIM and the HTTPS redirect, with a score, Markdown/JSON reports and a GitHub Action. |
| 15 | [himanshu-mahendra-jain/openwrt-integrity](https://github.com/himanshu-mahendra-jain/openwrt-integrity) | 7 | Shell | 2026-10-08 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/himanshu-mahendra-jain/openwrt-integrity) | Scripts to create known-good baselines and verify the integrity of OpenWrt routers. |
| 16 | [Hamna-Munir/Prooflink](https://github.com/Hamna-Munir/Prooflink) | 5 | Python | 2026-10-09 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/Hamna-Munir/Prooflink) / [Homepage](https://prooflink-opal.vercel.app) | ProofLink checks suspicious messages, links and screenshots for scams and phishing. It gives a verdict, a risk score and the evidence behind it, with optional AI review and a 3D investigation graph. |
