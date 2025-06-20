import ProductSlider from "../components/ProductSlider";
import Homedetails from "../components/Homedetails";
import useFetchProducts from "../hooks/useFetchProducts";

function Home (){

const products = useFetchProducts();
const topRated = products.filter(p => p.rating?.rate > 4.5).slice(0, 4);

    return (
        <div>
            <h1>Popular Products</h1>
           <ProductSlider slideProducts={topRated}/>
           <Homedetails/>
        </div>
    )
}

export default Home;