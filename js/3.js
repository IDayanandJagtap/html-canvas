// Mouse move animation

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
// canvas.setAttribute('width', canvasWidth)
// canvas.setAttribute('height', canvasHeight)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.border = '1px solid black';


class MouseMoveCircleAnimation {
    constructor(x = 0, y = 0, minRadius = 2, maxRadius = 40, fillStyle) {
        this.x = x;
        this.y = y;
        this.radius = (Math.random() * minRadius);
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
        this.dx = (Math.random() * 5) + 1;
        this.dy = (Math.random() * 5) + 1;
        this.fillStyle = fillStyle;
        this.mouse = {
            x: undefined,
            y: undefined
        }
    }

    draw() {
        ctx.fillStyle = this.fillStyle;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill();
    }

    interact() {
        canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;

            if (Math.abs(this.mouse.x - this.x) < 100 && Math.abs(this.mouse.y - this.y) < 100) {
                if (this.radius < this.maxRadius)
                    this.radius += 1;
            }
            else if (this.radius > this.minRadius) {
                this.radius -= 1
            }
        })
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

        this.interact();

        this.draw();
    }
}

const circleArray = []
const maxRadius = 100

for (let i = 0; i < 1000; i++) {
    let x = Math.random() * canvasWidth;
    let y = Math.random() * canvasHeight;
    let minRadius = (Math.random() * 20) + 1
    let fillStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

    let c = new MouseMoveCircleAnimation(x, y, minRadius, maxRadius, fillStyle);
    circleArray.push(c)
}



function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].move()
    }


}

animate()
