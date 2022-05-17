import { useState } from "react";
import CardColor from "../cardColor";
import FormColor from "../formColor";

const Exercise3 = ()=>{
    const [colors, setColors] = useState([
        { id: 0, backgroundColorCard:"pink"},
    ])
    
const addColor= (color)=>{
    const newColors = [...colors];
    color.id= colors.length;
    newColors.push(color);
    setColors(newColors);
}
const removeColor= (id)=>{
    const newColors = colors.filter(color=> color.id !== id);
    setColors(newColors);
}
    return(
    <div className='row'>
        <div className="col-2">
        <h3>Exercise 3</h3>
        </div>
        <div className="col-2">
        <FormColor handleClick={addColor}/>
        </div>
        <div className="d-flex col-8">
        {colors.map((color) => (
            <CardColor key={color.id} {...color} handleRemove={removeColor}/>
        ))}
        </div>
        <hr/>
    </div>
    );
    };
    export default Exercise3;