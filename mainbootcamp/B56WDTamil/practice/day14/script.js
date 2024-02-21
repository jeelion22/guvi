// let ele = document.createElement("div");
// ele.innerHTML = "This is a div tag";
// ele.className = "main"
// ele.id = "main"

// let a = document.createElement("a") ;
// a.setAttribute("href", "https:www.google.com")
// a.setAttribute("target", "_blank")
// a.innerHTML = "Google"
// document.body.append(ele, a);


// for nest elements


// let div1 = document.createElement("div") ;
// div1.className = "container" ;


// let div2 = document.createElement("div") ;
// div2.className = "row" ;


// let div3 = document.createElement("div") ;
// div3.className = "col" ;
// div3.innerHTML = "This is as Bootstrap"

// div2.append(div3) ;
// div1.append(div2) ;

// document.body.append(div1)


function foo () {
    let fname = document.getElementById("firstname").value
    let mname = document.getElementById("middlename").value
    let lname = document.getElementById("lastname").value
    let email = document.getElementById("email").value


    console.log(
    `
    Firstname: ${fname}
    Middlename: ${mname}
    Lastname: ${lname}
    Email: ${email}`)
}


// let form = document.createElement("form") ;


// let lbl_firstname  = document.createElement("lable" )
// lbl_firstname.setAttribute("for", "firstname")
// lbl_firstname.innerHTML = "Firstname"

// let break1 = document.createElement("br") ;

// let inp_fname = document.createElement("input") ;
// inp_fname.type = "text" ;
// inp_fname.name = "firstname" ;
// inp_fname.id = "firstname" ;

// let break2 = document.createElement("br") ;


// let lbl_middlename  = document.createElement("lable")
// lbl_middlename.setAttribute("for", "secondname")
// lbl_middlename.innerHTML = "Middlename"

// let break3 = document.createElement("br") 


// let inp_mname = document.createElement("input") ;
// inp_mname.type = "text" ;
// inp_mname.name = "middlename" ;
// inp_mname.id = "middlename"

// let break4 = document.createElement("br")


// let lbl_lastname  = document.createElement("lable")
// lbl_lastname.setAttribute("for", "lastname")
// lbl_lastname.innerHTML = "Lastname "

// let break5 = document.createElement("br")


// let inp_lname = document.createElement("input") ;
// inp_lname.type = "text" ;
// inp_lname.name = "lastname" ;
// inp_lname.id = "lastname"

// let break6 = document.createElement("br")


// let lbl_email  = document.createElement("lable")
// lbl_email.setAttribute("for", "email")
// lbl_email.innerHTML = "Email "

// let break7 = document.createElement("br")


// let inp_email = document.createElement("input") ;
// inp_email.type = "email" ;
// inp_email.name = "email" ;
// inp_email.id = "email"

// let break8 = document.createElement("br")

let submit = document.createElement("input")
submit.type = "button"
submit.value = "Click me!"
submit.setAttribute("onclick", "foo()")



// form.append(lbl_firstname, break1, inp_fname, break2, lbl_middlename, break3, inp_mname, break4, lbl_lastname, break5, inp_lname,
//     break6, lbl_email, break7, inp_email, break8, submit)

// document.body.append(form)





function label_create(tagname, attrname,  attrvalue, content) {
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname, attrvalue) ;
    ele.innerHTML=content ;
    return ele
}

function break_create() {
    var ele = document.createElement("br")

    return ele
}

function input_create(tagname, attr1name, attr1value, attr2name, attr2value) {
    var element = document.createElement(tagname) ;
    element.setAttribute(attr1name, attr1value)
    element.setAttribute(attr2name, attr2value)

    return element

}


//  <label for=""></label>
{/* <input type="email" name="" id=""> */}


var firstname = label_create("label", "for", "firstname", "Firstname") ;
var fname_br = break_create();
var firstname_inp = input_create("input", "type", "text", "id", "firstname")

var line1 = break_create()

var middlename = label_create("label", "for", "middlename", "Middlename") ;
var mname_br = break_create();
var middlename_inp = input_create("input", "type", "text", "id", "middlename")

var line2 = break_create()



var lastname = label_create("label", "for", "lastname", "Lastname") ;
var lname_br = break_create();
var lastname_inp = input_create("input", "type", "text", "id", "lastname")

var line3 = break_create()



var email = label_create("label", "for", "email", "Email")
var email_br = break_create()
var email_input = input_create("input", "type", "email", "id", "email")

var line4 = break_create()


var pwd = label_create("label", "for", "pwd", "Password")
var pwd_br = break_create()
var pwd_input = input_create("input", "type", "password", "id", "pwd")

var line5 = break_create()



document.body.append(
    firstname, fname_br, firstname_inp, line1, 
    middlename, mname_br, middlename_inp, line2,
    lastname, lname_br,lastname_inp, line3,
    email, email_br, email_input, line4,
    pwd, pwd_br, pwd_input, line5, submit)