class Draw{
  constructor(question, card_draws) {
    this.question = question
    this.card_draws = card_draws
  }

  static createDraw() {
    event.preventDefault();
    console.log("create draw")
    if (event.target.id === "one") {
      console.log("draw one clicked")
      let cards = _.sampleSize(Card.all, 1)
      Draw.addCards(cards);
    } else if (event.target.id === "three") {
        console.log("draw three clicked")
        let cards = _.sampleSize(Card.all, 3)
        Draw.addCards(cards);
    } else if (event.target.id === "five") {
        console.log("draw five clicked")
        let cards = _.sampleSize(Card.all, 5)
        Draw.addCards(cards);
    } 
  }
  
  static getAllDraws() {
  
  }
  
  static getDraw() {
  
  }
  
  static deleteAllDraws() {
  
  }
  
  static deleteDraw() {
  
  }

  static addCards(cards) {
    cards.forEach(card => {
      let id = card.id
      let name = Card.titleCaseName(card.name);
      let columnDiv = document.createElement('div');
      columnDiv.className = "col-md-4 mb-5"
      columnDiv.id = id
  
      columnDiv.innerHTML += `
        <div class="card h-100">
        <div class="card-body" id="${id}" draw-data-id="${this.id}">
          <h2 class="card-title" id="${id}"> ${name}</h2>
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
    })
    console.log("draw created")
  }


}