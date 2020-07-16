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
      console.log("cards index button clicks");
      fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(cards => Card.listCards(cards))
      console.log("cards fetched");
  }
  
    static listCards(cards) {
      // event.preventDefault();
      rowDiv.innerHTML = "";
      let ol = document.createElement('ol');
      cards.forEach(card => {
        let name = titleCaseName(card.name);
        let li = document.createElement('li');
        li.id = card.id
        li.innerHTML = `
        <a href="#" id="${card.id}" class="card-list">${name}</a> - ${card.summary}
        `
        ol.appendChild(li);
        let list = document.querySelectorAll('card-list');

        list.forEach(item => {
          item.addEventListener("click", showCard)
        })
      })
      rowDiv.appendChild(ol);
    }
    

    showCard() {
      event.preventDefault();
      console.log('this is where a card will go')
    }
  
}