# GitHub Security Radar

一个面向信息安全 / 网络安全方向的 GitHub 热门项目雷达。它会定期扫描最近 `3 天` 和 `7 天` 内出现的新仓库，重点关注这些方向：

- 信息安全 / 网络安全
- 渗透测试 / 红队 / 攻防
- 蓝队 / 防守 / 检测
- AI 自动化 / Skill / Agent 安全相关

项目会把结果生成到仓库内，输出为：

- `reports/latest.md`：适合直接阅读和版本留痕
- `reports/latest.json`：适合后续接入机器人、数据库或其他系统
- `docs/index.html`：适合本地打开或发布到 GitHub Pages

## 特性

- 零依赖 Node.js 实现，直接可跑
- 同时生成 Markdown、JSON、HTML 三种结果
- 默认按 GitHub 星标热度排序，并结合“创建时间新鲜度”做二次排序
- 内置 GitHub Actions 定时任务，可自动更新并提交结果
- 搜索词集中在安全、攻防、渗透、蓝队和 AI 安全自动化

## 快速开始

### 1. 本地运行

```powershell
cd D:\workspace\Github\github-security-radar
node src/index.mjs
```

如果你希望更稳定地访问 GitHub Search API，建议先设置 Token：

```powershell
$env:GITHUB_TOKEN = "你的 GitHub Token"
node src/index.mjs
```

## 输出文件

- `reports/latest.md`
- `reports/latest.json`
- `docs/index.html`

## 定时更新

仓库已内置 GitHub Actions：

- 每天 UTC `01:15` 自动更新一次
- 每天 UTC `13:15` 自动更新一次
- 支持手动触发 `workflow_dispatch`

工作流文件位置：

- `.github/workflows/update-report.yml`

如果你把这个项目推到 GitHub：

1. 保持默认的 `GITHUB_TOKEN` 权限可写仓库内容。
2. 启用 Actions。
3. 如果需要网页展示，可在仓库设置中把 GitHub Pages 指向 `docs/`。

## 可调整项

主要配置都在 `src/config.mjs`：

- 时间窗口：`3 天 / 7 天`
- 每个窗口最少星标数
- 搜索方向和关键词
- 每次请求抓取数量

## 当前检索策略

默认搜索这些方向：

- `topic:security`
- `topic:cybersecurity`
- `topic:penetration-testing`
- `topic:defensive-security`
- `"security automation" / "ai security" / "agent security" / "mcp security" / "security skill"`

## 后续可扩展

这个项目已经适合作为基础版本继续扩展，例如：

- 接入 Telegram / 飞书 / 企业微信推送
- 只保留中文说明更强的项目
- 增加“经典高星长期项目”榜单
- 按编程语言、标签或许可证进一步过滤
- 输出 RSS / 邮件周报
