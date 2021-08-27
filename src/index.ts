// const canvasWidth = 375;
// const canvasHeight = window.innerHeight;
const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

canvas.width = 375;
canvas.height = 600;
canvas.style.backgroundColor = "#181820";
canvas.style.border = "1px solid #464646";

const context = canvas.getContext("2d");

const image = new Image();

image.src = "../sprites/banana.png";

context.beginPath();
context.drawImage(image, 375/2, 300);
context.fill();