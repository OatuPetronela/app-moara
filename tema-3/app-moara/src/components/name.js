import { useState } from "react";

    const Name= (props) =>{
        const [color, SetColor] = useState(false);
        const changeColor= () =>{
            SetColor(!color);
        }
    return (
     <div  >
        <h2 className={`color ${color ? "color-blue" : ""}`} onClick={changeColor}>{props.myName} {color ? ' -The name next to it is colored' : ''}</h2>
   </div>
)
}

export default Name;