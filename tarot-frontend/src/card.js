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
    .then(cards => this.renderCards(cards))
    console.log("cards fetched");
  }

  static all() {
    let cardsArray = [];
    fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(cards => cardsArray.push(cards)) 
      return cardsArray;
  } 

  static renderCards(cards) {
    rowDiv.innerHTML = "";
    cards.forEach(card => {
      Card.renderCard(card);
    });
  }

  static renderCard(card) {
    let id = card.id
    // let name = Card.titleCaseName(card.name);
    let columnDiv = document.createElement('div');
    columnDiv.className = "col-md-4 mb-5"
    columnDiv.id = id

    columnDiv.innerHTML += `
      <div class="card h-100">
      <div class="card-body" id="${id}" draw-data-id="${this.id}">
        <h2 class="card-title" id="${id}"> ${card.name}</h2>
        <div class="card-img" id="${id}">
          <img src="${card.image}" class="card-img">
        </div>
        <p class="card-text" id="${id}">${card.full_meaning}</p>
      </div>
      <div class="card-footer" id="${id}">
        <p>
          <strong>Upright:</strong> ${card.upright} 
        </p>
        <p>
          <strong>Reversed:</strong> ${card.reversed}
        </p>
      </div>
    </div>
    `
    rowDiv.appendChild(columnDiv)
  }
  
  static titleCaseName(name) {
    let nameArray = name.split("-");
    for (let i = 0; i < nameArray.length; i ++) {
      nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1).toLowerCase();
    }
    return nameArray.join(" ");
  }
}