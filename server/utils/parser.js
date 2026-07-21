module.exports = {
  parseAlertMessage(msg) {
    const lines = msg.split('\n').filter(l => l.trim());
    const data = { raw: msg, timestamp: new Date().toISOString() };

    if (msg.includes('BUY')) data.signal = 'BUY';
    else if (msg.includes('SELL')) data.signal = 'SELL';

    const symbolMatch = msg.match(/Symbol:\s*(\S+)/i);
    if (symbolMatch) data.symbol = symbolMatch[1];

    const priceMatch = msg.match(/Price:\s*([\d.]+)/);
    if (priceMatch) data.price = parseFloat(priceMatch[1]);

    const rsiMatches = [...msg.matchAll(/(\w+):\s*([\d.]+)/g)];
    data.rsi = {};
    rsiMatches.forEach(m => {
      if (m[1] !== 'Price' && !isNaN(parseFloat(m[2]))) {
        data.rsi[m[1]] = parseFloat(m[2]);
      }
    });

    return data;
  }
};
