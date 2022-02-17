let container = document.getElementById('container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

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

makeRows(16);
makeColumns(16);

let cellUnit = document.querySelectorAll('.cell').forEach(item => item.addEventListener('mouseover', event => { item.style.backgroundColor = 'blue' }));

