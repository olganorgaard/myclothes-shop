import { useEffect, useState } from "react";
import Products from "../components/Products";
import Filter from "../components/Filter";

function Catalog (){

    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])

    useEffect (() =>{
    const getProducts = async () =>{
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json();
      console.log(data)
      
      setProducts(data);
      setAllProducts(data)
    }
    getProducts()
  }, [])

      const choosenProducts = (category) =>{
        const newClothes = allProducts.filter(item => item.category.startsWith(category))
        setProducts(newClothes)
    }

    const resetProducts = () =>{
        setProducts(allProducts);
    }

    return (
        <div>
            <Filter filteredProducts={choosenProducts} resetProducts= {resetProducts} />
            <Products itemForSale={products} />
        </div>
    )
}

export default Catalog;