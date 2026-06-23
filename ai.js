function aiPlay(hand) {
  // simple AI: plays random card
  let index = Math.floor(Math.random() * hand.length);
  return hand.splice(index, 1)[0];
}
