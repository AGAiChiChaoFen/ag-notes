"""本地静态预览服务器：只使用 Python 标准库，不需要 pip install。"""
import argparse
import webbrowser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def main():
    # 根据脚本位置定位 docs，从任何工作目录启动都可以正确读取文件。
    docs_dir = Path(__file__).resolve().parent / "docs"
    parser = argparse.ArgumentParser(description="启动 Docsify 博客本地预览")
    parser.add_argument("--port", type=int, default=8081, help="端口，默认 8081")
    parser.add_argument("--open", action="store_true", help="启动后打开浏览器")
    args = parser.parse_args()
    handler = partial(SimpleHTTPRequestHandler, directory=str(docs_dir))
    try:
        # 仅监听本机地址，作为开发预览；公共部署交给静态托管平台。
        server = ThreadingHTTPServer(("127.0.0.1", args.port), handler)
    except OSError as error:
        parser.exit(1, f"启动失败：{error}。可尝试 python serve.py --port 8080\n")
    # HTTP 默认端口为 80，因此默认地址可以省略端口号。
    address = "http://127.0.0.1/" if args.port == 80 else f"http://127.0.0.1:{args.port}/"
    print(f"博客已启动：{address}", flush=True)
    print("按 Ctrl+C 停止服务。", flush=True)
    if args.open:
        webbrowser.open(address)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n服务已停止。")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
