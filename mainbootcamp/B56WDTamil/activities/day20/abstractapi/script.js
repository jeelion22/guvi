
let card = document.createElement("div");
card.className = "card mb-3 shadow-lg";
card.setAttribute("style", "max-width: 540px");

let row = document.createElement("div");
row.className = "row no-gutters";

let col1 = document.createElement("div");
col1.className = "col-md-4";

let img = document.createElement("img");
img.className = "img-fluid"
img.setAttribute("src", "https://cdn.dribbble.com/users/330641/screenshots/4308153/tower.gif");
img.setAttribute("alt", "Teleservice");

col1.append(img);


// create elements for text input and button
let input_group = document.createElement("div");
input_group.className = "input-group mb-3 shadow mb-5 bg-white rounded";

let input = document.createElement("input");
input.type = "text";
input.className = "form-control"
input.placeholder = "Eg. 123456789";
input.setAttribute("aria-describedby", "button-addon2");
input.setAttribute("aria-label", "phone-number")

let btn = document.createElement("button");
btn.className = "btn btn-outline-secondary";
btn.type ="button"
btn.id = "button-addon2"
btn.textContent = "Search";

// append input and button elements together into 'input-group' element
input_group.append(input, btn)

let help = document.createElement("small");
help.className = "help-text text-warning"
help.textContent = "For Limited Countries Only"



let col2 = document.createElement("div");
col2.className = "col-md-8";

let card_body = document.createElement("div");
card_body.className = "card-body";

let title = document.createElement("h3");
title.className = "card-title text-white font-weight-bold";
title.textContent = "Check Phone Number";

let country = document.createElement("p");
country.className = "card-text";

let carrier = document.createElement("p");
carrier.className = "card-text";

let format = document.createElement("p");
format.className = "card-text";

let locate = document.createElement("p");
locate.className = "card-text";

let type = document.createElement("p");
type.className = "card-text";

let valid = document.createElement("p");
valid.className = "card-text";

let notvalid = document.createElement("p");
notvalid.className = "not-valid text-danger bg-white";

let local = document.createElement("p");
local.className = "card-text";

card_body.append( title, input_group, help, country, carrier, format, local, locate, type, valid, notvalid);

col2.append(card_body);

row.append(col1, col2);

card.append(row);

document.body.append(card);



async function validatePhoneNumber (phoneNumber) {
   
    const url = `https://phonevalidation.abstractapi.com/v1/?api_key=7ea8bc3317c94329b40e19514cca15fe&phone=${phoneNumber}`;

    try {
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error(response)
    } 

    let result  = await response.json()

    console.log(result)

    let notValid = document.querySelector(".not-valid");

    if (result.valid === true) {

        notValid.style.display = "none"

    



    let card_text = document.querySelectorAll(".card-text");

    let tags = card_text;

        for (let tag of tags) {
            tag.style.display = "block"
        }

    let countryEmnt = card_text[0];
    let carrierEmnt = card_text[1];
    let formatEmnt = card_text[2];
    let localEmnt = card_text[3];
    let locateEmnt = card_text[4];
  
    let typeEmnt = card_text[5];
   
    

    countryEmnt.innerHTML = `Country: ${result.country.name}`;
    carrierEmnt.textContent = `Carrier: ${result.carrier}`;
    formatEmnt.innerHTML = `International Format: ${result.format.international}`;
    locateEmnt.textContent = `Location: ${result.location}`;
    localEmnt.textContent = `Local Format: ${result.format.local}`;
    typeEmnt.textContent = `Type: ${result.type}`

    } else {

        let tags = document.querySelectorAll(".card-text");

        for (let tag of tags) {
            tag.style.display = "none"
        }
        
        

        notValid.textContent = "Not a valid Phone Number"
        notValid.style.display = "block"
    }



} catch (error) {

    console.log(error)
}
}


btn.addEventListener("click", (event)=>{
    event.preventDefault();

    let phone = document.querySelector(".form-control").value;

    validatePhoneNumber(phone)

 


})
















