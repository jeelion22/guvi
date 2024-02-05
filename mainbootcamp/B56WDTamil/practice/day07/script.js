

const request = new XMLHttpRequest() ;

URL = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"

request.open("GEt", URL) ;

request.send()

request.onload = function () {
    let res = JSON.parse(request.response) ;
    console.log(res) ;
    // var result_asia =  res.filter((ele) => ele.region == "Asia") ;
    // console.log(result_asia) ;
    // var asia_countries = result_asia.map((ele) => ele.name) ;
    // console.log(asia_countries) ;

    // var populationUnder2L = res.filter((ele) => ele.population < 200000);
    // var populationUnder2Lcountries = populationUnder2L.map((ele) => ele.capital);
    // console.log(populationUnder2Lcountries) 


    var total_popultion = res.reduce((acc, cv) => acc + cv.population, 0) ;
    console.log(total_popultion) ;
}