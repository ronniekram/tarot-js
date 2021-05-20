class Card {

  constructor(name, suit, summary, image, upright, reversed, desc) {
    this.name = name
    this.suit = suit
    this.summary = summary
    this.image = image
    this.upright = upright
    this.reversed = reversed
    this.desc = desc
  };

  static fetchCards() {
    clearPage();

    fetch(`${BASE_URL}/cards`)
    .then(resp => resp.json())
    .then(cards => console.log(cards));
  };

  // can i use null as an argument to filter?
  static filterSuit(cards, suit) {
    return cards.filter(card => card.suit === suit)
  };

}