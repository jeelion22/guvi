
// 2. Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags console

// 3. Use the same rest countries API url and print all countries names, regions, subregions, and populations

// Solutions for both questions are given below:


// create a function for print all countries flags
function reqRestCountriesFlags() {
    let res = JSON.parse(this.response);

    console.log("Countries' flags' URLs")

    for (let i=0; i < 250; i++) {
        console.log(res[i].flags.png);
    }

}

// create requestListener function amd parse the json string as javascrip object
function reqListener() {
    let res = JSON.parse(this.response) ;

    console.log("\nCountry name, region, sub-region, population");

    for (let i = 0; i < 250; i++) {
        console.log(`${res[i].name.common}, ${res[i].region}, ${res[i].subregion}, ${res[i].population}`);
    }    
}

// create object to interact with server
const req = new XMLHttpRequest() ;

// initialize request
req.open("GET", "https://restcountries.com/v3.1/all");

// send request
req.send()


// invoke EventTarget's method on the object for printing all countries flags urls
req.addEventListener("load", reqRestCountriesFlags)

// invoke the method for printing all countries names, region, subregion, and population
req.addEventListener("load", reqListener);

