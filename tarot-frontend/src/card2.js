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

  static fetchCards = () => {
    clearPage();

    fetch(`${BASE_URL}/cards`)
    .then(resp => resp.json())
    .then(cards => console.log(cards));
  };

  // can i use null as an argument to filter?
  static filterSuit = (cards, suit) => {
    return cards.filter(card => card.suit === suit)
  };

  static fuzzySearch = (cards, query) => {
    const options = {
      findAllMatches: true,
      keys: [name, suit]
    }
    const fuse = new Fuse(cards, options)
    const result = fuse.search(query)
  };

  // More Info link will show full desc modal
  showCard = () => {
    const suit = this.suit === null ? '' : this.suit;

    const cardDiv = document.createElement('div');
    cardDiv.className = "col-md-4 mb-5";
    cardDiv.innerHTML = `
      <div class="card h-100">
      <div class="card-body">
        <h2 class="card-title">${this.name}</h2>
        <h4 class="card-subtitle">${suit}</h4>
        <div class="card-img">
          <img src="${this.image}" class="card-img">
        </div>
        <p class="card-text">${this.summary}</p>
      </div>
      <div class="card-footer">
        <p>
          <strong>Upright:</strong> ${this.upright} 
        </p>
        <p>
          <strong>Reversed:</strong> ${this.reversed}
        </p>
        <a href="#">More Info</a>
      </div>
      </div>
      `
  }

}