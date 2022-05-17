const CardColor = (props)=>{
  const handleRemove = () => {
    props.handleRemove(props.id);
}

return(
    <>
    <div className="card" style={{backgroundColor: props.backgroundColorCard}}>
  <div className="card-body">
    <h5 className="card-title">{props.backgroundColorCard}</h5>
    {props.handleRemove && (<div onClick={handleRemove} className="removeColor">X</div>)}
  </div>
</div> 
</>
)
}

export default CardColor;