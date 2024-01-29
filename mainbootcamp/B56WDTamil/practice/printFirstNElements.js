
function printFirstNElements(arr, n) {
    if (n == undefined) {
        return arr[0];
    }
    
    if (n < 0) {
        return [] ;
    }
    
    return arr.slice(0, n) ;
    
}



console.log(printFirstNElements([1, 2, 3]))
console.log(printFirstNElements([1, 2, 3], -4))
console.log(printFirstNElements([1, 2, 3], 2))
console.log(printFirstNElements([1, 2, 3], 8))