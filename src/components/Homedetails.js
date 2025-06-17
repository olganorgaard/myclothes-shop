import image1 from "../assets/delivery.jpg";
import image2 from "../assets/card.jpg";
import image3 from "../assets/return.jpg";
import image4 from "../assets/support.jpg";
import '../pages/Home.css'

function Homedetails() {
    return (
        <div className="homedetails">
            <h2>Advantages of the store</h2>
            <div className="homedetails-grid">
                <div className="homeitem">
                    <h3>Free delivery</h3>
                    <img src={image1} alt="Free delivery" />
                </div>
                <div className="homeitem">
                    <h3>Secure payment</h3>
                    <img src={image2} alt="Secure payment" />
                </div>
                <div className="homeitem">
                    <h3>Easy return</h3>
                    <img src={image3} alt="Easy return" />
                </div>
                <div className="homeitem">
                    <h3>Support 24/7</h3>
                    <img src={image4} alt="Support 24/7" />
                </div>
            </div>
        </div>
    );
}

export default Homedetails;
