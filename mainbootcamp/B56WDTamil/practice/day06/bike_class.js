class Bike {
    constructor (name, color, mileage, speed) {
        this.name = name ;
        this.color = color ;
        this.mileage = mileage ;
        this.speed = speed
    }

    // method
    print_name = ()  => `The name of the bike is ${this.name}`
}

const bajaj = new Bike("NS200", "Pearl white", 40, "145km/h")
const honda = new Bike("Shine Sp", "Red-black", 65, "100km/h")

console.log(bajaj)
// console.log(honda)
console.log(bajaj.print_name())