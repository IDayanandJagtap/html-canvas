// Animations using canvas 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

const canvasWidth = 2600;
const canvasHeight = 1200;
canvas.setAttribute('width', canvasWidth)
canvas.setAttribute('height', canvasHeight)
canvas.style.border = '1px solid black';


// If ctx.fill is used then only fillStyle works and if ctx.stroke method is used then only stokeStyle works


// Create a class 
class Circle {
    constructor(x = 0, y = 0, radius = 100, dx = 1, dy = 1, fillStyle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.fillStyle = fillStyle;
    }

    draw() {
        ctx.fillStyle = this.fillStyle;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill();
    }

    move() {
        if (this.x + this.radius >= canvasWidth || this.x - this.radius <= 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius >= canvasHeight || this.y - this.radius <= 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


const circleArray = []

for (let i = 0; i < 100; i++) {
    let x = Math.random() * canvasWidth;
    let y = Math.random() * canvasHeight;
    let dx = (Math.random() * 5) + 1;    // +1 because if the random number is 0 then the circle won't move in both directions
    let dy = (Math.random() * 5) + 1;
    let radius = 100;
    let fillStyle = `rgba(0, 0, ${Math.floor(Math.random() * 255)}, 0.5)`;

    let c = new Circle(x, y, radius, dx, dy, fillStyle);
    circleArray.push(c)
}


function animateCircle() {
    requestAnimationFrame(animateCircle);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].move()
    }


}

animateCircle()