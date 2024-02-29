

async function covidData () {
    let data = await fetch("https://data.covid19india.org/v4/min/data.min.json")
    let data1 = await data.json()

    console.log(data1)

    
    var container = document.createElement("div")
    container.className = "container"

    var row = document.createElement("div")
    row.className = "row"


    var col = document.createElement("div")
    col.className = "col-lg-12"
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Chennai</h5>
          <p class="card-text">Confirmed: ${data1.TN.districts.Chennai.total.confirmed}</p>
          <p class="card-text">Deceased: ${data1.TN.districts.Chennai.total.deceased}</p>
          <p class="card-text">Recovered: ${data1.TN.districts.Chennai.total.recovered}</p>
          <p class="card-text">Tested: ${data1.TN.districts.Chennai.total.tested}</p>
          <p class="card-text">Vaccinated1: ${data1.TN.districts.Chennai.total.vaccinated1}</p>
          <p class="card-text">Vaccinated2: ${data1.TN.districts.Chennai.total.vaccinated2}</p>





     
        </div>
      </div>`

 



      

        row.append(col)
        container.append(row)
        document.body.append(container)
}


covidData(0)