// Bouncing balls with gravity

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// canvas.style.border = '1px solid black'

const initCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


// Canvas size 
initCanvas();
window.addEventListener("resize", initCanvas)


// Random number in range 
const randomNumberInRange = (min, max) => {
    return Math.floor((Math.random() * max) + min);
}

// Random Colors
const colors = ["#042940", "#005C53", "#9FC131", "#DBF227", "#D6D58E"];
const randomColor = () => {
    let i = randomNumberInRange(0, colors.length);
    return colors[i];
}


// Class 
class Ball {
    constructor(x, y, dx, dy, radius, fillColor) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.fillColor = fillColor;
        this.gravity = 0.9;
        this.friction = 0.9;
    }
    dy = this.dy

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke();
    }

    move() {

        if (this.y + this.radius + this.dy >= window.innerHeight) {
            // Reduce the accelerating speed (which is 1) by some factor so it loses it's linearity
            this.dy = -this.dy * this.friction;
        }
        else {
            this.dy += this.gravity;
        }

        if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth)
            this.dx = -this.dx

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}



// Create balls 
let ballsArray = [];
const createBalls = () => {
    ballsArray = []
    for (let i = 0; i < 800; i++) {
        let radius = randomNumberInRange(12, 20);
        let x = randomNumberInRange(radius, window.innerWidth - 2 * radius);
        let y = randomNumberInRange(radius, window.innerHeight / 2 - radius);
        let dx = randomNumberInRange(-2, 2)
        let dy = randomNumberInRange(-2, 2)

        const ball = new Ball(x, y, dx, dy, radius, randomColor())
        ballsArray.push(ball);
    }
}
createBalls();


// Bounce the ball on click
canvas.addEventListener("click", createBalls)



// Run the code 
const bounceBalls = () => {
    requestAnimationFrame(bounceBalls);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const ball of ballsArray) {
        ball.move();
    }


}
bounceBalls();