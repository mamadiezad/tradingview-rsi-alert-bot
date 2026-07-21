const axios = require('axios');
const config = require('../config');

exports.sendTelegram = async (message) => {
  if (!config.telegram.botToken || !config.telegram.chatId) return false;
  try {
    await axios.post(`https://api.telegram.org/bot${config.telegram.botToken}/sendMessage`, {
      chat_id: config.telegram.chatId,
      text: message,
      parse_mode: 'HTML',
    });
    return true;
  } catch (err) {
    console.error('Telegram Error:', err.message);
    return false;
  }
};
