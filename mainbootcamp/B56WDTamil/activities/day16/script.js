const div = document.createElement("div")
const h1 = document.createElement("h1")
div.appendChild(h1)
document.body.append(div)

var countDown = 11


setTimeout(()=>{
    
    h1.innerHTML =countDown-= 1
    
    setTimeout(()=>{
        h1.innerHTML = countDown-= 1
        setTimeout(()=> {
            h1.innerHTML = countDown-= 1
            setTimeout(()=> {
                h1.innerHTML = countDown-= 1
                setTimeout(()=>{
                    h1.innerHTML = countDown-= 1
                    setTimeout(()=>{
                        h1.innerHTML = countDown-= 1
                        setTimeout(()=>{
                            h1.innerHTML = countDown-= 1
                            setTimeout(()=>{
                                h1.innerHTML = countDown-= 1
                            
                                setTimeout(()=>{
                                    h1.innerHTML = countDown-= 1
                                    setTimeout(()=> {
                                        h1.innerHTML = countDown-= 1
                                        setTimeout(()=> {
                                            h1.innerHTML = "Happy Independence Day"                                                                     
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)

                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)