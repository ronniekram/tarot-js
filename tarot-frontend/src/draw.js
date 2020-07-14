const allCards = Card.all();

class Draw{
  constructor(question, card_draws) {
    this.question = question
    this.card_draws = card_draws
  }


  static renderDraw() {
    event.preventDefault();
    let button = event.target
    if (button.id === "one") {
      let cardAmount = Draw.findCards(1);
      console.log(cardAmount);
    } else if (button.id === "three") {
      let cardAmount = Draw.findCards(3);
      console.log(cardAmount);
    } else if (button.id === "five") {
      let cardAmount = Draw.findCards(5);
      console.log(cardAmount);
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

  static findCards(num) {
    let random = [];
    while(random.length < num) {
      let r = Math.floor(Math.random() * 78) + 1;
      random.push(r);
    }
    let spreadCards = allCards[0].filter(card => {
      return random.indexOf(card.id) !== -1
    })
    return spreadCards;
  }
}