constructor(name, quantity, visit_id){
  this.name = name
  this.quantity = quantity
  this.visit_id = visit_id
  }

function deleteItem(){        
  event.preventDefault();
  fetch(BASE_URL+`/items/${this.dataset.deleteItemId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      }
  })
      .then(this.parentElement.remove())
}