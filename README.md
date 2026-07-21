# 📊 TradingView RSI Alert Bot

> **ربات هشدار RSI برای تریدینگ ویو** — ارسال سیگنال‌های اشباع خرید/فروش به تلگرام و بله  
> **TradingView RSI Multi-Timeframe Alert** — Sends oversold/overbought signals to Telegram & Bale

[![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?logo=express)](https://expressjs.com)
[![Telegram](https://img.shields.io/badge/Telegram-Bot-2CA5E0?logo=telegram)](https://core.telegram.org/bots)
[![Bale](https://img.shields.io/badge/Bale-Bot-00B67A?logo=bale)](https://bale.ai)

---

## ✨ ویژگی‌ها

| ویژگی | توضیح |
|:------|:-------|
| 📈 **RSI Multi-Timeframe** | مانیتور RSI روی ۵ تایم فریم همزمان |
| 🧠 **۶ اندیکاتور همزمان** | RSI + MACD + EMA200 + Volume + Divergence + Multi-TF |
| ⭐ **سیستم امتیازدهی** | سیگنال‌ها از ۱ تا ۵ ستاره رتبه‌بندی میشن |
| 🔬 **فیلتر هوشمند** | سیگنال‌های زیر ۳ ستاره خودکار فیلتر میشن |
| 🟣 **اعتبار بالا** | ترکیب ۶ تاییدکننده = سیگنال‌های فوق‌معتبر |
| 🟢🔴 **اشباع خرید/فروش** | تشخیص لحظه‌ای Oversold & Overbought |
| 📱 **تلگرام + بله** | ارسال همزمان به دو پیام‌رسان |
| 📊 **تحلیل پیشرفته** | نمایش RSI هر تایم فریم، دلیل سیگنال، سطح اطمینان |
| ⚙️ **قابل تنظیم** | همه پارامترها از جمله تایم‌فریم‌ها |
| 🛡️ **Rate Limit** | جلوگیری از اسپم با محدودیت زمانی |
| 🌐 **Webhook** | اتصال آسان با TradingView |
| 🐳 **Docker** | نصب با یک دستور |

## 🚀 شروع سریع

### 1️⃣ Clone & Install
```bash
git clone https://github.com/mamadiezad/tradingview-rsi-alert-bot.git
cd tradingview-rsi-alert-bot
npm install
```

### 2️⃣ Configure `.env`
```bash
cp .env.example .env
nano .env
```

### 3️⃣ Start Server
```bash
npm start
```

### 4️⃣ Add Pine Script to TradingView
1. فایل `pine/rsi-multi-timeframe-alert.pine` رو باز کن
2. همه کد رو کپی کن
3. برو TradingView → Pine Editor → Paste
4. Save → Add to Chart

### 5️⃣ Create Alert in TradingView
1. راست کلیک روی چارت → Add Alert
2. Condition: `RSI Multi-Timeframe Alert Bot`
3. Webhook URL: `http://YOUR_SERVER_IP:3000/api/webhook/tradingview`
4. Done! 🎉

---

## 🔌 API

### `POST /api/webhook/tradingview`
دریافت Webhook از TradingView

### `GET /api/test`
ارسال سیگنال تست به تلگرام و بله

### `GET /api/status`
وضعیت سرور و اتصال‌ها

---

## 🔧 تنظیمات Pine Script

| پارامتر | پیش‌فرض | توضیح |
|:--------|:-------:|:-------|
| RSI Period | 14 | دوره RSI |
| Overbought | 70 | سطح اشباع خرید |
| Oversold | 30 | سطح اشباع فروش |
| TF 1-5 | 1,5,15,60,240 | تایم فریم‌ها |
| Min Interval | 60 min | حداقل فاصله بین آلرت‌ها |

---

## 🐳 Docker

```bash
docker-compose up --build -d
```

---

## 📂 Structure

```
tradingview-rsi-alert-bot/
├── pine/
│   └── rsi-multi-timeframe-alert.pine   # Pine Script for TradingView
├── server/
│   ├── index.js          # Express webhook server
│   ├── config.js         # Config
│   ├── telegram/
│   │   └── sender.js     # Telegram sender
│   ├── bale/
│   │   └── sender.js     # Bale sender
│   └── utils/
│       └── parser.js     # Alert message parser
├── public/
│   └── index.html        # Web UI
├── .env.example
├── docker-compose.yml
└── package.json
```

---

## 🔗 Related
- [🤖 Persian Chat Bot](https://github.com/mamadiezad/robot-chat-nashnas)
- [💳 MegaPay](https://github.com/mamadiezad/megapay)

---

<p align="center">Built with ❤️ by <a href="https://t.me/llllxyz">Mohammad</a></p>
