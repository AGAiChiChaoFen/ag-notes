# 如何添加自己的文章

## 1. 放入文章

把你的 Markdown 文件放到 `docs/posts/`，例如 `my-note.md`。文件夹可以继续分层。图片建议和文章一起存放，并使用相对路径。

## 2. 更新左侧目录

打开 `docs/_sidebar.md`，增加：

```markdown
- [我的新文章](/posts/my-note.md)
```

目录里的路径以 `docs/` 为根，不需要写 `docs/` 本身。文件名、大小写、扩展名都应一致。首页的文章列表需要按需手动更新。

## 3. 修改博客信息

- `docs/README.md`：网站首页。
- `docs/about.md`：个人介绍。
- `docs/assets/js/config.js`：侧栏名称、主题颜色和自己的仓库链接。
- `docs/index.html`：浏览器标签页标题、网站简介。
- `docs/_navbar.md`：顶部导航。

## 4. 预览与发布

双击项目里的“启动博客.cmd”，浏览器会打开本地博客。编辑保存后刷新页面。不要直接双击 `index.html`。

未来发布时，将 `docs/` 作为静态网站目录。使用 GitHub Pages 时，可选择自己仓库的 `main` 分支和 `/docs` 目录。带 `#/` 的文章链接可在仓库子路径下工作。
