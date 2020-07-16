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



// let id = this.card.id
// switch (true) {
//   case (id <= 22):
//     console.log('major arcana')
//     break;
//   case (id <= 36):
//     console.log('swords'):
//     break;
//   case (id <= 50):
//     console.log('cups')
//     break;
//   case (id <= 64):
//     console.log('wands')
//     break;
//   case (id <= 78):
//     console.log('pentacles')
//   break;
// }