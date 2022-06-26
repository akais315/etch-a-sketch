function createGrid(rows){
    const grid = document.createElement('div');
    body.appendChild(grid);
    grid.id = "grid";
    gridSelector = document.querySelector('#grid');
    for (let i = 0; i < rows; i++){
        let newDiv = document.createElement('div');
        gridSelector.appendChild(newDiv);
        newDiv.className = "rows";
        newDiv.id = "r"+i;
        for (let j = 0; j < rows; j++){
            let newCol = document.createElement('div');
            newDiv.appendChild(newCol);
            newCol.className = "gridCell";
            newCol.id = "c"+j;
        }
    }
    addListener();
}

function addListener(){
    const cellGrid = Array.from(document.querySelectorAll('.gridCell'));
    cellGrid.forEach(cell => {cell.addEventListener('mouseenter', hover);});
}

function hover(e){
    e.target.classList.add("hovered");
}

function deleteGrid(){
    const grid = document.getElementById("grid");
    grid.remove();
}

function resetGrid(){
    let rows = 0;
    while(rows>100 || rows <= 0){
        rows = window.prompt("Input grid size(between 1 and 100) :", 16);
    }
    deleteGrid();
    createGrid(rows);
}

const body = document.querySelector('#body');
const button = document.createElement('button');
button.innerHTML = "Reset grid";
body.appendChild(button);

button.addEventListener('click', resetGrid);

createGrid(16);

