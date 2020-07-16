class Card{
  constructor(name, summary, full_meaning, image, upright, reversed) {
    this.name = name
    this.summary = summary
    this.full_meaning = full_meaning
    this.image = image
    this.upright = upright
    this.reversed = reversed
  }

    fetchCards() {
      console.log("cards index button clicks");
      fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(cards => this.listCards(cards))
      console.log("cards fetched");
  }

    listCards(cards) {
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
              item.addEventListener("click", showCard(card))
            });
          })
        }) 
    }

    showCard(card) {

    }

  // static renderCards(cards) {
  //   rowDiv.innerHTML = "";
  //   cards.forEach(card => {
  //     this.renderCard(card);
  //   })
  // }

  static renderCard(card) {
    let id = card.id
    let name = Card.titleCaseName(card.name);
    let columnDiv = document.createElement('div');
    columnDiv.className = "col-md-4 mb-5"
    columnDiv.id = id

    columnDiv.innerHTML += `
      <div class="card h-100">
      <div class="card-body" id="${id}">
        <h2 class="card-title" id="${id}"> ${name}</h2>
        <div class="card-img" id="${id}">
          <img src="${card.image}" class="card-img">
        </div>
        <p class="card-text" id="${id}">${card.full_meaning}</p>
      </div>
      <div class="card-footer" id="${id}">
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
  }
  
}