
// create title element
let title = document.createElement("h4");
title.innerHTML = "Latest Exchange Rates of All Available Currencies with USD as Default Base Currency"

// create a container element to add elements inside it
let container = document.createElement("div");
container.className = "container"

// create elements for label, select, option, button, and for card
// finally append all together into a single element
let input_group = document.createElement("div");
input_group.className = "input-group mb-3"

let inp_grp_prepend = document.createElement("div");
inp_grp_prepend.className = "input-group-prepend";

let label = document.createElement("label");
label.className = "input-group-text";
label.setAttribute("for", "inputGroupSelect01");
label.innerHTML = "USD $1.00";

inp_grp_prepend.append(label);

let select = document.createElement("select");
select.className = "custom-select";
select.id = "inputGroupSelect01";

let option = document.createElement("option");
option.textContent = "Choose Currency";
option.selected = true;
option.value = ""

select.append(option)

let btn = document.createElement("button");
btn.className = "btn btn-outline-secondary"
btn.type = "button";
btn.textContent = "Submit"

let card = document.createElement("div");
card.className = "card";

let card_body = document.createElement("div");
card_body.className = "card-body";

let card_title = document.createElement("h5");
card_title.className = "card-title";

let card_text = document.createElement("p");
card_text.className = "card-text";

// append elements into card body
card_body.append(card_title, card_text);

// append card body into card
card.append(card_body)

// append elements into another element called input_group
input_group.append(inp_grp_prepend, select, btn);

// append elements within container
container.append(title, input_group, card)

// append container into body
document.body.append(container)


// create a async function for getting specific currency codes
// using rest countries api
async function getRestCountriesCurrency () {

    try {

        let response = await fetch("https://restcountries.com/v3.1/all");

        let result = await response.json();

        const currency = new Set();
        
        for (let obj of result) {
            if (obj.hasOwnProperty("currencies")) {
                currency.add(Object.keys(obj.currencies)[0])
                
            }
        }

        for (let ele of Array.from(currency).sort()) {
            
            let option = document.createElement("option");
            option.textContent = ele;
            option.value = ele;
            select.append(option);
           
        }

    } catch (error) {
        console.log(error)
    }
}

// create another async function for getting exchange rates of each currencies
// as a base value of USD

async function currencyValue(code) {

    try {

        if (code === "") {
            throw new Error("Invalid Currency Code")
        }


        let currency = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=90eb34ad08cb4a84b6607aca88f4d319`);
        
        
        let currencyValues = await currency.json();

        let cardTitle = document.querySelector(".card-title");
        let cardText = document.querySelector(".card-text");

        cardTitle.textContent = `USD To ${code}`;
        cardText.textContent = `1.00 USD = ${Number(currencyValues.rates[code]).toFixed(2)} ${code}`;

        let cardEle = document.querySelector(".card");
        cardEle.style.display = "block"
        cardText.style.display = "block"

    } catch (error) {

        let card = document.querySelector(".card");
        let cardTitle = document.querySelector(".card-title");
        let cardText = document.querySelector(".card-text");

        cardTitle.textContent =   `${error.message}`
        
        card.style.display = "block"

        cardTitle.style.display = "block"
        cardText.style.display = "none"
    }
}


// function call for currency code
getRestCountriesCurrency()


let selectElement = document.querySelector(".custom-select");


// add event
btn.addEventListener("click", (ent)=>{
    ent.preventDefault();   

    var selectedOption = selectElement.options[selectElement.selectedIndex];

    var selectedValue = selectedOption.value ;

    currencyValue(selectedValue)
})


