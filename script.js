const container = document.querySelector(".container")


//Para hacer que solo pinte cuando está presionado el mouse
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
grid()

//Inicia la 
function grid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.style.height = "31.25px";
        square.style.width = "31.25px";

        square.addEventListener("mouseover", colorpicker)
        square.addEventListener("mousedown", colorpicker)

        container.append(square);
    }
}


function colorpicker(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.backgroundColor = color;
}