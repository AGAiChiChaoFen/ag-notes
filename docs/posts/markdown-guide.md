# Markdown 写作示例

## 标题与段落

用 `#` 写文章标题，用 `##`、`###` 划分小节。正文支持 **加粗**、*斜体* 和 `行内代码`。

## 链接与图片

[回到首页](/)

图片可以放在当前文章的子目录，例如 `docs/posts/images/demo.png`，然后写 `![图片说明](images/demo.png)`。

## 表格

| 项目 | 说明 |
| --- | --- |
| 文章 | Markdown 文件 |
| 目录 | `_sidebar.md` |

## 代码

```python
def hello(name):
    return f"你好，{name}"
```

## 数学公式

行内公式：$E = mc^2$。

$$
f(x) = \int_0^x t^2\,dt = \frac{x^3}{3}
$$

## 流程图

```mermaid
graph LR
  A[编写 Markdown] --> B[更新目录]
  B --> C[刷新博客]
```
