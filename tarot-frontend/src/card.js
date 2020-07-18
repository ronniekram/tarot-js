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
      let ol = document.createElement('ol');
      fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(cards => {
        cards.forEach(card => {
          let name = titleCaseName(card.name);
          let li = document.createElement('li');
          li.innerHTML = `
          <strong>${name}</strong> - ${card.summary}
          `
          ol.appendChild(li);
        });
        rowDiv.appendChild(ol);
      });
  }
      
    }