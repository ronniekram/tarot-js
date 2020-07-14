const allCards = Card.all();

class Draw{
  constructor(question, card_draws) {
    this.question = question
    this.card_draws = card_draws
  }

  static createDraw() {
    let asked = document.getElementById("draw-question")
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Action": "application/json"
      },
      body: JSON.stringify({
        question: asked.value;
      })
    }
    fetch(`${BASE_URL}/draws`, configObj)
    .then(resp => resp.json())
    .then()
  }

  static renderDraw() {
    event.preventDefault();
    let button = event.target
    if (button.id === "one") {
      rowDiv.innerHTML = "";
      let cardAmount = Draw.findCards(1);
      cardAmount.forEach(card => {
        Card.renderCard(card)
      })
    } else if (button.id === "three") {
      rowDiv.innerHTML = "";
      let cardAmount = Draw.findCards(3);
      cardAmount.forEach(card => {
        Card.renderCard(card)
      })
    } else if (button.id === "five") {
      rowDiv.innerHTML = "";
      let cardAmount = Draw.findCards(5);
      cardAmount.forEach(card => {
        Card.renderCard(card)
      })
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