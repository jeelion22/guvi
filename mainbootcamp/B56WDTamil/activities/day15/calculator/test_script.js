async function getUserName(){
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let result = await response.json()

  result.forEach((obj) => {
    console.log(obj.username)
  })
}


getUserName()