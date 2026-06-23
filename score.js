function calculateRoundScores(trickCards, trumpSuit) {
  let high = null;
  let low = null;
  let jack = null;
  let game = 0;

  let trumpCards = trickCards.filter(c => c.suit === trumpSuit);

  if (trumpCards.length === 0) {
    return { high:0, low:0, jack:0, game:0 };
  }

  high = trumpCards.reduce((a,b)=> cardValue(a) > cardValue(b) ? a : b);
  low = trumpCards.reduce((a,b)=> cardValue(a) < cardValue(b) ? a : b);

  jack = trumpCards.find(c => c.value === "J");

  trickCards.forEach(c => game += getCardPoints(c));

  return {
    high: 1,
    low: 1,
    jack: jack ? 1 : 0,
    game
  };
}
