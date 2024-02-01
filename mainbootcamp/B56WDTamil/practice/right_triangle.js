

// There are two approaches

function rightFaceTriangle(n) {
    for (let i = 0; i <= n ; i++){
        console.log("* ".repeat(i))
    }
    for (let j = n; j >= 0 ; j--){
        console.log("* ".repeat(j))
    }
}

rightFaceTriangle(4)

var rows = 4 ;

for (i = 0; i < rows; i++) {
    var stars ="";
    for (j = 0; j < i + 1; j++){
        stars += "* "
    }
    console.log(stars.trim(" "))
}

for (i = rows; i > 0 ; i--) {
    var stars ="";
    for (j = i; j > 0; j--){
        stars += "* "
    }
    // console.log(stars.trim(" "))
    console.log(stars.trim(" "))
}