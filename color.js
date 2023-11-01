"use strict";


const refreshbtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 15;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container

    for(let i = 0; i < maxPaletteBoxes; i++){

         // generating a random hex color code

        let randomHex = Math.floor(Math.random() * 16777215).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        // creating a element which is tag "li"

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML=`<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
        
        // copying the color code to clipboard
        color.addEventListener("click", () => copyColor(color,randomHex));
        container.appendChild(color);
    }
}

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    //Copying color's value and changing text about seconds.
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = "Copied!";
        setTimeout(() => colorElement.innerText = hexVal, 500);
    }).catch(()=> alert("Failed to copy the color!"))
}


generatePalette();

refreshbtn.addEventListener("click", generatePalette);