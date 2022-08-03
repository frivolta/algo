const container = document.querySelector('.container')

const grid = new Array(6).fill(null).map(()=>new Array(5).fill(null))

function createGridComponent(){
    const fragment = document.createDocumentFragment()
    for(let r=0; r<grid.length; r++){
        const line = document.createElement('div')
        line.classList.add("line")
        for(let c = 0; c<grid[0].length; c++){
            const box = document.createElement('div')
            box.classList.add("square")
            box.textContent = ""
            line.appendChild(box)
        }
        fragment.appendChild(line)
    }
    container.appendChild(fragment)
}


let word="worse"
let currentGuess = ""
let currentLine = 0;
let currentIndex = 0;

function onKeyPress(e){
    e.preventDefault()
    const key = e.key.toLowerCase()
    if(key>="a" && key<="z" && currentGuess.length<word.length){
        currentGuess+=key
        grid[currentLine][currentIndex] = key
        currentIndex+=1
        console.log(grid)
    }
    renderGuesses()
}

function renderGuesses(){
    const boxes = document.querySelectorAll('.square')
    for(let r=0; r<=currentLine; r++){
        for(let c=0;c<=currentIndex;c++){
            boxes[r*c+c].textContent = grid[r][c]
        }
    }

}

function startGame(){
    window.addEventListener('keypress', onKeyPress)
}




createGridComponent()
startGame()