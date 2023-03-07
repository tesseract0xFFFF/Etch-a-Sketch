    // store the container element.
    const containerDiv = document.getElementById("container");
    
// creates 16*16 elements
for (i = 0; i<256; i++){


    const gridElement = document.createElement('div');
    gridElement.setAttribute("class", "grid-item");
    gridElement.setAttribute("id", `sq${i}`);
    containerDiv.appendChild(gridElement);
    
}

