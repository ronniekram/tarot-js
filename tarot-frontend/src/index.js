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
  .then(cards => renderCards(cards))
}

function renderAbout() {
  rowDiv.innerHTML += `
  <h3>What is Tarot?</h3>
  <p> The origins of Tarot is unknown, but there are documented references to use of cards back to fourteenth century Europe. Tarot, in the form we know today, has been used as an oracle since the beginning of the 17th century. <br>
  It is often assumed that Tarot is fortune telling, a hoax or performed by psychics. However, Tarot represents a map of our own consciousness. The cards in a spread are meant to provide guidance and insight about your innermost self. A Tarot reading can provide an awareness of things you already know or feel deep in your subconscious. </p>

  <h3>The Meaning of Tarot</h3>
  <p></p>

  <h3>Types of Spreads</h3>
  <p></p>

  <h3>Upright and Reversed Cards</h3>
  <p></p>
  `
}

function renderCards(cards) {
  cards.forEach(card => {
    let id = card.id
    let name = titleCaseName(card.name);
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
  })
}

function titleCaseName(name) {
  let nameArray = name.split("-");
  for (let i = 0; i < nameArray.length; i ++) {
    nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1).toLowerCase();
  }
  return nameArray.join(" ");
}