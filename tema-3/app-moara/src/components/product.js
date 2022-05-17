import PropTypes from "prop-types";

const Product = (props)=>{
      
   return( 
    <>
    <div className="card" >
        <img src={props.srcImage} className="card-img-top" alt="product"/>
        <div className="card-body">
        <h5 className="card-title">{props.nameProduct}</h5>
        <p className="card-text">Price: {props.priceProduct}</p>
        <p className="card-text">Category: <span style={{color: props.colorCategory}}>{props.categoryProduct}</span></p>
    </div>
    </div>
</>
   );
}

Product.prototype = {
    priceProduct: PropTypes.string,
    nameProduct: PropTypes.string,
    categoryProduct: PropTypes.string,
    colorCategory: PropTypes.string,
}
Product.defaultProps= {
    priceProduct:" Price non-existent",
    nameProduct: "Name non-existent",
    categoryProduct: "Category non-existent",
    colorCategory: "purple",
}

export default Product;