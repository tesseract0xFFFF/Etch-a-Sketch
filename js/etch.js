    // store the container element.
    const containerDiv = document.getElementById("container");

    let columnNumber = +prompt("Enter the number of columns");
    let rowNumber = +prompt("Enter the number of rows");

    // sets css grid row and column properties.
    containerDiv.style.gridTemplateColumns = "repeat(" + columnNumber +", 1fr)";
    containerDiv.style.gridTemplateRows = "repeat(" + rowNumber +", 1fr)";



    // adds a reset button
    let btn = document.getElementById("resetButton");

    btn.addEventListener("click", () => {
        let cellList = document.querySelectorAll(".grid-item");
        cellList.forEach(gridItem => gridItem.style.backgroundColor = "#ccc");
    })




    
// creates columnNumber*rowNumber elements and adds event listeners to each element.
if (columnNumber < 100 && rowNumber < 100) {
    for (i = 0; i<columnNumber*rowNumber; i++){


        const gridElement = document.createElement('div');
        gridElement.setAttribute("class", "grid-item");
        gridElement.setAttribute("id", `sq${i}`);
        gridElement.addEventListener("mouseover", () => {
            gridElement.style.backgroundColor = "black";
        } )
        containerDiv.appendChild(gridElement);
    
    }
}
else {
    alert("Input must be smaller than 100!");
}


