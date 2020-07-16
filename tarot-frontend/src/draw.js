
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
      let name = titleCaseName(card.name);
      cardDiv.innerHTML = `
      <div class="card h-100">
      <div class="card-body">
        <h2 class="card-title"> ${name}</h2>
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
    event.preventDefault();
    rowDiv.innerHTML = ""
    let ul = document.createElement('ul');
    ul.innerHTML = `
    <button class="btn btn-primary" id="destroy-all">Delete All?</button>
    `
    fetch(`${BASE_URL}/draws`)
    .then(resp => resp.json())
    .then(draws => {
      draws.forEach(draw => {
        let li = document.createElement('li');
        li.id = draw.id;
        li.innerHTML = `<a href="#" id="${draw.id}" class="list"> ${draw.question}</a>   
        <button class="btn delete" delete-btn-id="${draw.id}">Delete?</button>`;
        ul.appendChild(li);
        let deleteBtn = document.querySelectorAll('.delete');
        let list = document.querySelectorAll(".list");

        deleteBtn.forEach(button => {
          button.addEventListener("click", Draw.deleteDraw)
        });

        list.forEach(item => {
          item.addEventListener("click", Draw.getDraw)
        });
      })
    }) 
    rowDiv.appendChild(ul);
    let destroyAll = document.getElementById('destroy-all');
    destroyAll.addEventListener("click", Draw.deleteDraws)

  }

  static getDraw() {
    event.preventDefault();
    let draw = event.target;
    let id = draw.id;

    fetch(`${BASE_URL}/draws/${id}`)
    .then(resp => resp.json())
    .then(draw => Draw.renderDraw(draw)) 

  }


  static deleteDraws() {
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

  static deleteDraw() {
    console.log('delete button clicked');
    let draw = event.target.parentElement;
    let id = draw.id;
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }}
      fetch(`${BASE_URL}/draws/${id}`, configObj)
      .then(draw.remove())

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