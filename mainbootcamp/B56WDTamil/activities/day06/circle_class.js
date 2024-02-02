class Circle {

    constructor (radius = 1.0, color = "red") {
        this.radius = radius ;
        this.color = color ;
    }
    
    getRadius () {
        return this.radius
    }

    setRadius (newRadius) {
        this.radius = newRadius
    }

    getColor () {
        return this.color
    }

    setColor (newColor) {
        this.color = newColor
    }

    getArea () {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getCircumference () {
        return 2 * Math.PI * this.radius
    }
}

// instance of class Circle
const cir1 = new Circle() ;

// methods invoked on the instance
console.log(cir1.getRadius()) ;
console.log(cir1.getColor()) ;
console.log(cir1.getArea()) ;
console.log(cir1.getCircumference()) ;

// set values
cir1.setRadius(2.5)
cir1.setColor("Blue")

// methods invoked on the instance
console.log(cir1.getRadius()) ;
console.log(cir1.getColor()) ;
console.log(cir1.getArea()) ;
console.log(cir1.getCircumference()) ;