// Body element
const body = document.querySelector("body")

// Starting Grid Size
let userInput = 16

// Grid Size Button element
const button = document.createElement("button")
body.appendChild(button)
button.setAttribute("class", "btn")
button.textContent = "Grid Size"

// Grid Container
let container
const createContainer = function (){
    container = document.createElement("div")
    body.appendChild(container)
    container.style.cssText = `
    width: 400px;
    height: 400px;
    `
}
createContainer()

// Create a row with userInput amount of square divs inside
const createRowOfSquares = function(){
    const row = document.createElement("div")
    container.appendChild(row)
    row.setAttribute("class", "row")
    // Create squares inside of row
    const createSquare = function (){
        const square = document.createElement("div")
        row.appendChild(square)
        square.setAttribute("class", "square")
        square.style.width = `${400 / userInput}px`
        square.style.height = `${400 / userInput}px`
        square.addEventListener("mouseover", () => {square.style.backgroundColor = "white"})
    }
    for(let i = 0; i < userInput; i++){
        createSquare()
    }
}

// Create grid based off of userInput
const createGrid = function (userInput){
    for(let i = 0; i < userInput; i++){
        createRowOfSquares()
    }
}

// Button to change grid size
button.addEventListener("click", () => {
    container.remove()
    const getUserInput = () => userInput = prompt("Pick a number from 1-100")
    getUserInput()
    while(userInput > 100){getUserInput()}
    createContainer()
    createGrid(userInput)
})

// Creates starting grid size of 16 x 16
createGrid(userInput)