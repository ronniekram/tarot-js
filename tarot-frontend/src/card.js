class Card{
  constructor(name, summary, full_meaning, image, upright, reversed) {
    this.name = name
    this.summary = summary
    this.full_meaning = full_meaning
    this.image = image
    this.upright = upright
    this.reversed = reversed
  }

    static fetchCards() {
      clearPage();
      // let ol = document.createElement('ol');
      fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(cards => {
        Card.splitCards(cards);
        // Card.renderCards(cards);
      });
  }
    static renderCards(cards) {
      let ol = document.createElement('ol');
      cards.forEach(card => {
        let name = titleCaseName(card.name);
        let li = document.createElement('li');
        li.innerHTML = `
        <strong>${name}</strong> - ${card.summary}
        `
        ol.appendChild(li);
      });
      rowDiv.appendChild(ol);
    }

    static splitCards(cards) {
      let major = cards.splice(0,22);
      let swords = cards.splice(0,14);
      let cups = cards.splice(0,14);
      let wands = cards.splice(0,14);
      let pentacles = cards.splice(0,14)
      console.log(major);
      console.log(swords);
      console.log(cups);
      console.log(wands);
      console.log(pentacles);
    }
      
    }
