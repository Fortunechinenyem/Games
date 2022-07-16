// document.getElementById("count-el").innerText = 5

// let count = 0

// function increment() {
//     console.log("The button was clicked")

// }


// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// function myLogger() {
//     console.log(42)
// }
// myLogger()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function loglapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// loglapTime()

// let lapsCompleted = 0

// function incrementlap() {
//     lapsCompleted = lapsCompleted = 1
// }

// incrementlap()
// incrementlap()
// incrementlap()
// console.log(lapsCompleted)
// let countEl = document.getElementById("count-el")
// let count = 0
// console.log(countEl)

// function increment() {
//     count += 1
//     countEl.innerText = count
// }
// function save() {
//     console.log(count)
// }

// let name = "Fortune Chinenyem"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log (myGreeting)
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// console.log(saveEl)

//  function increment() {
//          count += 1
//          countEl.textContent = count
//  }
//  function save() {
//      let countStr = count + " - "
//      saveEl.textContent += countStr
//      countEl.textContent = 0
//      count = 0

//  }

// let name = "Fortune Chinenyem"
// let greeting = "Welcome back"
//  welcomeEl.innerText = name + greeting

// welcomeEl.innerText += "👋"

// let firstName = "Fortune"
// let lastName = "Chinenyem"
// let fullName = firstName + "" + lastName

// console.log(fullName)


// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"

//Calculator challenge

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
// let sumEl = document.getElementById("sum-el")
//  function add() {
//      let result = num1 + num2
//      sumEl.textContent = "Sum: " + result
//  }
//  function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }
// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }
// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }
// Black Jack Card

// let firstCard = 6
// let secondCard = 9
// let sum = firstCard + secondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card?  🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
// } else if (sum > 21) {
//     console.log("You're out of the game! 😭")
// }

// checking if a person is old enough to enter the night club

// let age = 22

// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true

// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackjack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false
// }

// CASH OUT!

// boolean test
// console.log(4 === 3)  //false 
// console.log(5 > 2)    //true 
// console.log(12 > 12)  //false
// console.log(3 < 0)    //false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) //true
// console.log(3 <= 2)   //false


// 1. Declare a variable called message and assign its value to an empty string
// let message = ""

// 2. Reassign the message variable to the string we're logging out


// 3. Log it out!
// console.log(message)

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// let player = {
//      name:  "Fortune",
//      chips:  200
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

// console.log(cards)

// function getRandomCard() {
//     let randomNumer = Math.floor( Math.random()*13 ) + 1
//     if (randomNumer > 10) {
//         return 10
//     } else if (randomNumer === 1) {
//         return 11
//     } else {
//         return randomNumer
//     }
// }

// function startGame() {
//     renderGame()
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     let cards = [firstCard, secondCard]
//     let sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = " Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     let card = 6
//     sum += card
//     cards.push(card)
//    console.log(cards)
//     renderGame()

//  }

// let randomNumber = Math.random()

// console.log()

// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     return randomNumber
// }

// console.log( rollDice() )


// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }
// let hands = ["rock", "paper", "scissor"]

// // Create a function that returns a random item from the array

// function getHand() {
//     let randomIndex = Math.floor( Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log( getHand() )

const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    const randomIndexOne = Math.floor(Math.random() * fighters.length)
    const randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = `${fighters[randomIndexOne]} vs ${fighters[randomIndexTwo]}`
})