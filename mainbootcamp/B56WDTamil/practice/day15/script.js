





function foo () {
    let fname = document.getElementById("firstname").value
    let mname = document.getElementById("middlename").value
    let lname = document.getElementById("lastname").value
    let email = document.getElementById("email").value

    let res = document.createElement("div")
    res.innerHTML = `<br>
    
    Firstname: ${fname} <br>
    Middlename: ${mname} <br>
    Lastname: ${lname} <br>
    Email: ${email}`
    


   document.body.append(res)


}
 











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



let submit = document.createElement("input")
submit.type = "button"
submit.value = "Click me!"
submit.setAttribute("onclick", "foo()")


document.body.append(
    firstname, fname_br, firstname_inp, line1, 
    middlename, mname_br, middlename_inp, line2,
    lastname, lname_br,lastname_inp, line3,
    email, email_br, email_input, line4,
    pwd, pwd_br, pwd_input, line5, submit)