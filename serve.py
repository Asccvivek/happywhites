#!/usr/bin/env python3
"""
Zero-Cache HTTP Server for Happy Whites Dental Clinic Live Preview
Serves files with strict no-cache headers to guarantee real-time updates.
"""
import http.server
import socketserver
import os
import sys

PORT = 8094
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ZeroCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        m_type = super().guess_type(path)
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        elif path.endswith('.css'):
            return 'text/css; charset=utf-8'
        elif path.endswith('.svg'):
            return 'image/svg+xml'
        return m_type

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PORT), ZeroCacheHTTPRequestHandler) as httpd:
        print(f"Happy Whites Server running at http://127.0.0.1:{PORT}/")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()
