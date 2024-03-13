
// The function creates elements for the form input
function createInputElement(classname, type, name, id) {
  let inpElmnt = document.createElement("input");
  inpElmnt.type = type;
  inpElmnt.name = name;
  inpElmnt.id = id;
  inpElmnt.className = classname;

  return inpElmnt;
}

// function creates label for the form
function createLabel(forValue, text) {
  let label = document.createElement("label");
  label.setAttribute("for", forValue);
  label.innerHTML = `${text}`;

  return label;
}

// function creates generic elements
function createElement(className) {
  let div = document.createElement("div");
  div.className = className;

  return div;
}

// function creates table-row for the table
function create_tr() {
  return document.createElement("tr");
}

// function creates table th
function create_th(attr, thdata) {
  let th = document.createElement("th");
  th.setAttribute("scope", attr);
  th.innerHTML = thdata;

  return th;
}

// function creates table data
function create_td(content) {
  let td = document.createElement("td");
  td.innerHTML = content;
  return td;
}

// It returns single row with data 
function create_tr_with_td(attr, dataArray) {
  let tr = create_tr();

  for (let i = 0; i < dataArray.length; i++) {
    let th = create_th(attr, dataArray[i]);
    tr.append(th);
  }

  return tr;
}

// It is the parent element to both form and table
let container = document.createElement("div");
container.className = "container-fluid";

// it is the element represents the row
let row = document.createElement("div");
row.className = "row";

// The above row has two columns col1 and col2
let col1 = document.createElement("div");
col1.className = "col-4";

let col2 = document.createElement("div");
col2.className = "col-8";

// creation form element with bootstrap class
let form = document.createElement("form");
let form_group = document.createElement("div");
form_group.className = "form-group";

// The below form elements
let firstnameLabel = createLabel("firstname", "Firstname:");
let firstname_inp = createInputElement(
  "form-control",
  "text",
  "firstname",
  "firstname"
);
firstname_inp.required = true;
firstname_inp.placeholder = "John";

let lastnameLabel = createLabel("lastname", "Lastname:");
let lastname_inp = createInputElement(
  "form-control",
  "text",
  "lastname",
  "lastname"
);
lastname_inp.placeholder = "Doe";

let firstname = createElement("form-group");
let lastname = createElement("form-group");

let addrLabel = createLabel("address1", "Address Line 1:");
let addressInp = createInputElement(
  "form-control",
  "text",
  "address1",
  "address1"
);
addressInp.required = true;
addressInp.placeholder = "D.No., St., Vill./Twn., TK., Dist.";

let address1 = createElement("form-group");

let addr2Label = createLabel("address2", "Address Line 2:");
let address2Inp = createInputElement(
  "form-control",
  "text",
  "address2",
  "address2"
);
address2Inp.placeholder = "D.No., St., Vill./Twn., TK., Dist.";

let address2 = createElement("form-group");

let pinLabel = createLabel("pin", "PIN:");
let pinInp = createInputElement("form-control", "number", "pin", "pin");
pinInp.min = 100000;
pinInp.max = 999999;
pinInp.placeholder = "e.g.123456";
pinInp.required = true;
let pin = createElement("form-group");

let genderLabel = createLabel("gender", "Gender");

let radio1 = createInputElement(
  "form-check-input",
  "radio",
  "gender",
  "gender"
);
radio1.value = "Male";

let radio2 = createInputElement(
  "form-check-input",
  "radio",
  "gender",
  "gender"
);
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

let foodlabel = createLabel(
  "food",
  "Choice of Food: (<i>must choose at least 2 out of 5 options</i>)"
);
let food = createElement("form-group");

let checkBox1Btn = createInputElement(
  "form-check-input",
  "checkbox",
  "food",
  "food"
);
checkBox1Btn.value = "North Indian";

let checkBox1Label = createLabel("food", "North Indian");

let checkBox1 = createElement("form-group form-check");

let checkBox2Btn = createInputElement(
  "form-check-input",
  "checkbox",
  "food",
  "food"
);
checkBox2Btn.value = "South Indian";

let checkBox2Label = createLabel("food", "South Indian");

let checkBox2 = createElement("form-group form-check");

let checkBox3Btn = createInputElement(
  "form-check-input",
  "checkbox",
  "food",
  "food"
);
checkBox3Btn.value = "Chinese";
let checkBox3Label = createLabel("food", "Chinese");

let checkBox3 = createElement("form-group form-check");

let checkBox4Btn = createInputElement(
  "form-check-input",
  "checkbox",
  "food",
  "food"
);
checkBox4Btn.value = "Japanese";
let checkBox4Label = createLabel("food", "Japanese");

let checkBox4 = createElement("form-group form-check");

let checkBox5Btn = createInputElement(
  "form-check-input",
  "checkbox",
  "food",
  "food"
);
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
  "Puducherry (UT)",
];

let stateLabel = createLabel("state", "State:");
let select = document.createElement("select");
select.className = "form-control";
select.id = "state";

let defaultStateOption = document.createElement("option");
defaultStateOption.innerHTML = "Select State";
defaultStateOption.selected = true;

select.appendChild(defaultStateOption);

states.forEach((state) => {
  let option = document.createElement("option");
  option.innerHTML = state;
  option.value = state;
  select.appendChild(option);
});

let stateSelection = createElement("form-group");
stateSelection.append(stateLabel, select);

const countryArray = ["India"];

let countryLabel = createLabel("country", "Country:");
let selectCountry = document.createElement("select");
selectCountry.className = "form-control";
selectCountry.id = "country";

let defaultCountryOption = document.createElement("option");
defaultCountryOption.innerHTML = "Select Country";
defaultCountryOption.selected = true;

selectCountry.appendChild(defaultCountryOption);
countryArray.forEach((country) => {
  let option = document.createElement("option");
  option.innerHTML = country;
  option.value = country;
  selectCountry.appendChild(option);
});

let countrySelection = createElement("form-group");
countrySelection.append(countryLabel, selectCountry);

let submitBtn = document.createElement("button");
submitBtn.className = "btn btn-secondary btn-lg btn-block";
submitBtn.textContent = "Submit";



// creation of table

// create a table element
let table = document.createElement("table");
table.className = "table";

// create a table head element
let thead = document.createElement("thead");
thead.className = "thead-dark";

// create table body
let tbody = document.createElement("tbody");

let tableHeadRow = create_tr_with_td("col", [
  "Firstname",
  "Lastname",
  "Address 1",
  "Address 2",
  "PIN",
  "Gender",
  "Choice of Food",
  "State",
  "Country",
]);

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

form_group.append(
  firstname,
  lastname,
  address1,
  address2,
  pin,
  gender,
  food,
  stateSelection,
  countrySelection
);

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

  // Get selected state and country values
  const stateSelect = document.getElementById("state");
  const countrySelect = document.getElementById("country");

  const selectedState = stateSelect.options[stateSelect.selectedIndex].value;
  const selectedCountry =
    countrySelect.options[countrySelect.selectedIndex].value;

  if (formData.getAll("food").length < 2) {
    alert("Choose atleast two food option");
  } else {
    const newRow = create_tr_with_td("row", [
      formData.get("firstname"),
      formData.get("lastname"),
      formData.get("address1"),
      formData.get("address2"),
      formData.get("pin"),
      formData.get("gender"),
      formData.getAll("food").join(", "),
      selectedState,
      selectedCountry,
    ]);

    tbody.appendChild(newRow);

    formdata.reset();
  }
});
