function lastNElements(array, n) {
    if (n == undefined){
        return array[array.length-1]
    }

    return array.slice(-n);
}

console.log(lastNElements([7, 9, 0, -2]))
console.log(lastNElements([7, 9, 0, -2], 3))
console.log(lastNElements([7, 9, 0, -2], 6))
