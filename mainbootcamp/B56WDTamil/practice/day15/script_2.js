

var div = document.createElement("div")

div.innerHTML = "This is span content"

document.body.append(div)




var name = window.prompt("Enter your name: ")

var span2 = document.createElement("span")

span2.innerHTML = `Entered name: ${name}`

document.body.append(span2)

