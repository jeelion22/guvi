

// create component(function) for creating text

function Text({symbol, text}) {

    return (
        
            <p style={{color: `${symbol !== "\u2715"?"black":"gray"}`}}><span style={{fontSize:"10px"}}><strong>{symbol}</strong></span><span> {text}</span></p>

    )

}

export default Text;