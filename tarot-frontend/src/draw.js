const allCards = Card.all();
let random = (num) => {
  let spread = [];
  while(spread.length < num) {
    let r = Math.floor(Math.random() * 78) + 1;
    if(spread.indexOf(r) === -1) spread.push(r);
  } 
}

class Draw{
  constructor(question, card_draws) {
    this.question = question
    this.card_draws = card_draws
  }

  // static createDraw() {
  //   event.preventDefault();
  //   console.log("create draw")
  //   console.log("all cards");
  //   if (event.target.id === "one") {
  //     console.log("draw one clicked")
  //     let cards = Card.sampleCards(allCards, 1);
  //     Card.renderCards(cards);
  //   } else if (event.target.id === "three") {
  //       console.log("draw three clicked")
  //       let cards = Card.sampleCards(allCards, 3);
  //       Card.renderCards(cards);
  //   } else if (event.target.id === "five") {
  //       console.log("draw five clicked")
  //       let cards = Card.sampleCards(allCards, 5);
  //       Card.renderCards(cards);
  //   } 
  // }

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

  // static randomNum(num) {
  //   let random = [];
  //   while(random.length < num) {
  //     let r = Math.floor(Math.random() * 78) + 1;
  //     random.push(r);
  //   }
  //   return random;
  // }

  static findCards(num) {
    // let cards = [];
    // while(random.length < num) {
    //   let r = Math.floor(Math.random() * 78) + 1;
    //   if(random.indexOf(r) === -1) random.push(r);
    // } 
    allCards.filter(card => {
      if((card.id).includes(random(num))) return card;
    })
  }
}