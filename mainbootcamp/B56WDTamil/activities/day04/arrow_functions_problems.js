// a . Print odd numbers in an array

const getOddNumbersPrinted = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]) ;
        }
    }
}

getOddNumbersPrinted([1, 2, 4, 0, -5]) // // 1, -5



// b. Convert all the strings to title caps in a string array

const titleCaps = stri_arr => {
    const titleCapsArray = [] ;
    for (i = 0; i < stri_arr.length; i++) {
        titleCapsArray.push(stri_arr[i][0].toUpperCase() + stri_arr[i].slice(1).toLowerCase())
    }
    return titleCapsArray
    }
    
    console.log(titleCaps(["jeeva", "madhAIYan"])) // [ 'Jeeva', 'Madhaiyan' ]



// c. Sum of all numbers in an array

const sum_array = arr =>  {
    total = 0;

    for (const elem of arr) {
        total += elem;
    }
    return total ;
}

console.log(sum_array([1, 2, 4, 5 -5])) // 7



// d. Return all the prime numbers in an array

// define a function for checking a given number is prime or not

const isPrime = n => {
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

const getPrimeArray = arr => {
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

const palindromeArray = arr => {
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

