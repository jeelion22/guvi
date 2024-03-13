function createInputElement (type, name, id) {
    let inpElmnt = document.createElement("input");
    inpElmnt.type = type;
    inpElmnt.name = name;
    inpElmnt.id = id;

    return inpElmnt;

}

function createLabel (forValue, text) {
    let label = document.createElement("label");
    label.setAttribute("for", forValue);
    label.innerHTML = `${text}<br>`

    return label
}


let form = document.createElement("form");

let title = document.createElement("h3");
title.innerHTML = "Form Submission"


let firstname = createLabel("firstname", "Firstname")
let firstname_inp = createInputElement("email", "email", "email")


form.append(title, firstname, firstname_inp)

document.body.append(form)


