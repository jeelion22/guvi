// a . Print odd numbers in an array

const odd_array = function (arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]) ;
        }
    }
       
}

odd_array([1, 2, 4, 0, -5]) // 1, -5



// b. Convert all the strings to title caps in a string array

const titleCaps = function (stri_arr) {
const titleCapsArray = [] ;
for (i = 0; i < stri_arr.length; i++) {
    titleCapsArray.push(stri_arr[i][0].toUpperCase() + stri_arr[i].slice(1).toLowerCase())
}
return titleCapsArray
}

console.log(titleCaps(["jeeva", "madhAIYan"])) // [ 'Jeeva', 'Madhaiyan' ]



// c. Sum of all numbers in an array

const sum_array = function (arr) {
    total = 0;

    for (const elem of arr) {
        total += elem;
    }
    return total ;
}

console.log(sum_array([1, 2, 4, 5 -5])) // 7



// d. Return all the prime numbers in an array

// define a function for checking a given number is prime or not

const isPrime = function (n) {
    if (n <= 1 ) {
        return false ;
    }

    if (n <= 3) {
        return true ;
    }

    if (n % 2 == 0 || n % 3 == 0) {
        return false ;
    }

    for (let i = 5; i* i <= n; i+=6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false ;
        }
    }

    return true ;
}

// fucntion that returns an array of prime nunbers

const getPrimeArray = function (arr) {
    const primes = [] ;
    for (let num of arr) {
        if (isPrime(num)) {
            primes.push(num) ;
        }

        }
    return primes ;
    }

console.log(getPrimeArray([1, 2, 4, -2, 3]))  // [ 2, 3 ]


// e. Return all the palindromes in an array

const palindromeArray = function (arr){
    let palindromes = []
    for (let ele of arr) {
       reversed = ele.toString().split("").reverse().join("") ;

       if (!Number.isInteger(ele) && (reversed.toLowerCase() == ele.toLowerCase())){
                palindromes.push(ele)
       }  
       
       else if (reversed == ele || "-" + reversed == ele + "-") {
        palindromes.push(ele)
       }       
    }
    return palindromes
}

console.log(palindromeArray(["radar", "Deed", "Level", "Jeeva", 22, "121", -121])) // [ 'radar', 'Deed', 'Level', 22, '121', -121 ]



// f. Return median of two sorted arrays of the same size.

const getMedianOfTwoSortedArrays = function (arr1, arr2) {

    let [A, B] = [arr1, arr2]

    total = 2 * arr1.length;
    half = Math.floor(total / 2) ;

    // Assign index to varaibles
    let [l, r] = [0, A.length - 1] ;

    while (true) {
        i = Math.floor((l + 1) / 2) ;
        j = half - i - 2 ;

        Aleft = (i >= 0) ? A[i] : Number.NEGATIVE_INFINITY ;
        Aright = (i + 1 < A.length) ? A[i + 1] : Number.POSITIVE_INFINITY ;
        Bleft = (j >= 0) ? B[j] : Number.NEGATIVE_INFINITY ;
        Bright = (j + 1 < B.length) ? B[j + 1] : Number.POSITIVE_INFINITY ;

        // checks partition
        if (Aleft <= Bright && Bleft <= Aright){
            // resultant array always be even
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2 ;
        }

        else if (Aleft > Bright) {
            r = i -1
        }
        else {
            l = l + 1
        }

        
    }


}

console.log(getMedianOfTwoSortedArrays([1, 2, 3], [4, 5, 6])) // 3.5



// g. Remove duplicates from an array

const removeDuplicates = function (arr){
    let unique_arr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique_arr.includes(arr[i])) {
            unique_arr.push(arr[i]);
        }
    }
    return unique_arr ;

}

console.log(removeDuplicates([1, 2, 5, 5, 1, -1 ])) // [ 1, 2, 5, -1 ]



// h. Rotate an array by k times

// for left rotation
const leftRotate = function (arr, k) {
    rotate = k % arr.length
    return arr.slice(rotate).concat(arr.slice(0, rotate))
}
console.log(leftRotate([1, 2, 3, 4, 5], 6)) // [ 2, 3, 4, 5, 1 ]

// for right rotation

const rightRotate = function (arr, k) {
    rotatation = k % arr.length
    return (rotatation === 0) ? arr : (arr.slice(-rotatation).concat(arr.slice(0, arr.length - rotatation)))
}


console.log(rightRotate([1, 2, 3, 4], 4)) // [ 1, 2, 3, 4 ]





