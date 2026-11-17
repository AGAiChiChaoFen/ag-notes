# AG’s Notes

AG 的学习手记 · 记录所学，整理所思，留下实践。

网站：https://AGAiChiChaoFen.github.io/ag-notes/

## GitHub Pages

仓库 Settings → Pages → Deploy from a branch，选择 `main` 分支、`/docs` 目录并保存。部署完成后，通过上面的网址访问。

网站使用 Docsify 直接显示 Markdown，无需安装依赖或运行构建命令。`docs/.nojekyll` 需保留，确保以下划线开头的目录文件正常发布。

## 更新学习笔记

1. 把 Markdown 文章放进 `docs/posts/`，图片随文章存放并使用相对路径。
2. 在 `docs/_sidebar.md` 添加文章链接，例如 `- [我的笔记](/posts/my-note.md)`。
3. 按需更新 `docs/README.md` 的首页文章列表。
4. 提交并推送至 `main`，等待 GitHub Pages 更新。

自带的两篇示例文章可直接替换；删除文章时也请同步移除目录和首页链接。

## 常用文件

| 文件 | 用途 |
| --- | --- |
| `docs/README.md` | 网站首页 |
| `docs/posts/` | 学习笔记 |
| `docs/_sidebar.md` | 左侧目录 |
| `docs/_navbar.md` | 顶部导航 |
| `docs/about.md` | 个人介绍 |
| `docs/assets/js/config.js` | 网站名称、仓库链接及插件配置 |
| `docs/assets/css/site.css` | 网站样式 |
| `docs/assets/vendor/` | 网站运行库及其许可证 |

## 来源与许可

网站框架改编自 [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents)，来源及第三方许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
