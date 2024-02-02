class Bike {
    constructor (name, color, mileage, speed) {
        this.name = name ;
        this.color = color ;
        this.mileage = mileage ;
        this.speed = speed
    }
}

const pajaj = new Bike("NS200", "Pearl white", 40, 145)
const honda = new Bike("Shine Sp", "Red-black", 65, 100)

console.log(pajaj)
console.log(honda)