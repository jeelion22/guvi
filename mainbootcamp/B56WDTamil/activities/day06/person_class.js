class Person {
    constructor (name, gender, age, profession, phone) {
        this.name = name;
        this.gender = gender;
        this.age = age ;
        this.profession = profession ;
        this.phone = phone
    }

    getName () {
        return this.name
    }

    getAge () {
        return this.age
    }

    getGender () {
        return this.gender
    }
    
    getProfession () {
        return this.profession
    }

    getPhone () {
        return this.phone 
    }

    setName (new_name) {
        this.name = new_name
    }

    setAge (new_age) {
        this.age = new_age
    }

    setGender (new_gender) {
        this.gender = new_gender
    }

    setProfession (new_profession) {
        this.profession = new_profession
    }

    setPhone (new_phone) {
        this.phone = new_phone
    }

    speakAboutYou() {
        return `I am ${this.name}, ${this.age} years old and my profession is ${this.profession}`
    }

}

// instantiate an object
const person1 = new Person("John Doe", "Male", 35, "Scientist", "1234567898")

// invoke some methods on the object
console.log(person1.speakAboutYou())

// change name of persion1
person1.setName("Batman")

// change profession
person1.setProfession("Superhero of Gotham City")

console.log(person1.speakAboutYou())
