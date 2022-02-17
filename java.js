let container = document.getElementById('container');
let panel = document.getElementById('panel');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



function makeGrid(num) {

    makeRows(num);
    makeColumns(num)
}

function makeRows(num) {

    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';

    }

}


function makeColumns(num) {

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < num; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        }
    }

}

function clear() {
    allCells.forEach(item => item.style.backgroundColor = 'white');

}

makeGrid(16);
let allCells = document.querySelectorAll('.cell');
let cellUnit = document.querySelectorAll('.cell').forEach(item => item.addEventListener('mouseover', event => { item.style.backgroundColor = 'blue' }));

clearButton = document.createElement('button');
clearButton.textContent = "Clear";
panel.appendChild(clearButton);
clearButton.addEventListener('click', clear);
