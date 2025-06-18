import { useEffect, useState } from "react";
import Products from "../components/Products";
import Filter from "../components/Filter";
import useFetchProducts from "../hooks/useFetchProducts";

function Catalog (){

    const allProducts = useFetchProducts();
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect (() =>{
        setFilteredProducts(allProducts)
    }, [allProducts])

    const handleFilter  = (category) =>{
        const newClothesList = allProducts.filter(item => item.category.startsWith(category))
        setFilteredProducts(newClothesList)
    }

    const resetProducts = () =>{
        setFilteredProducts(allProducts);
    }

    return (
        <div>
            <Filter filteredProducts={handleFilter } resetProducts= {resetProducts} />
            <Products itemForSale={filteredProducts} />
        </div>
    )
}

export default Catalog;