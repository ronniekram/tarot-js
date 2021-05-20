class Card{
  constructor(name, suit, summary, image, upright, reversed, desc) {
    this.name = name
    this.suit = suit
    this.summary = summary
    this.image = image
    this.upright = upright
    this.reversed = reversed
    this.desc = desc
  }

    static fetchCards() {
      clearPage();

      fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(cards => Card.splitCards(cards));
  }

    static splitCards(cards) {
      const major = cards.splice(0,22);
      const swords = cards.splice(0,14);
      const cups = cards.splice(0,14);
      const wands = cards.splice(0,14);
      const pentacles = cards.splice(0,14);

      const deck = [major, swords, cups, wands, pentacles];
      const ol = document.createElement('ol');

      major.forEach(card => {
        const name = titleCaseName(card.name);
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>Major Arcana</strong>: <strong>${name}</strong> - ${card.summary}
        `
        ol.appendChild(li);
      });

      swords.forEach(card => {
        let name = titleCaseName(card.name);
        let li = document.createElement('li');
        li.innerHTML = `
        <strong>Swords</strong>: <strong>${name}</strong> - ${card.summary}
        `
        ol.appendChild(li);
      });

      cups.forEach(card => {
        let name = titleCaseName(card.name);
        let li = document.createElement('li');
        li.innerHTML = `
        <strong>Cups</strong>: <strong>${name}</strong> - ${card.summary}
        `
        ol.appendChild(li);
      });

      wands.forEach(card => {
        let name = titleCaseName(card.name);
        let li = document.createElement('li');
        li.innerHTML = `
        <strong>Wands:</strong>: <strong>${name}</strong> - ${card.summary}
        `
        ol.appendChild(li);
      });

      pentacles.forEach(card => {
        let name = titleCaseName(card.name);
        let li = document.createElement('li');
        li.innerHTML = `
        <strong>Pentacles</strong>: <strong>${name}</strong> - ${card.summary}
        `
        ol.appendChild(li);
      });

      rowDiv.appendChild(ol);


      }
      
    }
