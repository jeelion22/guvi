Async and Await!!!
It's helps us to write the promises easier
it's a syntatic way of writing the promises..

where it is applied??
it is applied in the functions!!!

A normal function can be converted into async function 
by applying the keyword called  "Async"

An Async function always returns the Promise...

Await:
Await is used within Async Function...
wait helps us to wait until the promise get resolved

function bar(){
  return new Promise((resolve,reject)=>resolve("this is resolved!!!"))
}


async function foo(){
  let res = await bar();
  console.log(res)
}
foo()


async function foo(){
  let res = await fetch("https://restcountries.com/v3.1/all")
  let res1 = await res.json()
  console.log(res1)
}
foo()


async function getdata(){
  var res = await fetch("https://restcountries.com/v3.1/all")
  var res1 = await res.json()
 for(var i =0;i<res1.length;i++){
  var latitude = res1[i].latlng
  putdata(...latitude)
 }
}

async function putdata(lat,lon){
  var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`)
  var res1 = await res.json()
  console.log(res1.main.temp)
}

try-catch: Error Handling Statements!!
try:consist of testing Block
catch: to handle the errors



function getlist(){
  return new Promise((resolve,reject)=>reject("This is rejected!!"))
}

function getdata(){
  return new Promise((resolve,reject)=>resolve("This is resolved!!"))
}
async function foo(){
try {
let data = await getdata()
console.log(data);
let res = await getlist()
console.log(`This is statement after the error block ${res}`); 
} catch (error) {
  console.log(error)
} 
}
foo()
