# GitHub Security Radar

> 更新时间：2026-08-16T02:34:08.159Z
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
- 候选项目数：20

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [xyiqq/skilldoctor](https://github.com/xyiqq/skilldoctor) | 243 | TypeScript | 2026-08-13 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/xyiqq/skilldoctor) | Quality gate for Agent Skills: lint, security audit, and Claude/Cursor/Codex/OpenCode compatibility. |
| 2 | [Dest1ny-Sec/dhunter](https://github.com/Dest1ny-Sec/dhunter) | 10 | Go | 2026-08-15 | 通用安全, 网络安全, 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/Dest1ny-Sec/dhunter) | AI 驱动的自主渗透测试平台：输入目标，AI agent 自动完成侦察→规划→主动测试→漏洞验证→报告生成。黑板引擎+多 worker+SRC 验收门禁。仅供学术与安全研究使用。 |
| 3 | [NOFireAI/ravel](https://github.com/NOFireAI/ravel) | 27 | Rust | 2026-08-14 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/NOFireAI/ravel) | A distributed OpenTelemetry-native columnar datastore whose only backend is object storage. |
| 4 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | 16 | PowerShell | 2026-08-14 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 逆向 / 恶意代码, 网络安全 | [Repo](https://github.com/dhicoc/dsh-reverse-skill) | Complete reverse-skill (85 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authorized pentesting and security research skill pack. |
| 5 | [basriakkaya/KageTarget](https://github.com/basriakkaya/KageTarget) | 10 | TypeScript | 2026-08-13 | 网络安全, AI 自动化 / Skill, 渗透 / 红队 | [Repo](https://github.com/basriakkaya/KageTarget) | Privacy-first Chrome extension for fast, user-initiated web reconnaissance and page inspection. |
| 6 | [truststrikelabs/BrokenMCP](https://github.com/truststrikelabs/BrokenMCP) | 4 | Python | 2026-08-14 | 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/truststrikelabs/BrokenMCP) / [Homepage](https://truststrikelabs.com/) | BrokenMCP is a vulnerable implementation of the Model Context Protocol (MCP) for educational purposes. |
| 7 | [henlii/dsh-plugins](https://github.com/henlii/dsh-plugins) | 4 | JavaScript | 2026-08-14 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/henlii/dsh-plugins) | DSH plugin collection: password auth + trust for dsh web LAN/Tailscale access (dsh-web-auth) and more. Install per plugin via 'dsh plugin --profile web add' or all at once via the root cordis.patch.yml. |
| 8 | [cyzlmh/dsh-cyber-sec](https://github.com/cyzlmh/dsh-cyber-sec) | 3 | TypeScript | 2026-08-14 | 渗透 / 红队, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/cyzlmh/dsh-cyber-sec) | Authorized security-assessment profile for DeepSeek Harness: scoped network tools, container-backed shell, authorization guard, durable evidence, 21 security skills, 7 specialist subagents |
| 9 | [at0m-b0mb/Pharos-ESP32S3](https://github.com/at0m-b0mb/Pharos-ESP32S3) | 4 | C | 2026-08-13 | 网络安全, 防守 / 蓝队, AI 自动化 / Skill | [Repo](https://github.com/at0m-b0mb/Pharos-ESP32S3) | Defensive, receive-only RF observatory for the Waveshare ESP32-S3-Touch-AMOLED-1.75C round AMOLED board. A lighthouse that listens: watches 2.4GHz, grades what it hears, and is honest about what it cannot. Red/blue training on the same engines. Never transmits. |
| 10 | [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | 4 | TypeScript | 2026-08-14 | 通用安全, 漏洞研究 / 攻防 | [Repo](https://github.com/slywalker2006/dsh-passwords) / [Homepage](https://github.com/slywalker2006/dsh-passwords) | Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, subuser permissions & quotas, sandbox enforcement, encrypted auth, audit log. |
| 11 | [jkrandom-sudo/dsh-plugin-audit](https://github.com/jkrandom-sudo/dsh-plugin-audit) | 4 | TypeScript | 2026-08-14 | 通用安全, 网络安全 | [Repo](https://github.com/jkrandom-sudo/dsh-plugin-audit) | Security audit for DeepSeek Harness plugins: static permission profile with file/line evidence + a runtime sentinel gating credential access and unknown-host egress · DSH 插件安全审计：静态权限画像（附文件/行号证据）+ 运行时哨兵，触及凭证或向未知主机外发数据时先请你批准 |
| 12 | [ebrasha/abdal-4iproto-proxy](https://github.com/ebrasha/abdal-4iproto-proxy) | 2 | Go | 2026-08-14 | 网络安全 | [Repo](https://github.com/ebrasha/abdal-4iproto-proxy) | Abdal 4iProto Proxy — High-performance TCP/UDP Layer-4 proxy with Multi-Hop routing, RAW UDP relay, traffic forwarding, access control, and network security features. Developed by Ebrahim Shafiei (EbraSha) \| Abdal Security Group. |

## 近 7 天新项目

- 时间窗口：最近 7 天
- 最少星标：5
- 候选项目数：23

| # | 项目 | Stars | 语言 | 创建时间 | 标签 | 链接 | 简介 |
|---|---|---:|---|---|---|---|---|
| 1 | [DrHazemAli/enterprise-system-design](https://github.com/DrHazemAli/enterprise-system-design) | 494 | Unknown | 2026-08-12 | 网络安全, AI 自动化 / Skill | [Repo](https://github.com/DrHazemAli/enterprise-system-design) | A source-grounded course & reference for engineers designing systems that must survive real traffic, partial failure, security review, and changing requirements, spanning enterprise system design, distributed systems, AI systems, cybersecurity, reliability, cloud, HPC, edge, and mission-critical infrastructure. |
| 2 | [xyiqq/skilldoctor](https://github.com/xyiqq/skilldoctor) | 243 | TypeScript | 2026-08-13 | 通用安全, AI 自动化 / Skill, 网络安全 | [Repo](https://github.com/xyiqq/skilldoctor) | Quality gate for Agent Skills: lint, security audit, and Claude/Cursor/Codex/OpenCode compatibility. |
| 3 | [iktok90-design/ai-smart-contract-auditor](https://github.com/iktok90-design/ai-smart-contract-auditor) | 39 | JavaScript | 2026-08-10 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防, 网络安全 | [Repo](https://github.com/iktok90-design/ai-smart-contract-auditor) | AuditSentry — AI-powered smart contract security auditor for Claude Code. Automated vulnerability detection, exploit PoCs, mainnet-fork simulation, and professional audit reports for Solidity & Vyper across all EVM chains. |
| 4 | [Dest1ny-Sec/dhunter](https://github.com/Dest1ny-Sec/dhunter) | 10 | Go | 2026-08-15 | 网络安全, 渗透 / 红队, AI 自动化 / Skill | [Repo](https://github.com/Dest1ny-Sec/dhunter) | AI 驱动的自主渗透测试平台：输入目标，AI agent 自动完成侦察→规划→主动测试→漏洞验证→报告生成。黑板引擎+多 worker+SRC 验收门禁。仅供学术与安全研究使用。 |
| 5 | [NOFireAI/ravel](https://github.com/NOFireAI/ravel) | 27 | Rust | 2026-08-14 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/NOFireAI/ravel) | A distributed OpenTelemetry-native columnar datastore whose only backend is object storage. |
| 6 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | 16 | PowerShell | 2026-08-14 | 通用安全, AI 自动化 / Skill, 渗透 / 红队, 逆向 / 恶意代码, 网络安全 | [Repo](https://github.com/dhicoc/dsh-reverse-skill) | Complete reverse-skill (85 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authorized pentesting and security research skill pack. |
| 7 | [sunhao123456sun-svg/toolpermit](https://github.com/sunhao123456sun-svg/toolpermit) | 25 | Python | 2026-08-11 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/sunhao123456sun-svg/toolpermit) / [Homepage](https://pypi.org/project/toolpermit/) | A local-first permission firewall and approval layer for AI agent tool calls. |
| 8 | [ahmetgulerpy/ag-cyber-lab](https://github.com/ahmetgulerpy/ag-cyber-lab) | 21 | TypeScript | 2026-08-11 | 网络安全 | [Repo](https://github.com/ahmetgulerpy/ag-cyber-lab) | Open-source practical cybersecurity learning platform with structured lessons, guided labs, progress tracking, and a custom Lab Engine. |
| 9 | [iktok90-design/btcpay-scanner](https://github.com/iktok90-design/btcpay-scanner) | 13 | JavaScript | 2026-08-10 | 渗透 / 红队, 防守 / 蓝队, 漏洞研究 / 攻防 | [Repo](https://github.com/iktok90-design/btcpay-scanner) | Network scanner for BTCPay Server instances — version detection, SSRF CVE auditor (< 2.4.2), and Lightning node discovery |
| 10 | [shanduzgil/nexus-redfox](https://github.com/shanduzgil/nexus-redfox) | 11 | Python | 2026-08-11 | 网络安全 | [Repo](https://github.com/shanduzgil/nexus-redfox) / [Homepage](https://github.com/shanduzgil/nexus-redfox) | NEXUS REDFOX — Local-first code intelligence and security analysis platform for developers and security researchers. |
| 11 | [chu0119/fscan-toolkit](https://github.com/chu0119/fscan-toolkit) | 14 | HTML | 2026-08-09 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/chu0119/fscan-toolkit) | fscan 图形化管理工具套件 — 命令生成器 + 报告解析器，零依赖纯静态 HTML |
| 12 | [Dtoxic28/dockerignore-audit](https://github.com/Dtoxic28/dockerignore-audit) | 13 | JavaScript | 2026-08-12 | 通用安全, 渗透 / 红队 | [Repo](https://github.com/Dtoxic28/dockerignore-audit) | Audit Docker build contexts with Docker-compatible .dockerignore semantics. |
| 13 | [Kane-Wan/oss-maintainer-kit](https://github.com/Kane-Wan/oss-maintainer-kit) | 18 | TypeScript | 2026-08-10 | 通用安全, AI 自动化 / Skill | [Repo](https://github.com/Kane-Wan/oss-maintainer-kit) / [Homepage](https://github.com/Kane-Wan/oss-maintainer-kit#readme) | Repo Steward AI: safety-conscious PR review, issue triage, release notes, and verifiable maintainer pilots with the OpenAI Responses API. |
| 14 | [basriakkaya/KageTarget](https://github.com/basriakkaya/KageTarget) | 10 | TypeScript | 2026-08-13 | 网络安全, AI 自动化 / Skill, 渗透 / 红队 | [Repo](https://github.com/basriakkaya/KageTarget) | Privacy-first Chrome extension for fast, user-initiated web reconnaissance and page inspection. |
| 15 | [osintbrazuca/SimpleReconURL](https://github.com/osintbrazuca/SimpleReconURL) | 13 | Python | 2026-08-10 | 网络安全, 渗透 / 红队 | [Repo](https://github.com/osintbrazuca/SimpleReconURL) | Ferramenta de extração e descoberta de URLs para fluxos de OSINT e reconhecimento |
| 16 | [dinosn/security-knowledge-base](https://github.com/dinosn/security-knowledge-base) | 8 | Python | 2026-08-12 | 网络安全 | [Repo](https://github.com/dinosn/security-knowledge-base) | Local-first, evidence-led security knowledge base with a model-neutral JSON CLI, immutable sources, and human-reviewed proposals. |
| 17 | [at0m-b0mb/Bulwark-FlipperZero](https://github.com/at0m-b0mb/Bulwark-FlipperZero) | 5 | C | 2026-08-12 | 防守 / 蓝队, AI 自动化 / Skill | [Repo](https://github.com/at0m-b0mb/Bulwark-FlipperZero) | Bluetooth LE advertising-spam detector for the Flipper Zero, on the onboard radio. Hears the popup flood on 2402/2426/2480 MHz - and never claims to read it. |
| 18 | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | 11 | TypeScript | 2026-08-10 | 通用安全, 网络安全 | [Repo](https://github.com/omdsh-dev/dsh-security-audit) | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 |
