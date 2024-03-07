import Button from "./Button"
import Title from "./Title"
import Text from "./Text";


// It is the function that creates over all structure of the card
// along input data

function Card({title, texts}){

    return  (
        <div className="card">
        <Title category={title.category} price={title.price}/>


        <div className="text-body">
        {
            texts.map(
                (obj, index) => {
                    return <Text key={index} symbol={obj.symbol} text={obj.text}/>
                }
            )
        }
   
        </div>

        <Button title = {title.category}/>
        </div>
    )
}

export default Card;