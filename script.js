const body = document.querySelector("body")

const createLine = function(){
    const line = document.createElement("div")
    body.appendChild(line)
    line.style.cssText = "padding: 0; display: flex; justify-content: center;"
    const createSquare = function (){
        const square = document.createElement("div")
        line.appendChild(square)
        square.style.cssText = "border: 1px solid red; padding: 14px"
    }
    for(let i = 0; i < 16; i++){
        createSquare()
    }
}

for(let i = 0; i < 16; i++){
    createLine()
}

