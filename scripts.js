const applyButton = document.querySelector(".buttonApply");
const resolutionField = document.querySelector(".resolutionInput")
const eraseButton = document.querySelector(".buttonErase");
const bwButton = document.querySelector(".buttonBW");
const rainbowButton = document.querySelector(".buttonRainbow");
const gradientButton = document.querySelector(".buttonGradient");
const boardSpace = document.querySelector(".boardSpace");
let colorChoice = "black";
applyButton.addEventListener('click', () => {
    let resolutionSelection = resolutionField.value;
    if (resolutionSelection > 100) {
        resolutionSelection = 100;
    }
    drawGrid(resolutionSelection, colorChoice);
})

function drawGrid(resolution, colorChoice) {
    boardSpace.innerHTML = ""
    for (i = 0; i<resolution; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        boardSpace.appendChild(row);
        for (j = 0; j<resolution;j++) {
            let cell = document.createElement('div');
            cell.className ='cell';
            row.appendChild(cell);
            if (colorChoice === "rainbow") {
                colorChoice = '#'+(Math.random()*0xFFFFFF << 0).toString(16).padStart(6,'0');
            }
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = colorChoice;
            });
        }
    }
}

drawGrid(1, "black");


eraseButton.addEventListener('click', () => {
    drawGrid(resolutionField.value, 'black');
});

bwButton.addEventListener('click', () => {
    drawGrid(resolutionField.value, 'black');
});

rainbowButton.addEventListener('click', () => {
    drawGrid(resolutionField.value, 'rainbow');
})


