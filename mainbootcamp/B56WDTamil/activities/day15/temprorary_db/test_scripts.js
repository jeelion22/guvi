function createInputElement(classname, type, name, id) {
    let inpElmnt = document.createElement("input");
    inpElmnt.type = type;
    inpElmnt.name = name;
    inpElmnt.id = id;
    inpElmnt.className = classname;

    return inpElmnt;
}

function createLabel(forValue, text) {
    let label = document.createElement("label");
    label.setAttribute("for", forValue);
    label.innerHTML = `${text}`;

    return label;
}

function createElement(className) {
    let div = document.createElement("div");
    div.className = className;

    return div;
}

function create_tr() {
    return document.createElement("tr");
}

function create_th(attr, thdata) {
    let th = document.createElement("th");
    th.setAttribute("scope", attr);
    th.innerHTML = thdata;

    return th;
}

function create_td(content) {
    let td = document.createElement("td");
    td.innerHTML = content;
    return td;
}

function create_tr_with_td(attr, dataArray) {
    let tr = create_tr();

    for (let i = 0; i < dataArray.length; i++) {
        let th = create_th(attr, dataArray[i]);
        tr.append(th);
    }

    return tr;
}

let container = document.createElement("div");
container.className = "container-fluid";

let row = document.createElement("div");
row.className = "row";

let col1 = document.createElement("div");
col1.className = "col-4";


let col2 = document.createElement("div");
col2.className = "col-8";

let form = document.createElement("form");
let form_group = document.createElement("div");
form_group.className = "form-group";

let firstnameLabel = createLabel("firstname", "Firstname:");
let firstname_inp = createInputElement("form-control", "text", "firstname", "firstname");

let lastnameLabel = createLabel("lastname", "Lastname:");
let lastname_inp = createInputElement("form-control", "text", "lastname", "lastname");

let firstname = createElement("form-group");
let lastname = createElement("form-group");

let addrLabel = createLabel("address1", "Address Line 1:");
let addressInp = createInputElement("form-control", "text", "address1", "address1");

let address1 = createElement("form-group");

let addr2Label = createLabel("address2", "Address Line 2:");
let address2Inp = createInputElement("form-control", "text", "address2", "address2");

let address2 = createElement("form-group");

let pinLabel = createLabel("pin", "PIN:");
let pinInp = createInputElement("form-control", "text", "pin", "pin");
pinInp.placeholder = "e.g.123456";
let pin = createElement("form-group");

let genderLabel = createLabel("gender", "Gender");

let radio1 = createInputElement("form-check-input", "radio", "gender", "gender");
radio1.value = "Male";

let radio2 = createInputElement("form-check-input", "radio", "gender", "gender");
radio2.value = "Female";

let radio1Label = createLabel("gender", "Male");
radio1Label.className = "form-check-label";

let radio2Label = createLabel("gender", "Female");
radio2Label.className = "form-check-label";

let gender = createElement("form-group");

let radioBtn1 = createElement("form-check form-check-inline");
radioBtn1.append(radio1, radio1Label);

let radioBtn2 = createElement("form-check form-check-inline");
radioBtn2.append(radio2, radio2Label);

let radioBtns = createElement("form-group");
radioBtns.append(radioBtn1, radioBtn2);

let foodlabel = createLabel("food", "Choice of Food: (<i>must choose at least 2 out of 5 options</i>)");
let food = createElement("form-group");

let checkBox1Btn = createInputElement("form-check-input", "checkbox", "food", "food");
checkBox1Btn.value = "North Indian";

let checkBox1Label = createLabel("food", "North Indian");

let checkBox1 = createElement("form-group form-check");

let checkBox2Btn = createInputElement("form-check-input", "checkbox", "food", "food");
checkBox2Btn.value = "South Indian";

let checkBox2Label = createLabel("food", "South Indian");

let checkBox2 = createElement("form-group form-check");

let checkBox3Btn = createInputElement("form-check-input", "checkbox", "food", "food");
checkBox3Btn.value = "Chinese";
let checkBox3Label = createLabel("food", "Chinese");

let checkBox3 = createElement("form-group form-check");

let checkBox4Btn = createInputElement("form-check-input", "checkbox", "food", "food");
checkBox4Btn.value = "Japanese";
let checkBox4Label = createLabel("food", "Japanese");

let checkBox4 = createElement("form-group form-check");

let checkBox5Btn = createInputElement("form-check-input", "checkbox", "food", "food");
checkBox5Btn.value = "Sea Food";
let checkBox5Label = createLabel("food", "Japanese");

let checkBox5 = createElement("form-group form-check");

let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Madhya Pradesh",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Telangana",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman & Nicobar (UT)",
    "Chandigarh (UT)",
    "Dadra & Nagar Haveli and Daman & Diu (UT)",
    "Delhi",
    "Jammu & Kashmir (UT)",
    "Ladakh (UT)",
    "Lakshadweep (UT)",
    "Puducherry (UT)"
];

let stateLabel = createLabel("state", "State:");
let select = document.createElement("select");
select.className = "form-control";
select.id = "state";

states.forEach((state) => {
    let option = document.createElement("option");
    option.innerHTML = state;
    select.appendChild(option);
});

let stateSelection = createElement("form-group");
stateSelection.append(stateLabel, select);

const countryArray = [
    "Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

let countryLabel = createLabel("country", "Country:");
let selectCountry = document.createElement("select");
selectCountry.className = "form-control";
selectCountry.id = "country";

countryArray.forEach((country) => {
    let option = document.createElement("option");
    option.innerHTML = country;
    selectCountry.appendChild(option);
});

let countrySelection = createElement("form-group");
countrySelection.append(countryLabel, selectCountry);

let submitBtn = document.createElement("button");
submitBtn.className = "btn btn-primary btn-lg btn-block";
submitBtn.textContent = "Submit";

// create a table element
let table = document.createElement("table");
table.className = "table";

// create a table head element
let thead = document.createElement("thead");
thead.className = "thead-dark";

// create table body
let tbody = document.createElement("tbody");

let tableHeadRow = create_tr_with_td("col", ["Firstname", "Lastname", "Address 1", "Address 2", "PIN", "Gender", "Choice of Food", "State", "Country"]);

thead.append(tableHeadRow);
table.append(thead, tbody);

checkBox1.append(checkBox1Btn, checkBox1Label);
checkBox2.append(checkBox2Btn, checkBox2Label);
checkBox3.append(checkBox3Btn, checkBox3Label);
checkBox4.append(checkBox4Btn, checkBox4Label);
checkBox5.append(checkBox5Btn, checkBox5Label);

firstname.append(firstnameLabel, firstname_inp);
lastname.append(lastnameLabel, lastname_inp);
address1.append(addrLabel, addressInp);
address2.append(addr2Label, address2Inp);
pin.append(pinLabel, pinInp);
gender.append(genderLabel, radioBtns);
food.append(foodlabel, checkBox1, checkBox2, checkBox3, checkBox4, checkBox5);

let title = document.createElement("h4");
title.textContent = "Form Submission";

form_group.append(firstname, lastname, address1, address2, pin, gender, food, stateSelection, countrySelection);

form.append(title, form_group, submitBtn);

col1.append(form);
col2.append(table);
row.append(col1, col2);
container.append(row);
document.body.append(container);

const formdata = document.querySelector("form");

formdata.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formdata);

    console.log(formData);

    const newRow = create_tr_with_td("row", [
        formData.get("firstname"),
        formData.get("lastname"),
        formData.get("address1"),
        formData.get("address2"),
        formData.get("pin"),
        formData.get("gender"),
        formData.getAll("food").join(", "),
        formData.get("state"),
        formData.get("country")
    ]);

    tbody.appendChild(newRow);
});
