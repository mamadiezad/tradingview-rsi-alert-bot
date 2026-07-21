module.exports = {
  parseAlertMessage(msg) {
    const lines = msg.split('\n').filter(l => l.trim());
    const data = { raw: msg, timestamp: new Date().toISOString() };

    // Direction
    if (msg.includes('BUY')) data.signal = 'BUY';
    else if (msg.includes('SELL')) data.signal = 'SELL';

    // Symbol
    const symMatch = msg.match(/\| (\w+)/);
    if (symMatch) data.symbol = symMatch[1];

    // Stars
    const starMatch = msg.match(/Stars:\s*([\d.]+)/);
    if (starMatch) data.stars = parseFloat(starMatch[1]);

    // RSI values
    const rsiMatch = msg.match(/RSI:\s*([\d.\s\|]+)/);
    if (rsiMatch) {
      data.rsi = rsiMatch[1].split('|').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    }

    // TF confirmation count
    const tfMatch = msg.match(/TFs:\s*(\d+)/);
    if (tfMatch) data.confirmingTfs = parseInt(tfMatch[1]);

    // Price
    const priceMatch = msg.match(/Price:\s*([\d.]+)/);
    if (priceMatch) data.price = parseFloat(priceMatch[1]);

    // Reasons
    const reasonMatch = msg.match(/(RSI_OS|RSI_OB|MACD_Bull|MACD_Bear|Div_Bull|Div_Bear)/g);
    if (reasonMatch) {
      const reasonMap = {
        'RSI_OS': '🟢 RSI Oversold',
        'RSI_OB': '🔴 RSI Overbought',
        'MACD_Bull': '📊 MACD Bullish',
        'MACD_Bear': '📊 MACD Bearish',
        'Div_Bull': '🔄 Bullish Divergence',
        'Div_Bear': '🔄 Bearish Divergence',
      };
      data.reasons = reasonMatch.map(r => reasonMap[r] || r);
    }

    // Confidence level
    if (data.stars !== undefined) {
      if (data.stars >= 4.5) data.confidence = '🟣 VERY HIGH';
      else if (data.stars >= 3.5) data.confidence = '🟢 HIGH';
      else if (data.stars >= 2.5) data.confidence = '🟡 MEDIUM';
      else data.confidence = '🔴 LOW';
    }

    return data;
  },

  formatAlertMessage(parsed) {
    const emoji = parsed.signal === 'BUY' ? '🟢' : '🔴';
    const stars = parsed.stars ? '⭐'.repeat(Math.round(parsed.stars)) : '';
    const reasons = parsed.reasons?.join('\n') || '';

    return `${emoji} <b>ULTRA SIGNAL: ${parsed.signal}</b> ${stars}
━━━━━━━━━━━━━━━━━━━━━━
<b>Symbol:</b> ${parsed.symbol || '?'}
<b>Price:</b> ${parsed.price || '?'}
<b>Confidence:</b> ${parsed.confidence || '?'}
<b>TFs Confirming:</b> ${parsed.confirmingTfs || '?'}/5
${parsed.rsi ? `<b>RSI:</b> ${parsed.rsi.join(' | ')}` : ''}
${reasons ? `\n<b>Reasons:</b>\n${reasons}` : ''}
━━━━━━━━━━━━━━━━━━━━━━
⏰ ${new Date().toLocaleString('fa-IR')}
🤖 <a href="https://t.me/llllxyz">RSI Ultra Bot</a>`;
  }
};
