import { getSocket } from "./sockets";

const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const mode = document.getElementById('jsMode');

const INITIAL_COLOR = '#2C2C2C';
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillStyle(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPating() {
    painting = false;
};

function startPainting() {
    painting = true;
};

const beginPath = (x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
};

const strokePath = (x, y, color = null) => {
    let currentColor = ctx.strokeStyle;

    if(color) {
        ctx.strokeStyle = color;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.strokeStyle = currentColor;
};

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        beginPath(x, y);
        getSocket().emit(window.events.beginPath, { x, y });
    } else {
        strokePath(x, y);
        getSocket().emit(window.events.strokePath, { x, y, color : ctx.strokeStyle });
    }
};

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
};

function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerText = 'Fill';
    } else {
        filling = true;
        mode.innerText = 'Paint';
    }
};

const fill = (color = null) => {
    let currentColor = ctx.fillStyle;
    
    if(color) {
        ctx.fillStyle = color;
    }

    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fillStyle = currentColor;
};

function handleCanvasClick() {
    if(filling) {
        fill();
        getSocket().emit(window.events.fill, { color : ctx.fillStyle });
    }
};

function handleCM(event) {
    event.preventDefault();
};

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPating);
    canvas.addEventListener('mouseleave', stopPating);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}

Array.from(colors).forEach(color => 
    color.addEventListener('click', handleColorClick)
);

if(mode) {
    mode.addEventListener('click', handleModeClick);
}

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y, color }) => strokePath(x, y, color);
export const handleFilled = ({ color }) => fill(color);