mouse_event = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;
size=50;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
color = document.getElementById("inputcolor").value;
width = document.getElementById("inputwidth").value;
size = document.getElementById("inputsize").value;
mouse_event = "mouseDown";

}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {

mouse_event = "mouseUp";

}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {

    mouse_event = "mouseLeave";

}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {

currentpositionofx = e.clientX - canvas.offsetLeft;
currentpositionofy = e.clientY - canvas.offsetTop;

if (mouse_event == "mouseDown") {

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(currentpositionofx, currentpositionofy, size, 0, 2*Math.PI);
ctx.stroke();

}

}

function clear_area() {

ctx.clearRect(0,0,canvas.width, canvas.height);

} 