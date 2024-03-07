
function Button({title}) {
    return (
        
        // the style is applied to the button when the card's title is "PRO"
        // it is for making customers to intentionaly focus on this 
        // to make them attention

        <button style={{background: `${title=="PRO"? "blue": "yello"}`}}>
            BUTTON
        </button>
    )
}

export default Button;