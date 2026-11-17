// 常改项：博客名称、仓库链接、主题色。文章目录在 docs/_sidebar.md。
try { document.body.classList.toggle('dark-mode', localStorage.getItem('ag-notes-theme') === 'dark'); } catch (_) {}
window.$docsify = {
  name: 'AG’s Notes',
  repo: 'https://github.com/AGAiChiChaoFen/ag-notes', // 自己的博客仓库。
  loadSidebar: true,
  loadNavbar: true,
  mergeNavbar: true,
  subMaxLevel: 3,
  auto2top: true,
  themeColor: '#42b983',
  notFoundPage: '_404.md',
  alias: { '/.*/_sidebar.md': '/_sidebar.md', '/.*/_navbar.md': '/_navbar.md', '/.*/_404.md': '/_404.md' },
  search: { paths: 'auto', placeholder: '搜索文章', noData: '没有找到相关内容', depth: 3, namespace: 'ag-notes' },
  copyCode: { buttonText: '复制代码', successText: '已复制', errorText: '复制失败' },
  pagination: { previousText: '上一篇', nextText: '下一篇', crossChapter: true },
  markdown: {
    renderer: {
      code: function(code, lang) {
        if (lang === 'mermaid') {
          var escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          return '<div class="mermaid">' + escaped + '</div>';
        }
        return this.origin.code.apply(this, arguments);
      }
    }
  },
  plugins: [function(hook) {
    // 在 Markdown 处理前保存公式，避免反斜杠和下划线被 Markdown 吞掉。
    var formulas = [];
    hook.beforeEach(function(markdown) {
      formulas = [];
      return markdown.replace(/```[\s\S]*?```|`[^`\n]+`|\$\$[\s\S]+?\$\$|\$(?!\s)[^$\n]+?\$/g, function(value) {
        if (value.charAt(0) !== '$') return value;
        var token = 'BLOGMATHPLACEHOLDER' + formulas.length + 'END';
        formulas.push(value);
        return token;
      });
    });
    hook.afterEach(function(html) {
      html = html.replace(/BLOGMATHPLACEHOLDER(\d+)END/g, function(_, index) {
        return formulas[Number(index)].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      });
      return html + '<footer class="site-footer">框架改编自 <a href="https://github.com/datawhalechina/hello-agents" target="_blank" rel="noopener">Datawhale Hello-Agents</a> · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> · Powered by Docsify</footer>';
    });
    hook.doneEach(function() {
      var nav = document.querySelector('.sidebar-nav');
      if (nav && !nav.querySelector('.sidebar-toggle-btn')) {
        var button = document.createElement('button');
        button.className = 'sidebar-toggle-btn';
        function label() { button.textContent = document.body.classList.contains('dark-mode') ? '切换浅色模式' : '切换深色模式'; }
        label();
        button.onclick = function() {
          var dark = document.body.classList.toggle('dark-mode');
          try { localStorage.setItem('ag-notes-theme', dark ? 'dark' : 'light'); } catch (_) {}
          label();
        };
        nav.prepend(button);
      }
      var main = document.querySelector('.markdown-section');
      if (!main) return;
      main.setAttribute('role', 'main');
      if (window.renderMathInElement) renderMathInElement(main, {
        delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false
      });
      if (window.mermaid) {
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'default' });
        mermaid.run({ nodes: main.querySelectorAll('.mermaid') }).catch(function(error) { console.warn('流程图渲染失败', error); });
      }
    });
  }]
};
