const container = document.querySelector(".container")
const btnerase = document.querySelector(".erase")
const btnred = document.querySelector(".red")
const btnrainbow = document.querySelector(".rainbow")
const btnpicker = document.querySelector("#colorPicker")
const DEFAULT_COLOR = 'rainbow'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE


function setCurrentColor(newColor) {
    currentColor = newColor
    console.log(newColor)
}


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


grid()
btnerase.onclick = () => clear();
btnred.onclick = () => setCurrentColor('red')
btnrainbow.onclick = () => setCurrentColor('rainbow')
btnpicker.onchange = (e) => setCurrentColor(e.target.value)

function grid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.style.height = "31.25px";
        square.style.width = "31.25px";
        square.classList = "gridElements"
        square.addEventListener("mouseover", colorpicker)
        square.addEventListener("mousedown", colorpicker)
        container.append(square);
    }
}

function colorpicker(e) {

    if (e.type === 'mouseover' && !mouseDown) return
    if (currentColor === 'rainbow') {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        e.target.style.backgroundColor = color
    } else {
        e.target.style.backgroundColor = currentColor;
    }


}

function clear() {
    const gridPixels = container.querySelectorAll('.gridElements');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#000');

}