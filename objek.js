const myCanvas = document.getElementById("myCanvas")
const context = myCanvas.getContext("2d")

var window_height = window.innerHeight
var window_width = window.innerWidth

myCanvas.width = window_width
myCanvas.height = window_height

myCanvas.style.background = "#C2B280"

class Circle{
    constructor(x, y, radius, color, text, speed){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.text = text
        this.speed = speed
        this.dx = 1 * this.speed
        this.dy = 1 * this.speed
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

    update(){
        context.clearRect(0, 0, window_width, window_height)

        this.draw(context)

        if((this.x + this.radius) > window_width){
            this.dx = -this.dx
        }
        if((this.x - this.radius) < 0){
            this.dx = -this.dx
        }
        if((this.y + this.radius) > window_width){
            this.dy = -this.dy
        }
        if((this.y - this.radius) < 0){
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
    }
}

//creating class, object and font
// let circle_counter = 1
// let all_circles = []

// let createCircle = function(my_circle){
//     my_circle.draw(context)
// }

// for (var numbers = 0; numbers < 1; numbers++){
//     let random_x = Math.random()* window_width
//     let random_y = Math.random() * window_width
//     let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter,1)
//     all_circles.push(my_circle)
//     createCircle(all_circles[numbers])
//     circle_counter++
// }

//moving object animation +collicion detection
let circle_counter = 1
let random_x = Math.random() * window_width
let random_y = Math.random() * window_width

let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter, 2)
my_circle.draw(context)

let updateCircle = function(){
    requestAnimationFrame(updateCircle)
    my_circle.update()
}

updateCircle()