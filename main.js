const myCanvas = document.getElementById("canvas")

const context = myCanvas.getContext("2d")

var window_height = window.innerHeight
var window_width = window.innerWidth

myCanvas.width = window_width
myCanvas.height = window_height

myCanvas.style.background = "#106EBE"

context.fillRect(400, 0, 100, 200)

context.fillStyle = "#0FFCBE"
context.fillRect(150, 400, 100,100)

context.beginPath()
context.arc(200, 120, 50, 0, 2*Math.PI)
context.strokeStyle = "white"
context.lineWidth = 5
context.stroke()
context.closePath()