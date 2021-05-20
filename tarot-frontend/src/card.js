// class Card{
//   constructor(name, suit, summary, image, upright, reversed, desc) {
//     this.name = name
//     this.suit = suit
//     this.summary = summary
//     this.image = image
//     this.upright = upright
//     this.reversed = reversed
//     this.desc = desc
//   }

//     static fetchCards() {
//       clearPage();

//       fetch(`${BASE_URL}/cards`)
//       .then(resp => resp.json())
//       .then(cards => Card.splitCards(cards));
//   }

//     static splitCards(cards) {
//       const major = cards.splice(0,22);
//       const swords = cards.splice(0,14);
//       const cups = cards.splice(0,14);
//       const wands = cards.splice(0,14);
//       const pentacles = cards.splice(0,14);

//       const deck = [major, swords, cups, wands, pentacles];
//       const ol = document.createElement('ol');

//       major.forEach(card => {
//         const name = titleCaseName(card.name);
//         const li = document.createElement('li');
//         li.innerHTML = `
//         <strong>Major Arcana</strong>: <strong>${name}</strong> - ${card.summary}
//         `
//         ol.appendChild(li);
//       });

//       swords.forEach(card => {
//         let name = titleCaseName(card.name);
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <strong>Swords</strong>: <strong>${name}</strong> - ${card.summary}
//         `
//         ol.appendChild(li);
//       });

//       cups.forEach(card => {
//         let name = titleCaseName(card.name);
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <strong>Cups</strong>: <strong>${name}</strong> - ${card.summary}
//         `
//         ol.appendChild(li);
//       });

//       wands.forEach(card => {
//         let name = titleCaseName(card.name);
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <strong>Wands:</strong>: <strong>${name}</strong> - ${card.summary}
//         `
//         ol.appendChild(li);
//       });

//       pentacles.forEach(card => {
//         let name = titleCaseName(card.name);
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <strong>Pentacles</strong>: <strong>${name}</strong> - ${card.summary}
//         `
//         ol.appendChild(li);
//       });

//       rowDiv.appendChild(ol);


//       }
      
//     }

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

  static allCards = [];

  static fetchCards = () => {
    fetch(`${BASE_URL}/cards`)
    .then(resp => resp.json())
    .then((cards) => {
      this.allCards.push(cards)
    });
  };

  // can i use null as an argument to filter?
  static filterSuit = (cards, suit) => {
    return cards.filter(card => card.suit === suit)
  };

  static fuzzySearch = (query) => {
    const options = {
      findAllMatches: true,
      keys: [this.name]
    }
    const cards = Card.allCards
    const fuse = new Fuse(cards, options)
    return fuse.search(query)
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
