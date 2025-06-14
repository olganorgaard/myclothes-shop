import { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";
import Homedetails from "./Homedetails";

function Home (){

    const [slideProducts, setSlideProducts] = useState([])

     useEffect (() =>{
        const getProductsForSlider = async () =>{
          const response = await fetch(`https://fakestoreapi.com/products`)
          const data = await response.json();
          console.log(data)
          
          setSlideProducts(data);
          
        }
        getProductsForSlider()
      }, [])

      const topRated = slideProducts.filter(p => p.rating?.rate > 4.5).slice(0, 4);

    return (
        <div>
            <h1>Popular Products</h1>
           <ProductSlider slideProducts={topRated}/>
           <Homedetails/>
        </div>
    )
}

export default Home;