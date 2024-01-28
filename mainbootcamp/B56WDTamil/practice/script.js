

var request = new XMLHttpRequest();
// initialize request
request.open("GET", "https://restcountries.com/v3.1/all")

// send request
request.send()

// once the data successfully received from the server
// server code is 200
// data from the server will a string that is json string
// convert to string to object
request.onload = function () {
    var res = JSON.parse(request.response)
    console.log(res)

     for (i=0; i < 250; i++) {

        if ("capital" in res[i]) {

        console.log(i, res[i].capital[0], res[i].area)
        }
     }
    // print all 250 country common name in console
}

//  capital name and area

