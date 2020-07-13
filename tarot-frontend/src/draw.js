const allCards = Card.all();
class Draw{
  constructor(question, card_draws) {
    this.question = question
    this.card_draws = card_draws
  }

  static createDraw() {
    event.preventDefault();
    console.log("create draw")
    console.log("all cards");
    if (event.target.id === "one") {
      console.log("draw one clicked")
      let cards = Card.sampleCards(allCards, 1);
      Card.renderCards(cards);
    } else if (event.target.id === "three") {
        console.log("draw three clicked")
        let cards = Card.sampleCards(allCards, 3);
        Card.renderCards(cards);
    } else if (event.target.id === "five") {
        console.log("draw five clicked")
        let cards = Card.sampleCards(allCards, 5);
        Card.renderCards(cards);
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

  // static addCards(cards) {
  //   cards.forEach(card => {
  //     let id = card.id
  //     // let name = Card.titleCaseName(card.name);
  //     let columnDiv = document.createElement('div');
  //     columnDiv.className = "col-md-4 mb-5"
  //     columnDiv.id = id
  
  //     columnDiv.innerHTML += `
  //       <div class="card h-100">
  //       <div class="card-body" id="${id}" draw-data-id="${id}">
  //         <h2 class="card-title" id="${id}"> ${name}</h2>
  //         <div class="card-img" id="${id}">
  //           <img src="${card.image}" class="card-img">
  //         </div>
  //         <p class="card-text" id="${id}">${card.full_meaning}</p>
  //       </div>
  //       <div class="card-footer" id="${id}">
  //         <p>
  //           <strong>Upright:</strong> ${card.upright} 
  //         </p>
  //         <p>
  //           <strong>Reversed:</strong> ${card.reversed}
  //         </p>
  //       </div>
  //     </div>
  //     `
  //     rowDiv.appendChild(columnDiv)
  //   })
  //   console.log("draw created")
  // }


}