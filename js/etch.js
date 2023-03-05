    // store the container element.
    const containerDiv = document.getElementById("container");
    
// sets up a 16*16 grid.
for (i = 0; i<255; i++){


    const gridElement = document.createElement('div');
    gridElement.setAttribute("class", "grid-item");
    gridElement.setAttribute("id", `sq${i}`);
    gridElement.textContent = `number:${i}`;
    containerDiv.appendChild(gridElement);
    
}

