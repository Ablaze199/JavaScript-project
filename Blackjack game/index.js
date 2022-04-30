let player = {
    Name:  "Femi",
    Chips:  4000
}

let cards = []
let sum = 0
let hasblackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips


function getRandomCard() {
    
    let randomNumber =  Math.floor(Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    }   else if (randomNumber === 1) {
        return 11
    }   else {
        return randomNumber
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard ()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
   message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = " You ve got Blackjack"
        hasblackjack = true
    } else {
        message = "you are out of the game"
        isAlive = false
    }
  messageEl.textContent = message
}

function newcard() {
    if (isAlive === true && hasblackjack === false) {
      let card = getRandomCard()
        sum += card
    cards.push(card)
    renderGame()
}   
    }
   






