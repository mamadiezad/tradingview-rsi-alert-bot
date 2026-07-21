const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config');
const { sendTelegram } = require('./telegram/sender');
const { sendBale } = require('./bale/sender');
const { parseAlertMessage } = require('./utils/parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// In-memory rate limiter
const lastAlerts = {};

function canSendAlert(symbol, signal) {
  const key = `${symbol}:${signal}`;
  const now = Date.now();
  if (lastAlerts[key] && (now - lastAlerts[key] < config.alerts.minInterval)) return false;
  lastAlerts[key] = now;
  return true;
}

// ===== TradingView Webhook =====
app.post('/api/webhook/tradingview', async (req, res) => {
  try {
    const alertMessage = req.body?.message || req.body?.text || '';

    if (!alertMessage) return res.status(400).json({ error: 'No message' });

    const parsed = parseAlertMessage(alertMessage);
    const symbol = parsed.symbol || 'UNKNOWN';
    const signal = parsed.signal || 'ALERT';
    const emoji = signal === 'BUY' ? '🟢' : '🔴';

    // Format beautiful message
    const formatted = parser.formatAlertMessage(parsed);
    if (!canSendAlert(symbol, signal)) {
      return res.json({ status: 'rate_limited', message: 'Too soon for same symbol/signal' });
    }

    const [tg, bale] = await Promise.all([
      sendTelegram(formatted),
      sendBale(formatted),
    ]);

    console.log(`[${signal}] ${symbol} — Telegram: ${tg ? 'OK' : 'SKIP'} | Bale: ${bale ? 'OK' : 'SKIP'}`);

    res.json({
      status: 'ok',
      sent: { telegram: tg, bale },
      data: parsed,
    });
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ===== Test endpoint =====
app.get('/api/test', async (req, res) => {
  const testMessage = `🟢 <b>RSI SIGNAL: BUY</b>
━━━━━━━━━━━━━━━━━━
<b>Symbol:</b> BTCUSDT
<b>Price:</b> 67432.5
<b>Timeframe:</b> 15/1H/4H/1D
<b>RSI:</b> 28.3 (Oversold)
<b>Time:</b> ${new Date().toLocaleString('fa-IR')}
━━━━━━━━━━━━━━━━━━
🤖 <a href="https://t.me/llllxyz">TradingView RSI Bot</a>`;

  const [tg, bale] = await Promise.all([
    sendTelegram(testMessage),
    sendBale(testMessage),
  ]);

  res.json({ telegram: tg, bale, note: 'Test message sent' });
});

// ===== Status =====
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    version: '1.0.0',
    telegram: !!config.telegram.botToken,
    bale: !!config.bale.botToken,
    alertInterval: config.alerts.minInterval / 1000 + 's',
  });
});

// ===== Web UI =====
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// ===== Start =====
app.listen(config.server.port, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║  📊 RSI Alert Bot — ACTIVE              ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');
  console.log(`  🌐 Server:     http://localhost:${config.server.port}`);
  console.log(`  🔌 Webhook:    POST /api/webhook/tradingview`);
  console.log(`  📱 Telegram:   ${config.telegram.botToken ? '✅' : '❌ Not configured'}`);
  console.log(`  📱 Bale:       ${config.bale.botToken ? '✅' : '❌ Not configured'}`);
  console.log(`  ⏱ Rate limit: ${config.alerts.minInterval / 1000}s between same alerts`);
  console.log('');
});
