const BASE_URL = "http://localhost:3000"
const navBar = document.querySelector("nav")
const rowDiv = document.querySelector(".row")

document.addEventListener("DOMContentLoaded", () => {
  fetchCards();
  // event listener for nav bar
  // event listener for one card draw
  // event listener for three card draw
  // event listener for five card draw
})

function navigateTarot() {
  // use event target for button ids
  // use event targets for nav links
}

function fetchCards() {
  fetch(`${BASE_URL}/cards`)
  .then(resp => resp.json())
  .then(cards => this.renderCards(cards))
}

function renderCards(cards) {
  cards.forEach(card => {
    let id = card.id
    let columnDiv = document.createElement('div');
    columnDiv.className = "col-md-4 mb-5"
    columnDiv.id = id

    columnDiv.innerHTML += `
      <div class="card h-100">
      <div class="card-body" id="${id}">
        <h2 class="card-title" id="${id}"> ${card.name}</h2>
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
  })
}