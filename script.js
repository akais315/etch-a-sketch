function createGrid(rows, columns){
    const body = document.querySelector('#body');
    const grid = document.createElement('div');
    body.appendChild(grid);
    grid.id = "grid";
    gridSelector = document.querySelector('#grid');
    for (let i = 0; i < rows; i++){
        let newDiv = document.createElement('div');
        gridSelector.appendChild(newDiv);
        newDiv.className = "rows";
        newDiv.id = "r"+i;
        for (let j = 0; j < columns; j++){
            let newCol = document.createElement('div');
            newDiv.appendChild(newCol);
            newCol.className = "gridCell";
            newCol.id = "c"+j;
        }
    }
}

function hover(e){
    e.target.classList.add("hovered");
}

createGrid(16,16);

const cellGrid = Array.from(document.querySelectorAll('.gridCell'));
cellGrid.forEach(cell => {cell.addEventListener('mouseenter', hover);});    
