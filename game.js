let deck = createDeck();
let players = [[], [], [], []];
let table = [];
let trumpSuit = suits[Math.floor(Math.random() * suits.length)];

function deal() {
  for (let i = 0; i < 6; i++) {
    for (let p = 0; p < 4; p++) {
      players[p].push(deck.pop());
    }
  }
}

function startGame() {
  deal();

  document.getElementById("info").innerText =
    "Trump Suit: " + trumpSuit;

  renderHand();
}

function renderHand() {
  let handDiv = document.getElementById("hand");
  handDiv.innerHTML = "";

  players[0].forEach((card, index) => {
    let btn = document.createElement("button");
    btn.innerText = card.value + card.suit;
    btn.onclick = () => playCard(index);
    handDiv.appendChild(btn);
  });
}

function playCard(index) {
  let card = players[0].splice(index, 1)[0];
  table.push(card);

  document.getElementById("table").innerText =
    "You played: " + card.value + card.suit;

  renderHand();

  // AI plays instantly (placeholder)
  if (players[1].length > 0) {
    let aiCard = aiPlay(players[1]);
    table.push(aiCard);
  }
}

startGame();
