
// This function acceps values from "category" and "price"
// And inserts those values into title elements as shown below
function Title({category, price}) {
    return (
        <div className="title">
            <h5>{category}</h5>
            <h2>${price}/month</h2>
        </div>
    )
}

export default Title;