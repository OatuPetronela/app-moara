import { useState } from "react";

const FormColor= (props)=>{
    const [color, setColor] = useState('')
    const [backgroundColorCard, setBackgroundColorCard] = useState('#000000')
    
    const handleClick= ()=>{
    props.handleClick({backgroundColorCard, color})
    }
            
    return(
        <div>
            <input type="color" value={backgroundColorCard} onChange={(e)=> setBackgroundColorCard(e.target.value)}></input>
            <button onClick={handleClick} className="btn btn-success">Add</button>
        </div>
    )
}

export default FormColor; 