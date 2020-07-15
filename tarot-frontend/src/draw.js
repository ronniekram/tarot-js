
class Draw{
  constructor(question, card_ids) {
    this.question = question
    this.card_ids = card_ids
  }

  static createDraw() {
    event.preventDefault();
    let formQ = document.getElementById("draw-question");
    let questionDiv = document.createElement('div');
    let cardDiv = document.createElement('div');
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
      .then(cards => console.log(cards))
  }

  
  static getDraws(draws) {

  }

  static getDraw(draw) {

  }

  static renderCard(card) {

  }


  static deleteDraws(draws) {

  }

  static deleteDraw(draw) {

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