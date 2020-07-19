const major = cards.splice(0,22);
const swords = cards.splice(0,14);
const cups = cards.splice(0,14);
const wands = cards.splice(0,14);
const pentacles = cards.splice(0,14)

const deck = [major, swords, cups, wands, pentacles];
const names = ["Major Arcana", "Swords", "Cups", "Wands", "Pentacles"]

static fetchCards() {
  clearPage();
  fetch(`${BASE_URL}/cards`)
  .then(resp => resp.json())
  .then(cards => {
    Card.renderSuites(cards);
  });
}


static renderSuites(cards) {
  event.preventDefault();
  clearPage();
  deck.forEach(suite => {
    Card.renderSuite(suite);
  })
}

static renderSuite(suite) {

}