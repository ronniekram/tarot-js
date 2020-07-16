// const allCards = Card.all();
class Draw{
  constructor(question, card_draw) {
    this.question = question
    this.card_draw = card_draw
  }

  static createDraw() {
    event.preventDefault();
    let formQ = document.getElementById("draw-question");
    let questionDiv = document.createElement('div');
    let drawArray = [];
    let button = event.target
  
    if (button.id === "one") {
      drawArray.push(Draw.findCards(1)); 
      drawArray = drawArray[0];
      console.log(drawArray);
    } else if (button.id === "three") {
      drawArray.push(Draw.findCards(3));
      drawArray = drawArray[0];
      console.log(drawArray);
    } else if (button.id === "five") {
      drawArray.push(Draw.findCards(5));
      drawArray = drawArray[0];
      console.log(drawArray);
    }
    
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        question: formQ.value,
        draw_cards: drawArray
      })
    }
    fetch(`${BASE_URL}/draws`, configObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.question);
        questionDiv.class = "card text-white bg-secondary my-5 py-4 text-center";
        questionDiv.innerHTML = `<h3>${data.question}</h3>`;
        rowDiv.appendChild(questionDiv);
        console.log(drawArray)
        // Card.renderCards(drawArray);
        Draw.renderDraw();
      })
      .catch(err => console.error('Caught error: ', err))

      Draw.renderDraw();
  }

  static renderDraw() {
    // event.preventDefault();
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
        li.innerHTML = `<a href="#" id="${draw.id}"> ${draw.question}</a>`;
        ul.appendChild(li);
      })
    }) 
    rowDiv.appendChild(ul);
  }
  
  
  static getDraw() {
    event.preventDefault();
    // let draw = event.target;
    let id = event.target.id;
    console.log("link clicked");

    fetch(`${BASE_URL}/draws/${id}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error('Caught error: ', err))
 
  }

  static displayDraw(draw) {
    let drawDiv = document.createElement('div');


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


fetch(`${BASE_URL}/cards`)
  .then(resp => resp.json())
  .then(cards => {

  })


  let id = card.id;
  let columnDiv = document.createElement('div');
  columnDiv.className = "col-md-4 mb-5"

  columnDiv.innerHTML = `
  <div class="card h-100">
  <div class="card-body">
    <h2 class="card-title"> ${card.name}</h2>
    <div class="card-img">
      <img src="${card.image}" class="card-img">
    </div>
    <p class="card-text">${card.full_meaning}</p>
  </div>
  <div class="card-footer">
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

        li.innerHTML = `<a href="#" id="${draw.id}" class="list"> ${draw.question}</a>   
        <button class="btn delete" delete-btn-id="${draw.id}">Delete?</button>`;