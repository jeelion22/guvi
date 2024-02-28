

let rest_data = fetch("https://restcountries.com/v3.1/all").then((data)=> data.json()).then((data1)=> bar(data1))


var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

// var col = document.createElement("div")
// col.className = "col-md-4"


function bar (data1){
    console.log(data1)
    // console.log(data1[0].altSpellings[3])
    // console.log(data1[0].capital[0])
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div")
        col.className = "col-md-4"

        // ${data1[i].flags.png}
        // ${data1[i].altSpellings[3]}
        // ${data1[i].name.common}
        

        col.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${data1[i].flags.png}" class="card-img-top img-thumbnail img-fluid" alt="country flag">
        <div class="card-body">
          <h5 class="card-title">${data1[i].name.common}</h5>
          <p class="card-text">${data1[i].capital[0]}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`

 



      

        row.append(col)
        container.append(row)
        document.body.append(container)

    }
}
