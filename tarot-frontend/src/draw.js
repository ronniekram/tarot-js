class Draw{
  constructor(drawInfo) {
    this.question = drawInfo.question
    this.ids = drawInfo.card_ids
    this.cards = drawInfo.cards
  }

  static createDraw() {
    event.preventDefault();
    questionDiv.innerHTML = ""
    let idsArray = [];
    let button = event.target;

    if (button.id === "one") {
      idsArray.push(randomNums(1));
      idsArray = idsArray[0]
    } else if (button.id === "three") {
        idsArray.push(randomNums(3));
        idsArray = idsArray[0]
    } else if (button.id === "five") {
      idsArray.push(randomNums(5));
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
      .then(drawInfo => {
        let created = new Draw(drawInfo)
        created.renderDraw()
      })
  }

  renderDraw() {
    clearPage();
    let question = this.question
    let cards = this.cards;
    let id = this.id;
    let next = id + 1;
    let previous = id - 1;
    console.log(cards);

    questionDiv.innerHTML = `
      <h2>${question}</h2>
    `
    cards.forEach(card => {
      let cardDiv = document.createElement('div'); 
      cardDiv.className = "col-md-4 mb-5";
      let navDiv = document.createElement('div');
      navDiv.className = "col-xs-1 text-center";
      let name = titleCaseName(card.name);
      navDiv.innerHTML = `
      <button class ="btn btn-primary minus-one" id="previous">Previous Draw</button>

      <button class ="btn btn-primary plus-one" id="next">Next Draw</button>
      `
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
      rowDiv.appendChild(cardDiv);
      rowDiv.appendChild(navDiv);
    });
  }
 
  static getAllDraws() {
    event.preventDefault();
    clearPage();
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
        <button class="btn delete" data-id="${draw.id}">Delete?</button>`;
        ul.appendChild(li);
        let deleteBtn = document.querySelectorAll('.delete');
        let list = document.querySelectorAll(".list");

        deleteBtn.forEach(button => {
          button.addEventListener("click", () => {
            let remove = new Draw(draw);
            remove.deleteDraw();
          })
        });

        list.forEach(item => {
          item.addEventListener("click", () => {
            let find = new Draw(draw);
            find.getDraw();
          })
        });
      })
    }) 
    rowDiv.appendChild(ul);
    let destroyAll = document.getElementById('destroy-all');
    destroyAll.addEventListener("click", Draw.deleteDraws)

  }

  getDraw() {
    clearPage();
    console.log("get draw event");
    event.preventDefault();
    let draw = event.target;
    let id = draw.id;

    fetch(`${BASE_URL}/draws/${id}`)
    .then(resp => resp.json())
    .then(drawInfo => {
      let display = new Draw(drawInfo);
      display.renderDraw();
    }) 
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

  deleteDraw() {
    event.preventDefault();
    console.log("delete one event");
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

}