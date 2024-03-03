// create element 'card'
let card = document.createElement("div");
card.className = "card text-center ";

// create element 'card_header'
let card_header = document.createElement("div");
card_header.className = "card-header"

// create element 'card_body'
let card_body = document.createElement("div");
card_body.className = "card-body"

// create element for card title
let h3 = document.createElement("h3");
h3.className = "card-title";
h3.innerHTML = "Your IP information";

// create element for error handelings
let error_body = document.createElement("div");
error_body.className = "error-body"


// create elements for text input and button
let input_group = document.createElement("div");
input_group.className = "input-group mb-3 shadow mb-5 bg-white rounded";

let input = document.createElement("input");
input.type = "text";
input.className = "form-control"
input.placeholder = "IPv4/IPv6 address";
input.setAttribute("aria-describedby", "button-addon2");
input.setAttribute("aria-label", "IPV4/IPV6's address")

let btn = document.createElement("button");
btn.className = "btn btn-outline-secondary";
btn.type ="button"
btn.id = "button-addon2"
btn.textContent = "Find IP";

// append input and button elements together into 'input-group' element
input_group.append(input, btn)


// append title and input_group into card
card.append(h3, input_group)


// create element for footer section
let card_footer = document.createElement("div");
card_footer.className = "card-footer";


// create elements that to be placed inside the 'card-body'
let ip = document.createElement("div");
ip.className = "card-text"

let ip_continent = document.createElement("p");
ip_continent.className = "card-text";

let country_name = document.createElement("p");
country_name.className = "card-text"

let city = document.createElement("p");
city.className = "card-text";

let region = document.createElement("p");
region.className = "card-text";



// create element that to be inserted into 'error_body'
let error_block = document.createElement('div');
error_block.className = "error-block"

// appends elements above inside 'card_body' and 'error_body'
card_body.append(ip, ip_continent, country_name, city, region);
error_body.append(error_block)


// create an async function using fetch api
async function get_ip_info(ip_string, api_key) {

    // use try-catch blocks for error catching

    try {

    
        // create an url with api-key
        const url = `https://apiip.net/api/check?ip=${ip_string}&accessKey=${api_key}`

        var ip_data = await fetch(url);

        // throw if error 
        if (!ip_data.ok) {
            throw new Error(ip_data.status)
        }
        
        // if ip_data success, then proceeds further
        if (ip_data.status === 200){

            // convert readable stream ip_data into json format
            let ip_json = await ip_data.json();

            // ensure ensure "card-body" to be enabled
            let card_body = document.querySelector(".card-body");
            card_body.style.display = "block";

            // ensure ensure error-body to be disabled
            let error = document.querySelector(".error-body");
            error.style.display = "none";


            // make queries and change content
            let query = document.querySelectorAll(".card-text")
        
            let ip = query[0];    
            ip.textContent = `IP Address: ${ip_json.ip}`;

            let continent = query[1];
            continent.textContent = `Continent: ${ip_json.continentName}`

            let country = query[2];
            country.textContent = `Country Name: ${ip_json.countryFlagEmoj}${ip_json.officialCountryName}`;

            let city = query[3];
            city.textContent = `City: ${ip_json.city}`

            let region = query[4]; 

            region.textContent = `Region: ${ip_json.regionName}`
            
            let card_footer = document.querySelector(".card-footer");
            card_footer.innerHTML = `Geolocation Coordinates <br>Latitude: ${ip_json.latitude} <br>Longitude: ${ip_json.longitude}`
            card_footer.style.display = "block"

    }
    }

    catch(err) { 
        // ensure ensure "card-body" to be diabled
        let card_body = document.querySelector(".card-body");
        card_body.style.display = "none"

        // ensure ensure "card-footer" to be diabled
        let card_footer = document.querySelector(".card-footer");
        card_footer.style.display = "none"

        // ensure ensure error-body to be enabled
        let error = document.querySelector(".error-body");
        error.style.display = "block";

        // query element for catch block
        let catchBlock = document.querySelector('.error-block');     

        if (err.message == 400){
            catchBlock.textContent = "400: IP Address is not valid!";
        } else if (err.message == 404){
            catchBlock.textContent = "404: Requested a resource which does not exist";
        } else if (err.message == 404) {
            catchBlock.textContent = "404: We do not have info for this IP address"
        } else if (err.message == 401) {
            catchBlock.textContent = "401: Api access key is required!"
        } else if (err.message == 403) {
            catchBlock.textContent ="403: invalid_access_key"
        } else if (err.message == 403) {
            catchBlock.textContent ="403: invalid_access_key or user_blocked or usage_limit_reached or too_many_requests"
        }

    }
    
}

// append all elements into card
card.append(card_header, card_body, error_body, card_footer)

// append card element into body element of the document
document.body.append(card)

// add event listner to the button
btn.addEventListener("click", (event)=>{
    event.preventDefault();
    
    let ip_addr = document.querySelector(".form-control").value;
    get_ip_info(ip_addr, api_key)   
    
})

