function createGrid(rows, columns){
    const body = document.querySelector('#body');
    const grid = document.createElement('div');
    body.appendChild(grid);
    grid.id = "grid";
    console.log("Create grid container");
    gridSelector = document.querySelector('#grid');
    for (let i = 0; i < rows; i++){
        let newDiv = document.createElement('div');
        gridSelector.appendChild(newDiv);
        newDiv.className = "rows";
        newDiv.id = "r"+i;
        console.log("Created a div with ID " + newDiv.id);
        for (let j = 0; j < columns; j++){
            let newCol = document.createElement('div');
            newDiv.appendChild(newCol);
            newCol.className = "gridCell";
            newCol.id = "c"+j;
        }
    }
}

createGrid(4,4);