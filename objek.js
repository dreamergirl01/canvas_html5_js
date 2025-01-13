const myCanvas = document.getElementById("myCanvas")
const context = myCanvas.getContext("2d")

var window_height = window.innerHeight
var window_width = window.innerWidth

myCanvas.width = window_width
myCanvas.height = window_height

myCanvas.style.background = "#C2B280"

class Circle{
    constructor(x, y, radius, color, text){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.text = text
    }

    draw(context){
        context.beginPath()

        context.strokeStyle = this.color
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.font = "20px arial"
        context.fillText(this.text, this.x, this.y)
        // context.strokeText(this.text, this.x, this.y)

        context.lineWidth = 5
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false)
        context.stroke()
        context.closePath()
    }
}

let circle_counter = 1
let all_circles = []

let createCircle = function(my_circle){
    my_circle.draw(context)
}

for (var numbers = 0; numbers < 10; numbers++){
    let random_x = Math.random()* window_width
    let random_y = Math.random() * window_width
    let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter)
    all_circles.push(my_circle)
    createCircle(all_circles[numbers])
    circle_counter++
}