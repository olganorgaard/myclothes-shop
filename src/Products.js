function Products ({itemForSale}){
return(
    <div className="products">
        {itemForSale.map(item =>{
            const {id, title, price, image} = item;
            return(
                <div key={id} className="product-card">
                    <img src={image} width="300px" height="500px" alt="item" />
                <div className="product-info">
                    <h3>{title}</h3>
                    <h2>${price}</h2>
                </div>
                </div>
            )
        })}
    </div>
)
}

export default Products;