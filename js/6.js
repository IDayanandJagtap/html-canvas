// Create multiple rectangle collision detection
// Collision Detection (rectangle) 
// This doesn't work as expected ... only some of the boxes change color after they collide 

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
canvas.style.border = '1px solid black'

const initCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

initCanvas();
window.addEventListener("resize", initCanvas)

// Utility function
const randomNumberInRange = (min, max) => {
    return Math.floor((Math.random() * max) + min);
}

const colors = ["#042940", "#005C53", "#9FC131", "#DBF227", "#D6D58E"];
const randomColor = () => {
    let i = randomNumberInRange(0, colors.length);
    return colors[i];
}


// Box class 
class Box {
    constructor(x, y, width, height, color = 'red') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillColor = color;
        this.color = color;
        this.dx = 0.5;
        this.dy = 0.5;
    }

    draw() {
        // ctx.beginPath();
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    isCollision(boxArray, options) {
        for (const box of boxArray) {
            if (box == this)
                continue;
            if (box.x + box.width >= this.x && box.x <= this.x + this.width &&
                box.y + box.height >= this.y && box.y <= this.y + this.height
            ) {
                // Do whatever you want 
                this.fillColor = options.color
                box.fillColor = options.color
            }
            else {
                this.fillColor = this.color;
                box.fillColor = this.color;
            }
        }
    }

    move() {
        if (this.x <= 0 || this.x + this.width >= canvas.width)
            this.dx = -this.dx;
        if (this.y <= 0 || this.y + this.height >= canvas.height)
            this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();

    }
}


let boxArray = [];
const createBoxes = () => {
    boxArray = [];
    for (let i = 0; i < 10; i++) {
        let boxWidth = randomNumberInRange(20, 60)
        let boxHeight = randomNumberInRange(20, 60)
        let x = randomNumberInRange(boxWidth, canvas.width - boxWidth * 2);
        let y = randomNumberInRange(boxHeight, canvas.height - boxHeight * 2);

        const box = new Box(x, y, boxWidth, boxHeight, randomColor());
        boxArray.push(box)
    }
}
createBoxes();

console.log(boxArray)


const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const box of boxArray) {
        box.move();
        box.isCollision(boxArray, { color: "red" })
    }

}

animate();

