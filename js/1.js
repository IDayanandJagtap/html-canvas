const canvas = document.getElementById("canvas");
canvas.style.border = '1px solid black'

const ctx = canvas.getContext('2d')



// Rectangle
// context.fillRect(x, y, width, height)
ctx.fillStyle = "rgba(255, 0, 0, 0.2)"
ctx.fillRect(0, 0, 100, 100)


// Line 
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(700, 100);
ctx.stroke()

// Shape using line
ctx.beginPath()
ctx.moveTo(200, 200);
ctx.lineTo(200, 500);
ctx.lineTo(600, 500);
ctx.lineTo(600, 300);
ctx.lineTo(450, 200);
ctx.lineTo(200, 200);

ctx.lineWidth = 5;
ctx.strokeStyle = "rgba(140, 200, 200)";

ctx.stroke();



// Arc (circle)
ctx.beginPath()
ctx.strokeStyle = 'rgba(100, 140, 50)'
ctx.arc(750, 400, 100, 0, Math.PI * 2, false)
ctx.stroke();


// SemiCircle
ctx.beginPath();
ctx.arc(200, 550, 100, 0, Math.PI, false)
ctx.stroke();

// wave 
ctx.beginPath()
ctx.arc(200, 800, 100, 0, Math.PI, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(400, 800, 100, 0, Math.PI, true)
ctx.stroke()
ctx.beginPath()
ctx.arc(600, 800, 100, 0, Math.PI, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(800, 800, 100, 0, Math.PI, true)
ctx.stroke()

