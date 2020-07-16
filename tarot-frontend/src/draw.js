
class Draw{
  constructor(question, card_ids) {
    this.question = question
    this.card_ids = card_ids
  }

  static createDraw() {
    event.preventDefault();
    let formQ = document.getElementById("draw-question");
    let idsArray = [];
    let button = event.target;

    if (button.id === "one") {
      idsArray.push(Draw.randomNums(1));
      idsArray = idsArray[0]
    } else if (button.id === "three") {
        idsArray.push(Draw.randomNums(3));
        idsArray = idsArray[0]
    } else if (button.id === "five") {
      idsArray.push(Draw.randomNums(5));
      idsArray = idsArray[0]
    }

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        question: formQ.value,
        card_ids: idsArray
      })
    }

    fetch(`${BASE_URL}/draws`, configObj)
      .then(resp => resp.json())
      .then(draw => {
        Draw.renderDraw(draw)
      })
  }

  static renderDraw(draw) {
    rowDiv.innerHTML = ""
    questionDiv.innerHTML = ""
    let drawDiv = document.createElement('div');
    let cardDiv = document.createElement('div');
    let id = draw["id"];
    let question = draw["question"];
    let cards = draw["cards"];
    console.log(cards);
    drawDiv.className = "display-spread";
    drawDiv.id = id
    cardDiv.className = "col-md-4 mb-5";

    questionDiv.innerHTML = `
      <h2>${question}</h2>
    `
    cards.forEach(card => {
      console.log(card);
      cardDiv.innerHTML = `
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
      drawDiv.appendChild(cardDiv);
    });

    rowDiv.appendChild(drawDiv);
  }

  static getAllDraws() {
    rowDiv.innerHTML = ""
    let ul = document.createElement('ul');
    fetch(`${BASE_URL}/draws`)
    .then(resp => resp.json())
    .then(draws => {
      draws.forEach(draw => {
        let li = document.createElement('li');
        li.className = "draws-list"
        li.id = draw.id;
        li.innerHTML = `<a href="#" id="${draw.id}"> ${draw.question}</a>`;
        ul.appendChild(li);
      })
    }) 
    rowDiv.appendChild(ul);
  }

  static getDraw(draw) {

  }


  static deleteDraws(draws) {
    console.log('delete all button clicked');
    let draws = event.target.parentElement;
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }}
      fetch(`${BASE_URL}/draws`, configObj)
      .then(draws.remove())
  }

  static deleteDraw(draw) {
    console.log('delete button clicked');

  }

  static randomNums(num) {
    let random = [];
    while(random.length < num) {
      let r = Math.floor(Math.random() * 78) + 1;
      random.push(r)
    }
      return random;
  }

  static titleCaseName() {

  }


}