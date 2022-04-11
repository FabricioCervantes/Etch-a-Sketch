const container = document.querySelector(".container")
const btnerase = document.querySelector(".erase")
const btnred = document.querySelector(".red")
const btnrainbow = document.querySelector(".rainbow")
const btnpicker = document.querySelector("#colorPicker")
const btnsize = document.querySelector(".size");
const DEFAULT_COLOR = 'rainbow'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE




let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


grid(10)
btnerase.onclick = () => clear();
btnsize.onclick = () => setCurrentSize();
btnred.onclick = () => setCurrentColor('red')
btnrainbow.onclick = () => setCurrentColor('rainbow')
btnpicker.onchange = (e) => setCurrentColor(e.target.value)

function grid(size) {
    square_size = 500 / size;
    for (let i = 0; i < size * size; i++) {
        console.log(square_size);
        const square = document.createElement("div");
        square.style.height = square_size + "px";
        square.style.width = square_size + "px";
        square.classList = "gridElements"
        square.addEventListener("mouseover", colorpicker)
        square.addEventListener("mousedown", colorpicker)
        container.append(square);
    }
}

function setCurrentColor(newColor) {
    currentColor = newColor
    console.log(newColor)
}

function setCurrentSize() {
    const size = window.prompt("Elige el tamaño.");
    console.log(size);
    restore();
    grid(size);
}

function restore() {
    const gridPixels = container.querySelectorAll('.gridElements');
    gridPixels.forEach(gridPixel => gridPixel.remove());
}


function colorpicker(e) {

    if (e.type === 'mouseover' && !mouseDown) return
    if (currentColor === 'rainbow') {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        e.target.style.backgroundColor = color;
    } else {
        e.target.style.backgroundColor = currentColor;
    }


}

function clear() {
    const gridPixels = container.querySelectorAll('.gridElements');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#000');
}