const body = document.querySelector("body")

// Create a line div with 16 square divs inside
const createLine = function(){
    const line = document.createElement("div")
    body.appendChild(line)
    line.setAttribute("class", "line")

    const createSquare = function (){
        const square = document.createElement("div")
        line.appendChild(square)
        square.setAttribute("class", "square")
        square.addEventListener("mouseover", () => {square.style.backgroundColor = "darkblue"})
    }
    for(let i = 0; i < 16; i++){
        createSquare()
    }
}

// Create 16 lines with squares
for(let i = 0; i < 16; i++){
    createLine()
}