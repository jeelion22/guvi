import "./Text.css"
import "./Button.css"
import "./Title.css"
import "./Card.css"
import "./App.css"


import Card from "./Card"

// create a function  "CardsContainer" for holding all cards inside it
// it also receives inputs for other components 
function CardsContainer() {

  // creare a variable "titles" which holds a list of objects and each contains title and price property 
  let titles =[{category: "FREE", price: 0}, {category: "PLUS", price: 9},{category: "PRO", price: 49}];
  
  // create an another variable called "texts" to store nested array and each nested array contains an object
  // with neccessory texts
  let texts = [
    [{symbol: "\u2713", text:"Single User"},
    {symbol: "\u2713", text:"50GB Storage"},
    {symbol: "\u2713", text:"Unlimited Public Projects"},
    {symbol: "\u2713", text:"Community Access"},
    {symbol: "\u2715", text:"Unlimited Private Projects"},
    {symbol: "\u2715", text:"Dedicated Phone Support"},
    {symbol: "\u2715", text:"Free Subdomain"},
    {symbol: "\u2715", text:"Monthly Status Reports"}],
    
    [{symbol: "\u2713", text:"Single User"},
    {symbol: "\u2713", text:"50GB Storage"},
    {symbol: "\u2713", text:"Unlimited Public Projects"},
    {symbol: "\u2713", text:"Community Access"},
    {symbol: "\u2713", text:"Unlimited Private Projects"},
    {symbol: "\u2713", text:"Dedicated Phone Support"},
    {symbol: "\u2713", text:"Free Subdomain"},
    {symbol: "\u2715", text:"Monthly Status Reports"}],

    [{symbol: "\u2713", text:"Single User"},
    {symbol: "\u2713", text:"50GB Storage"},
    {symbol: "\u2713", text:"Unlimited Public Projects"},
    {symbol: "\u2713", text:"Community Access"},
    {symbol: "\u2713", text:"Unlimited Private Projects"},
    {symbol: "\u2713", text:"Dedicated Phone Support"},
    {symbol: "\u2713", text:"Free Subdomain"},
    {symbol: "\u2713", text:"Monthly Status Reports"},
  ]
  ]

  // returns a container which contains number of cards equivalent to 
  // the given length of title array

  return (
    <div className="container">
      
        {titles.map((titleObj, index) => {

          // returns a card in each iteration

          return  <Card key = {index} title={titleObj} texts = {texts[index]}/>

        })}   
      

    </div>
  )
}

export default CardsContainer;