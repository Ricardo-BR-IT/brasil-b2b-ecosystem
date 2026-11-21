import http.server
import json
import os
import socketserver
import urllib.parse
import urllib.request

PORT = 8788
BASE_DIR = r"C:\Users\ricod\.gemini\antigravity\scratch\brasil-b2b-ecosystem-factory"


def crc16_ccitt(data_str: str) -> str:
    crc = 0xFFFF
    for ch in data_str.encode("utf-8"):
        crc ^= ch << 8
        for _ in range(8):
            if crc & 0x8000:
                crc = ((crc << 1) ^ 0x1021) & 0xFFFF
            else:
                crc = (crc << 1) & 0xFFFF
    return f"{crc:04X}"


def generate_pix_brcode(pix_key: str, merchant_name: str, merchant_city: str, amount: float, txid: str = "ZAPPRO01") -> str:
    def emv(field_id: str, value: str) -> str:
        return f"{field_id}{len(value):02d}{value}"

    gui = emv("00", "br.gov.bcb.pix") + emv("01", pix_key.strip())
    mai = emv("26", gui)
    amt_str = f"{amount:.2f}" if amount > 0 else ""
    payload = (
        emv("00", "01")
        + mai
        + emv("52", "0000")
        + emv("53", "986")
        + (emv("54", amt_str) if amt_str else "")
        + emv("58", "BR")
        + emv("59", merchant_name[:25].upper())
        + emv("60", merchant_city[:15].upper())
        + emv("62", emv("05", txid[:25]))
        + "6304"
    )
    return payload + crc16_ccitt(payload)


class BrasilB2BHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def _send_json(self, data, status=200):
        raw = json.dumps(data, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/health":
            return self._send_json({
                "status": "ONLINE",
                "ecosystem": "Brasil B2B Ecosystem Factory (75 Micro-Sistemas)",
                "pillars": 5,
                "total_brazilian_apps": 75,
                "total_global_apps": 137,
                "grand_total_fleet": 212,
                "whatsapp_webhook": f"http://localhost:{PORT}/api/whatsapp/webhook",
            })
        if parsed.path.startswith("/api/cnpj/"):
            cnpj = "".join(ch for ch in parsed.path.split("/api/cnpj/")[-1] if ch.isdigit())
            try:
                req = urllib.request.Request(f"https://brasilapi.com.br/api/cnpj/v1/{cnpj}", headers={"User-Agent": "BrasilB2BFactory/1.0"})
                data = json.loads(urllib.request.urlopen(req, timeout=8).read().decode("utf-8"))
                return self._send_json({"status": "OK", "source": "BrasilAPI/Receita", "cnpj": cnpj, "data": data})
            except Exception as e:
                return self._send_json({"status": "FALLBACK_LOCAL_VALIDATOR", "cnpj": cnpj, "valid_length": len(cnpj) == 14, "note": str(e)})
        return super().do_GET()

    def do_POST(self):
        length = int(self.headers.get("Content-Length", "0"))
        body = json.loads(self.rfile.read(length).decode("utf-8") or "{}") if length > 0 else {}
        text = body.get("text") or body.get("data", {}).get("message", {}).get("conversation") or "/orcamento Servico Manutencao R$ 450,00"
        sender = body.get("sender") or body.get("data", {}).get("key", {}).get("remoteJid") or "5511999999999"
        amount = float(body.get("amount", 450.0))
        pix_key = body.get("pixKey", "12.345.678/0001-90")
        brcode = generate_pix_brcode(pix_key, "RICARDO VIEIRA FORGE", "SAO PAULO", amount)
        return self._send_json({
            "status": "WHATSAPP_PROCESSED",
            "sender": sender,
            "receivedText": text,
            "pixBrCode": brcode,
            "reply": f"✅ Processado com sucesso!\n💰 Valor: R$ {amount:,.2f}\n🔐 PIX Copia e Cola:\n{brcode}",
        })


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), BrasilB2BHandler) as httpd:
        print(f"Brasil B2B & WhatsApp-First Server running on http://localhost:{PORT}")
        httpd.serve_forever()
