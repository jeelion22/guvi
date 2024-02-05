
// create an object of XMLHttpRequest to interact with the server
const request = new XMLHttpRequest() ;

// initialize request
request.open("GET", "https://restcountries.com/v3.1/all")

// send request to the specified api server
request.send()


request.onload = function () {
    let result = JSON.parse(request.response) ;
    // console.log(result)

    // a. Get all the countries from Asia continent /region using Filter function

    console.log("\nCountries from Asia continent")

    let asian_region = result.filter((ele) => ele.region == "Asia") ;
    let asian_countries = asian_region.map((country) => country.name.common);
    console.log(asian_countries);

    // b. Get all the countries with a population of less than 2 lakhs using Filter function

    console.log("\nCountries with a population of less than 2 lakhs")

    let population_below_2Lakh = result.filter((ele) => ele.population < 200000);
    let countries_below_2L_population  = population_below_2Lakh.map((country) => country.name.common) ;
    console.log(countries_below_2L_population);

    // c. Print the following details name, capital, flag, using forEach function

    console.log("\nCountry Name, Capital, Flag")

    let countries_details = result.forEach((country) => console.log(`${country.name.common}, ${country.capital}, ${country.flag}`))
    countries_details
    
    
    // d. Print the total population of countries using reduce function

    console.log("\nTotal Population")

    let total_popultion = result.reduce((Sum_of_population, country) => Sum_of_population +country.population, 0) ;
    console.log(`Total population on our planet: ${total_popultion}`)

    // e. Print the country that uses US dollars as currency.

    console.log(`\nDollar Countries`)

    let USDUsers = result.filter((ele) => ele.currencies && ele.currencies.USD) ;
    let dollar_countries = USDUsers.forEach((country) => console.log(`${country.name.common}`))
   



    




    


}


