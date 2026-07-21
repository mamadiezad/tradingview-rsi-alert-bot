module.exports = {
  server: { port: process.env.PORT || 3000 },
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_CHAT_ID || '',
  },
  bale: {
    botToken: process.env.BALE_BOT_TOKEN || '',
    chatId: process.env.BALE_CHAT_ID || '',
  },
  alerts: {
    minInterval: (parseInt(process.env.MIN_ALERT_INTERVAL || '60')) * 1000,
  },
};
