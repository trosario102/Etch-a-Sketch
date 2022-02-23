let container = document.getElementById('container');
let userInput = document.getElementById('size');
let clearButton = document.getElementById('clear');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");




function makeGrid(num) {
    num = num || 16;

    makeRows(num);
    makeColumns(num)
}

function makeRows(num) {

    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.style.height = `${673 / num}px`;
        container.appendChild(row).className = 'gridRow';

    }

}

function makeColumns(num) {

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < num; j++) {
            let newCell = document.createElement('div');
            newCell.style.width = `${673 / num}px`;
            newCell.style.height = `${673 / num}px`;
            newCell.classList.add('cell')
            rows[j].appendChild(newCell);
        }
    }

}

function deleteGrid() {
    while (container.firstChild) {
        console.log(`container first child: ${container.firstChild}`)
        container.lastChild = null;
        container.removeChild(container.lastChild);
    }
}

function clear() {
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach(item => item.style.backgroundColor = 'white');

}

makeGrid();
activateFeatures();

function activateFeatures() {
    let allCells = document.querySelectorAll('.cell');
    let cellUnit = document.querySelectorAll('.cell').forEach(item => item.addEventListener('mouseover', event => { item.style.backgroundColor = 'black' }));
    clearButton.addEventListener('click', clear);

}


userInput.addEventListener('change', function () {
    deleteGrid();
    makeGrid(userInput.value);
    activateFeatures();

});