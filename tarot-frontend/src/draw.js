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

    questionDiv.innerHTML = `
      <h2>${question}</h2>
    `
    cards.forEach(card => {
      let name = titleCaseName(card.name);
      let cardDiv = document.createElement('div'); 
      cardDiv.className = "col-md-4 mb-5";
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
    });
  }
 
  static getAllDraws() {
    clearPage();
    let ul = document.createElement('ul');
    // const destroyAll = document.getElementById('destroy-all');
    ul.innerHTML = `
    <button class="btn btn-primary left" id="destroy-all">Delete All?</button> <br>
    `
    fetch(`${BASE_URL}/draws`)
    .then(resp => resp.json())
    .then(draws => {
      draws = draws.sort((a, b) => {
        if (a.question < b.question) {
          return -1;
        } else if (a.question > b.question) {
          return 1;
        } else {
          return 0;
        }
      })
      console.log(draws)
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
    const destroyAll = document.getElementById('destroy-all');
    destroyAll.addEventListener("click", Draw.deleteDraws)

  }

  getDraw() {
    clearPage();
    console.log("get draw event");
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