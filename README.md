<div align="center">
  <h1>📊 TradingView RSI Ultra Signal Bot</h1>
  <p><b>حرفه‌ای‌ترین ربات سیگنال RSI برای تریدینگ ویو</b></p>
  <p>ارسال سیگنال‌های فوق‌معتبر اشباع خرید/فروش به <b>تلگرام</b> و <b>بله</b></p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=nodedotjs" />
  <img src="https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/Telegram-Bot-2CA5E0?style=for-the-badge&logo=telegram" />
  <img src="https://img.shields.io/badge/Bale-Bot-00B67A?style=for-the-badge&logo=bale" />
  <img src="https://img.shields.io/badge/License-Free-7c3aed?style=for-the-badge" />
</p>

<p align="center">
  <a href="#english">🇬🇧 English</a> •
  <a href="#persian">🇮🇷 فارسی</a> •
  <a href="#installation">📦 نصب</a> •
  <a href="#pine">📄 Pine Script</a> •
  <a href="#api">🔌 API</a>
</p>

<br/>

---

<a name="english"></a>
## 🇬🇧 English

### 🎯 What is this?

**RSI Ultra Signal Bot** is a professional TradingView alert system that monitors RSI across **5 timeframes simultaneously** and combines **6 technical indicators** to generate **ultra-reliable buy/sell signals**.

When a high-confidence signal is detected, it sends a beautifully formatted alert to **Telegram** and **Bale** messengers.

### 🔥 Key Features

| Feature | Description |
|:--------|:------------|
| 📈 **Multi-Timeframe RSI** | Monitors 5 timeframes at once (5m, 15m, 1h, 4h, Daily) |
| 🧠 **6-Indicator Confluence** | RSI + MACD + EMA200 + Volume + Divergence + Multi-TF |
| ⭐ **Star Rating System** | Signals rated 1-5★ based on confirmation strength |
| 🔬 **Smart Filtering** | Signals below 3★ are automatically filtered out |
| 📱 **Telegram + Bale** | Simultaneous push notifications |
| ⚙️ **Fully Configurable** | All parameters adjustable from TradingView UI |
| 🐳 **Docker Ready** | One-command deployment |

### ⭐ Star Rating System

| Stars | Meaning | Action |
|:-----:|:--------|:-------|
| ⭐⭐ | Weak (RSI only) | ❌ Filtered |
| ⭐⭐⭐ | Medium (2+ confirmations) | ✅ Alert |
| ⭐⭐⭐⭐ | Strong (3+ confirmations) | ✅ Reliable |
| ⭐⭐⭐⭐⭐ | Very High (rare) | ✅ Ultra reliable |

### 🔄 Indicator Breakdown

| Indicator | Weight | What it checks |
|:----------|:------:|:---------------|
| RSI | ★1 | Oversold (<30) / Overbought (>70) crossover |
| MACD | ★1 | Bullish/bearish crossover with negative/positive histogram |
| EMA 200 | ★0.5 | Price position relative to 200-period EMA |
| Volume | ★0.5 | Surge detection (1.5x average) |
| Divergence | ★1.5 | Hidden/regular bullish & bearish divergence |
| Multi-TF | +2.5 | Bonus if 2+ timeframes agree simultaneously |

**Minimum 3★ required for alert** — ensures only high-probability signals trigger notifications.

---

<a name="persian"></a>
## 🇮🇷 فارسی

### 🎯 این ربات چیکار میکنه؟

**RSI Ultra Signal Bot** یک سیستم هشدار حرفه‌ای برای تریدینگ ویو هست که RSI رو روی **۵ تایم فریم همزمان** مانیتور میکنه و با ترکیب **۶ اندیکاتور تکنیکال** سیگنال‌های **فوق‌معتبر خرید/فروش** تولید میکنه.

وقتی یه سیگنال با اعتبار بالا تشخیص داده بشه، به صورت خودکار به **تلگرام** و **بله** ارسال میشه.

### 🔥 ویژگی‌ها

| ویژگی | توضیح |
|:------|:-------|
| 📈 **RSI چند تایم فریم** | مانیتور همزمان ۵ تایم فریم (۵د, ۱۵د, ۱س, ۴س, روزانه) |
| 🧠 **۶ اندیکاتور همزمان** | RSI + MACD + EMA200 + Volume + Divergence + Multi-TF |
| ⭐ **سیستم امتیازدهی** | سیگنال‌ها از ۱ تا ۵ ستاره رتبه‌بندی میشن |
| 🔬 **فیلتر هوشمند** | سیگنال‌های زیر ۳ ستاره خودکار فیلتر میشن |
| 📱 **تلگرام + بله** | ارسال همزمان به دو پیام‌رسان |
| ⚙️ **کاملاً قابل تنظیم** | همه پارامترها از داخل TradingView قابل تغییر |
| 🐳 **داکر** | نصب با یک دستور |

---

<a name="installation"></a>
## 📦 Installation / نصب

### Prerequisites / پیش‌نیازها

- Node.js 20+
- A Telegram bot token (from [@BotFather](https://t.me/BotFather))
- (Optional) A Bale bot token (from [@BaleBotFather](https://t.me/BaleBotFather))

### 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/mamadiezad/tradingview-rsi-alert-bot.git
cd tradingview-rsi-alert-bot

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your bot tokens
nano .env

# 4. Start the server
npm start
```

### 🐳 Docker

```bash
docker-compose up --build -d
```

### 📱 Get Telegram Bot Token

```
1. Open Telegram → Search @BotFather
2. Send /newbot
3. Choose a name (e.g. "RSI Alert Bot")
4. Copy the API token
5. Add to .env: TELEGRAM_BOT_TOKEN=123456:ABC...
6. Get your Chat ID: Send a message to @userinfobot
7. Add to .env: TELEGRAM_CHAT_ID=123456789
```

### 📱 Get Bale Bot Token

```
1. Open Bale → Search @BaleBotFather
2. Send /newbot
3. Follow the same steps as Telegram
4. Add to .env: BALE_BOT_TOKEN=... and BALE_CHAT_ID=...
```

---

<a name="pine"></a>
## 📄 Pine Script Setup / تنظیم اسکریپت

### Step 1: Add Indicator to TradingView

```pine
// 1. Open TradingView
// 2. Go to Pine Editor (bottom panel)
// 3. Copy the content of pine/rsi-multi-timeframe-alert.pine
// 4. Paste and save (Ctrl+S)
// 5. Add to chart
```

### Step 2: Parameters (قابل تنظیم)

| Parameter | Default | Description |
|:----------|:-------:|:------------|
| RSI Period | 14 | RSI calculation period |
| Overbought | 70 | Overbought threshold |
| Oversold | 30 | Oversold threshold |
| TF1-TF5 | 5m,15m,1h,4h,D | Timeframes to monitor |
| MACD Confirm | ON | Enable MACD confirmation |
| EMA 200 Filter | ON | Enable EMA trend filter |
| Volume Surge | ON | Enable volume surge detection |
| Divergence | ON | Enable divergence detection |
| Multi-TF Confirm | ON | Require multiple TF agreement |
| Min Stars | 3 | Minimum star rating for alerts |
| Min Interval | 60 min | Minimum time between alerts |

### Step 3: Create Alert

```
1. Right-click chart → "Add Alert"
2. Condition: Select "RSI Ultra Signal"
3. Webhook URL: http://YOUR_SERVER_IP:3000/api/webhook/tradingview
4. Frequency: "Once Per Bar Close"
5. Save ✅
```

---

<a name="api"></a>
## 🔌 API Reference

| Method | Endpoint | Description |
|:------|:---------|:------------|
| `POST` | `/api/webhook/tradingview` | 📥 Receive TradingView alerts |
| `GET` | `/api/test` | 🧪 Send test alert to Telegram & Bale |
| `GET` | `/api/status` | 📊 Server status & configuration |

### 📨 Test Alert

```bash
curl http://localhost:3000/api/test
```

### 📊 Check Status

```bash
curl http://localhost:3000/api/status
```

### 🌐 Web UI

Open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
tradingview-rsi-alert-bot/
├── pine/
│   └── rsi-multi-timeframe-alert.pine   # 📄 TradingView Pine Script (180+ lines)
├── server/
│   ├── index.js          # 🖥️ Express webhook server
│   ├── config.js         # ⚙️ Configuration
│   ├── telegram/
│   │   └── sender.js     # 📱 Telegram notification sender
│   ├── bale/
│   │   └── sender.js     # 📱 Bale notification sender
│   └── utils/
│       └── parser.js     # 🔧 Alert message parser & formatter
├── public/
│   └── index.html        # 🌐 Web UI dashboard
├── .env.example           # 📝 Environment configuration example
├── docker-compose.yml    # 🐳 Docker setup
├── Dockerfile            # 🐳 Docker image
└── package.json          # 📦 Dependencies
```

---

## 🏷️ Keywords

`TradingView` `RSI` `MACD` `Divergence` `EMA` `Technical Analysis` 
`Crypto Trading` `Forex Signals` `Algorithmic Trading` 
`Telegram Bot` `Bale` `Pine Script` `Multi Timeframe` 
`تریدینگ ویو` `سیگنال ارز دیجیتال` `تحلیل تکنیکال` `فارکس` `ربات تلگرام`

---

## 🤝 Connect

<p align="center">
  <a href="https://t.me/llllxyz">
    <img src="https://img.shields.io/badge/Telegram-Contact-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" />
  </a>
  <a href="https://github.com/mamadiezad/tradingview-rsi-alert-bot">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

<p align="center">
  Built with ❤️ by <a href="https://t.me/llllxyz">Mohammad</a>
</p>
