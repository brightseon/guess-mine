import { getSocket } from "./sockets";

const canvas = document.getElementById('jsCanvas');
const controls = document.getElementById('jsControls');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const mode = document.getElementById('jsMode');

const INITIAL_COLOR = '#2C2C2C';
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const stopPating = () => {
    painting = false;
};

const startPainting = () => {
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

const onMouseMove = event => {
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

const handleColorClick = event => {
    const color = event.target.style.backgroundColor;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
};

const handleModeClick = () => {
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

const handleCanvasClick = () => {
    if(filling) {
        fill();
        getSocket().emit(window.events.fill, { color : ctx.fillStyle });
    }
};

const handleCM = event => {
    event.preventDefault();
};


Array.from(colors).forEach(color => 
    color.addEventListener('click', handleColorClick)
    );
    
if(mode) {
    mode.addEventListener('click', handleModeClick);
}

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y, color }) => strokePath(x, y, color);
export const handleFilled = ({ color }) => fill(color);

export const disableCanvas = () => {
    canvas.removeEventListener('mousemove', onMouseMove);
    canvas.removeEventListener('mousedown', startPainting);
    canvas.removeEventListener('mouseup', stopPating);
    canvas.removeEventListener('mouseleave', stopPating);
    canvas.removeEventListener('click', handleCanvasClick);
};

export const hideControls = () => controls.style.opacity = 0;

export const showControls = () => controls.style.opacity = 1;

export const enableCanvas = () => {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPating);
    canvas.addEventListener('mouseleave', stopPating);
    canvas.addEventListener('click', handleCanvasClick);
};

if(canvas) {
    enableCanvas();
    canvas.addEventListener('contextmenu', handleCM);
}