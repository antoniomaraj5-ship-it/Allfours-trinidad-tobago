function cardValue(card) {
  if (card.value === "A") return 14;
  if (card.value === "K") return 13;
  if (card.value === "Q") return 12;
  if (card.value === "J") return 11;
  return parseInt(card.value);
}

function getCardPoints(card) {
  if (card.value === "10") return 10;
  if (card.value === "A") return 4;
  if (card.value === "K") return 3;
  if (card.value === "Q") return 2;
  if (card.value === "J") return 1;
  return 0;
}
