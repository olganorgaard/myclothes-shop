import './Product.css'
function Filter ({filteredProducts, resetProducts}){
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredProducts("men")}>Men</button>
            <button className="change" onClick={() => filteredProducts("women")}>Women</button>
            
            <button className="change" onClick={() => filteredProducts("jewelery")}>Jewelery</button>
            <button className="change" onClick={() => filteredProducts("electronics")} >Electronics</button>
            <button className="change" onClick={resetProducts}>All</button>
        </div>
    )
}

export default Filter;