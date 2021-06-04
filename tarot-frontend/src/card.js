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
      fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(cards => {
        Card.splitCards(cards);
      });
  }

    static splitCards(cards) {
      const major = cards.splice(0,22);
      const swords = cards.splice(0,14);
      const cups = cards.splice(0,14);
      const wands = cards.splice(0,14);
      const pentacles = cards.splice(0,14)
      let ol = document.createElement('ol');

      major.forEach(card => {
        let name = titleCaseName(card.name);
        let li = document.createElement('li');
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
