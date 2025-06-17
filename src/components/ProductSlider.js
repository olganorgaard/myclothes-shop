import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import './Product.css'
function ProductSlider({slideProducts}){
    return(
         <Swiper
      spaceBetween={20}
      breakpoints={{
        0: {slidesPerView: 1,},
        600: {slidesPerView: 2,}
        }}>
      {slideProducts.map((product) => (
        <SwiperSlide>
          <div key={product.id} className="slider_title">
            <p>{product.title}</p>
            <img src={product.image} alt="clothes" className="slider_image"></img>
          </div>
        </SwiperSlide>
        ))}
        </Swiper>
    )
}
export default ProductSlider;