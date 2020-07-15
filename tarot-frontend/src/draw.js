const allCards = Card.all();
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
      drawArray = drawArray[0]
      console.log(drawArray)
    } else if (button.id === "three") {
      drawArray.push(Draw.findCards(3));
      drawArray = drawArray[0]
      console.log(drawArray)
    } else if (button.id === "five") {
      drawArray.push(Draw.findCards(5));
      drawArray = drawArray[0]
      console.log(drawArray)
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
  
        questionDiv.class = "card text-white bg-secondary my-5 py-4 text-center";
        questionDiv.innerHTML = `<h3>${data.question}</h3>`;
        rowDiv.appendChild(questionDiv);
        // console.log(data.draw_cards)
        // Card.renderCards(data.draw_cards);
      })
      .catch(err => console.error('Caught error: ', err))
  }

  // static createDraw() {
  //   event.preventDefault();
  //   let formQ = document.getElementById("draw-question");
  //   let questionDiv = document.createElement('div');
  //   let button = event.target
    
  //   let configObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       question: formQ.value,
  //       draw_cards: []
  //     })
  //   }
  //   fetch(`${BASE_URL}/draws`, configObj)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       if (button.id === "one") {
  //         data.draw_cards.push(Draw.findCards(1)); 
  //       } else if (button.id === "three") {
  //         data.draw_cards.push(Draw.findCards(3));
  //       } else if (button.id === "five") {
  //         data.draw_cards.push(Draw.findCards(5));
  //       }

  //       questionDiv.class = "card text-white bg-secondary my-5 py-4 text-center";
  //       questionDiv.innerHTML = `<h3>${data.question}</h3>`;
  //       rowDiv.appendChild(questionDiv);
  //       let drawArray = data.draw_cards[0]
  //       console.log(drawArray)
  //       Card.renderCards(drawArray);
  //     })
  //     .catch(err => console.error('Caught error: ', err))
  // }

  
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