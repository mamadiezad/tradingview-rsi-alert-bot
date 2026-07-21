const axios = require('axios');
const config = require('../config');

exports.sendBale = async (message) => {
  if (!config.bale.botToken || !config.bale.chatId) return false;
  try {
    await axios.post(`https://tapi.bale.ai/bot${config.bale.botToken}/sendMessage`, {
      chat_id: config.bale.chatId,
      text: message,
      parse_mode: 'HTML',
    });
    return true;
  } catch (err) {
    console.error('Bale Error:', err.message);
    return false;
  }
};
