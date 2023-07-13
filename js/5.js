// Collision Detection (rectangle) 

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
canvas.style.border = '1px solid black'

const initCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

initCanvas();
window.addEventListener("resize", initCanvas)


// Box class 
class Box {
    constructor(x, y, width, height, color = 'red') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillColor = color;
    }

    draw() {
        // ctx.beginPath();
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    isCollision(x, y, width, height, options) {
        if (x + width >= this.x && x <= this.x + this.width &&
            y + height >= this.y && y <= this.y + this.height
        ) {
            // Do whatever you want 
            this.fillColor = 'yellow'
        }
        else {
            this.fillColor = options.color;
        }
    }
}

const boxWidth = 100;
const boxHeight = 100;

const box1 = new Box(window.innerWidth / 2 - boxWidth, window.innerHeight / 2 - boxHeight, boxWidth, boxHeight, 'red')

window.addEventListener("mousemove", (e) => {
    const x = e.x - (boxWidth / 2)
    const y = e.y - (boxHeight / 2)

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    const box2 = new Box(x, y, boxWidth, boxHeight, "black")
    box2.draw();
    box1.isCollision(x, y, boxWidth, boxHeight, { color: "red" })
})




const animate = () => {
    requestAnimationFrame(animate)

    box1.draw();


}

animate();