
let numArr = [1, 2, 3, 5]

for (let i=0; i < numArr.length; i++) {
    if ((numArr[i + 1] - numArr[i]) != 1) {
        console.log(numArr[i] + 1) ;
        break
    }

}