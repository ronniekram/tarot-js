const BASE_URL = "http://localhost:3000"
const rowDiv = document.getElementById("main-box");
const navLinks = document.querySelector(".navbar-collapse")
const form = document.querySelector(".draw_cards")

document.addEventListener("DOMContentLoaded", () => {
  navLinks.addEventListener("click", navigateTarot);
  form.addEventListener("submit", createDraw);
});

function navigateTarot() {
  event.preventDefault();
  if (event.target.id === "index") {
    console.log("home link clicked")
    rowDiv.innerHTML = ""
  } else if (event.target.id === "about") {
    renderAbout();
  } else if (event.target.id === "cards") {
    fetchCards();
  } else if (event.target.id === "draws-link") {
    console.log("Previous Draw Link  clicked");
  }
}

function renderAbout() {
  console.log("about button clicked");
  rowDiv.innerHTML = `
  <br> <br>
  <h3>What is Tarot?</h3>
    <p> The origins of Tarot is unknown, but there are documented references to use of cards back to fourteenth century Europe. Tarot, in the form we know today, has been used as an oracle since the beginning of the 17th century. <br>
    It is often assumed that Tarot is fortune telling, a hoax or performed by psychics. However, Tarot represents a map of our own consciousness. The cards in a spread are meant to provide guidance and insight about your innermost self. A Tarot reading can provide an awareness of things you already know or feel deep in your subconscious. 
    </p>

  <h3>The Meaning of Tarot</h3>
    <p>
    There are 22 cards of the Major Arcana, which divulge greater secrets, and 56 cards of the Minor Arcana, which divulge lesser secrets and are further divided into four suits. The suits of the Minor Arcana include Wands, Swords, Cups, and Pentacles. The fourteen cards in each suit are numbered Ace through Ten, plus the Court Cards: Page (Princess), Knight (Prince), Queen, and King. <br>
    The Minor Arcana of the Tarot symbolize daily aspects of life, giving insight into our challenges, talents, opportunities, and experience of ups and downs. Each suit represents an element: Wands are Fire, Swords are Air, Cups are Water, and Pentacles are Earth. The suits can reflect attitude and temperament, such as a fiery person or someone who is “up in the air” or “down to earth.” Determining a card’s significance is dependent upon the question, the reader, the person receiving the reading, and the placement of other cards in the spread. <br>
    The Major Arcana are numbered 0 through 21, starting with The Fool, and ending with The World. These cards align with the milestones of life’s story. In this sense, the cards of the Major Arcana represent the 22 inevitable phases or passages of every journey, which we’ll all encounter during our lives (not necessarily in this order). It’s also possible for these phases to repeat themselves, and recur multiple times throughout one’s life, creating a cyclical nature in which there is no true beginning or end.
    </p>

  <h3>Types of Spreads</h3> <br>
    <p>All Tarot spreads are meant to answer a question asked by the receiver of the reading.</p> <br>
    <p> <strong>One Card:</strong> A single card spread provides clear and concise reading. It's meant to answer a simple question or to give the person receiving the reading an idea of what direction their day might take. </p>
    <p> <strong>Three Cards:</strong> A three card spread can have many interpretations depending on the question asked. Among other things, the cards can represent: <br>
      <ul> 
        <li>Past, Present and Future</li>
        <li>Mind, Body and Spirit</li>
        <li>Subconscious, Conscious and Super Conscious</li>
        <li>You, Your Path and Your Potential </li>
        <li>You, Relationship and Your Partner</li>
        <li>Situation, Action and Outcome</li>
        <li>Idea, Process, Aspiration</li>
      </ul>
    </p>
    <p> <strong>Five Cards:</strong> A five card spread is generally used to determine a course of action. Card 4 will often reveal a subconscious impulse - perhaps a blockage which is stopping you from achieving your desired result. Card 5 shows the possible results from taking a given course of action.
      <ul> 
        <li><strong>Card One:</strong> The present or general theme of the reading</li>
        <li><strong>Card Two:</strong> Past influences still having effect</li>
        <li><strong>Card Three:</strong> The future</li>
        <li><strong>Card Four:</strong> The reason behind the question (this will probably shed light on 2)</li>
        <li><strong>Card Five:</strong> The potential within the situation.</li>
      </ul>
    </p> <br>

  <h3>Upright and Reversed Cards</h3>
    <p>
      Tarot card illustrations are generally a single image in an upright position, unlike common playing cards that display a dual image facing both right-side-up and upside-down. When Tarot cards are collected and shuffled or moved about, they can show up upside-down in a reading. The reversed Tarot card can be interpreted in various ways. Many believe this simply means the significance of the card is present in your life, but its powers are weakened or blocked by something. Others believe it means you’re unwilling to work with the energy the card signifies. And yet others interpret a reversed Tarot card to mean that the opposite or inverse of that card’s significance is present.
    </p>
  `
}