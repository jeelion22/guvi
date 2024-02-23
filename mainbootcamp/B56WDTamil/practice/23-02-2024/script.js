
var date = document.createElement("input")
date.setAttribute("type", "date")
date.id = "dob"



var button = document.createElement("button")
button.setAttribute("type", "button")
button.className = "btn btn-primary"
button.innerHTML = "Click Me!"
button.addEventListener("click", date_data)



function date_data () {
    var input = document.getElementById("dob").value
    var input_date = new Date(input)
    var currentdate = new Date()



    var millisecdiff = parseInt(currentdate.getTime() - input_date.getTime())

    console.log(millisecdiff)

    var second_diff = Math.floor(millisecdiff / 1000);
    var min_diff = Math.floor(second_diff / 60)
    var hours_diff = Math.floor(min_diff /60)
    var days_diff = Math.floor(hours_diff /24)
    
    var yeardiff = currentdate.getFullYear() - input_date.getFullYear()
    var month = (yeardiff*12) + (currentdate.getMonth() - input_date.getMonth())

    var div1 = document.createElement("div")

    div1.innerHTML = `Given input date is ${input_date}`

    var div2 = document.createElement("div")
    var div3 = document.createElement("div")
    var div4 = document.createElement("div")
    var div5 = document.createElement("div")
    var div6 = document.createElement("div")
    var div7 = document.createElement("div")
    var div8 = document.createElement("div")

    div2.innerHTML = `years: ${yeardiff}`
    div3.innerHTML = `months: ${month}`
    div4.innerHTML = `days: ${days_diff}`
    div5.innerHTML = `hours: ${hours_diff}`
    div6.innerHTML = `minutes: ${min_diff}`
    div7.innerHTML = `seconds: ${second_diff}`
    div7.innerHTML = `milli seconds: ${millisecdiff}`

    


    document.body.append(div1, div2, div3, div4, div5, div6, div7, div8)

}
document.body.append(date, button)