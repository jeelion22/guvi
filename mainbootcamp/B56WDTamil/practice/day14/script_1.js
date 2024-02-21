
function th (attr, value, data){
    let th = document.createElement("th")
    th.setAttribute(attr, value)
    th.innerHTML = data

    return th
}

function td (data){
    let td = document.createElement("td");
    td.innerHTML = data

    return td

}

function tr () {
    return document.createElement("tr")
}


// table
let table = document.createElement("table");
table.className = "table"

// table head
let thead = document.createElement("thead");
thead.className = "thead-dark"

// header row
let head_row = tr()

let tbody = document.createElement("tbody")

let head_cell1 = th("scope", "col", "#")
let head_cell2 = th("scope", "col", "First")
let head_cell3 = th("scope", "col", "Last")
let head_cell4 = th("scope", "col", "Handle")

head_row.append(head_cell1)
head_row.append(head_cell2)
head_row.append(head_cell3)
head_row.append(head_cell4)
thead.append(head_row)
table.append(thead)

let row1 = tr()
let row2 = tr()
let row3 = tr()

let row1_C1 = th("scope", "row", 1)
let row1_C2 = td("Mark")
let row1_C3 = td("Otto")
let row1_C4 = td("@mdo")


let row2_C1 = th("scope", "row", 2)
let row2_C2 = td("Jacob")
let row2_C3 = td("Thornton")
let row2_C4 = td("@fat")


let row3_C1 = th("scope", "row", 3)
let row3_C2 = td("Larry")
let row3_C3 = td("the Bird")
let row3_C4 = td("@twitter")


row1.append(row1_C1, row1_C2, row1_C3, row1_C4)
row2.append(row2_C1, row2_C2, row2_C3, row2_C4)
row3.append(row3_C1, row3_C2, row3_C3, row3_C4)

tbody.append(row1, row2, row3)

table.append(tbody)













document.body.append(table)