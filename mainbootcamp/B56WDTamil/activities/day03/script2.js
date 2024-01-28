

// 1. How to compare two json have the same properties without order?
// a. let obj1 = {name: "Person 1", age: 5};
// b. let obj2 = {age: 5, name: "Person 1"}

// The direct comparision of objects with equality operators will not work. However this 
// works for primitive datatypes. e.g. console.log(4 == "4"), output; true.
// When comparing two objects even with the same properties will always give false because they are 
// treated as different objects. e.g. obj1 == obj2 // false.

// To acheive this operation, we can use stringify() method and then use the equality 
// operator when their properties are in oder. And it will then return a Boolean value as 
// a result by comparing corresponding key's value. 

let obj1 = {name: "Person 1", age: 5};
let obj2 = {name: "Person 1", age: 5}

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // true

// However if their properties not in order, this method will return false forever.
obj2 = {age: 5, name: "Person 1"}
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // false

// To handle this issue, we can create a function as shown below and 
// use looping for check their values whether they are equal or not
// regardless of their order with the same properties


function compareTwoObjects(obj1, obj2) {
    
    const obj1_keys = Object.keys(obj1) ;
    const obj2_keys = Object.keys(obj2) ;

    if (obj1_keys.length !== obj1_keys.length || !obj1_keys.every(key => obj2_keys.includes(key))) {
        return false;
    }

    for (let key in obj1) {
         if (obj1[key] != obj2[key]) {
            return false
         }
       

    }
    return true

    
}

console.log(compareTwoObjects(obj1, obj2))

