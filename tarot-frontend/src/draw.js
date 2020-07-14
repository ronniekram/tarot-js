const allCards = Card.all();

class Draw{
  constructor(question) {
    this.question = question
  }

  static createDraw() {
    event.preventDefault();
    let formQ = document.getElementById("draw-question");
    let questionDiv = document.createElement('div');
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        question: formQ.value,
        draw_cards: []
      })
    }
    fetch(`${BASE_URL}/draws`, configObj)
      .then(resp => resp.json())
      .then(drawData => {
        questionDiv.class = "card text-white bg-secondary my-5 py-4 text-center";
        questionDiv.innerHTML = `<h3>${drawData.question}</h3>`;
        rowDiv.appendChild(questionDiv);
      })
      .catch(err => console.error('Caught error: ', err))

      // Draw.renderDraw();
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
    rowDiv.innerHTML = ""
    let ul = document.createElement('ul');
    fetch(`${BASE_URL}/draws`)
    .then(resp => resp.json())
    .then(draws => {
      draws.forEach(draw => {
        let li = document.createElement('li');
        li.id = draw.id;
        li.className = "draws-list"
        li.innerHTML = `<a href="#" id="${draw.id}"> ${draw.question} - ${draw.created_at} </a>`;
        ul.appendChild(li);
      })
    }) 
    rowDiv.appendChild(ul);
  }
  
  static getDraw() {
    console.log(event.target);
    // console.log("link clicked")
    // event.preventDefault();
    // let id = event.target.id;
    // fetch(`${BASE_URL}/draws/${id}`)
    // .then(resp => resp.json())
    // .then(console.log(resp))  
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