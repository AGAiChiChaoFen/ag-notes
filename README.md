# AG’s Notes

AG 的学习手记 · 记录所学，整理所思，留下实践。

从 Datawhale Hello-Agents 的 Docsify 阅读网站整理的个人博客模板。上游来源及许可说明见 `THIRD_PARTY_NOTICES.md`。

## 开始使用

1. 双击 `启动博客.cmd`，浏览器访问 http://127.0.0.1:8081/ 。保持启动窗口开启。
2. 将自己的 `.md` 放入 `docs/posts/`。
3. 修改 `docs/_sidebar.md`，把文章加进目录。
4. 修改 `docs/README.md`（首页）和 `docs/about.md`（个人介绍）。

详细说明见 `docs/writing.md`。页面由 Markdown 直接生成，无需安装 Node 或构建；本机预览需要 Python。依赖已本地化，页面不依赖外部 CDN。

## 目录

- `docs/`：实际网站，可用于静态托管。
- `docs/assets/js/config.js`：名称、主题、仓库链接及插件配置。
- `docs/assets/css/site.css`：阅读样式。
- `serve.py`：仅监听本机的预览服务，可用 `python serve.py --port 8082` 切换端口。
- `THIRD_PARTY_NOTICES.md`：来源和许可证说明。

保留上游的 Docsify 结构、绿色主题和深色模式；解除原课程英文目录映射与 Giscus 评论绑定，替换为个人示例文章，增加搜索、本地依赖和启动入口。网站文件位于 `docs/`，可用于 GitHub Pages 静态托管。

## GitHub 仓库

https://github.com/AGAiChiChaoFen/ag-notes

如需启用 GitHub Pages：在仓库 Settings → Pages 中选择 Deploy from a branch，分支 `main`、目录 `/docs`，保存后等待部署完成。
