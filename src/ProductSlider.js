import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
          <div key={product.id}  style={{ textAlign: 'center' }}>
            <p>{product.title}</p>
            <img src={product.image} alt="clothes" style={{ height: 200, objectFit: 'contain' }}></img>
          </div>
        </SwiperSlide>
        ))}
        </Swiper>
    )
}
export default ProductSlider;