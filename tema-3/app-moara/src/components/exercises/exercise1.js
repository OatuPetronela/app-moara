import Product from "../product";

const Exercise1 = ()=>{

return (
<div className='row p-2'>
<div className="text-center"><h3>Exercise 1</h3></div>
<div className="d-flex col-12">
<Product nameProduct="Yogurt" priceProduct="1.5 $" categoryProduct="Dairy product" colorCategory="red" srcImage="https://links.imagerelay.com/cdn/34/ql/282fabfc4b8048cf8291d96b0267e502/331160fd-a409-4505-ae1d-a7c426817a14.jpg"/>
<Product nameProduct="Cheese" priceProduct="2.7 $" categoryProduct="Dairy product" colorCategory="red" srcImage="https://alexfortrade.com/wp-content/uploads/2021/02/square.jpg"/>
<Product nameProduct="Chocolate" priceProduct="2.0 $" categoryProduct="Sugary product" colorCategory="blue" srcImage="https://images.unsplash.com/photo-1623660053975-cf75a8be0908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwYmFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
<Product nameProduct="Mango" priceProduct="1.6 $" categoryProduct="Fruit" colorCategory="orange" srcImage="https://images.immediate.co.uk/production/volatile/sites/30/2018/08/mango-fee0d79-e1648560084294.jpg?quality=90&resize=768,574"/>
<Product nameProduct="Bread" priceProduct="0.99 $" categoryProduct="Bakery product" colorCategory="yellow" srcImage="https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg"/>
<Product />
</div>
</div>
)
}

export default Exercise1;