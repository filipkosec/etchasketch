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
    if (resolution < 2) {resolution = 2};
    boardSpace.innerHTML = ""
    let x = 0
    for (i = 0; i<resolution; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        boardSpace.appendChild(row);
        for (j = 0; j<resolution;j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(`cell${x}`);
            x++;
            row.appendChild(cell);
            };
                       
        };
        addHoverActions(colorChoice,x);
    }

function addHoverActions(colorChoice,x) {
    let cellArray = document.querySelectorAll(`.cell`);
    for (i = 0; i < cellArray.length; i++) {
        cellArray[i] = cellArray[i][0];
    }
    cellArray.forEach(element => {
        element.addEventListener('mouseover', () => {
            if (colorChoice === 'rainbow') {
                let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
                element.style.backgroundColor = randomColor;
            } else if (colorChoice === 'gradient') {
                let curColor = element.style.backgroundColor;
                element.style.backgroundColor = gradientAdder(curColor);
            } else {
            element.style.backgroundColor = colorChoice;
            }
        });
    })
   
};

function gradientAdder (currentColor) {
    if (currentColor = "#FFFFFF") {
        return ("#c0c0c0");
    } else if (currentColor = "#c0c0c0") {
        return("#808080");
    } else if (currentColor = "#808080") {
        return("#404040");
    } else if (currentColor = "#404040") {
        return("#000000")
    } else {
        return ("#000000")
    };
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

gradientButton.addEventListener('click', () => {
    drawGrid(resolutionField.value, 'gradient');
})