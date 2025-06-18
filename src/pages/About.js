
import '../styles/About.css'
import ContactForm from "../components/ContactForm";

function About() {
  return (
    <div className="container">
      <h1>Welcome to MyClothes – Your Style, Your Statement.</h1>
      <p>At MyClothes, we believe fashion is more than just clothing — it's a form of self-expression. Since our founding, we’ve been committed to helping people feel confident, comfortable, and stylish in their everyday lives.
        Whether you're looking for the latest trends, timeless basics, or bold statement pieces, MyClothes offers a carefully curated collection that suits every personality and occasion. Our team is passionate about bringing you high-quality, affordable fashion that celebrates individuality and inclusivity.
        We’re more than a clothing store — we’re a community. From our customer-first service to our sustainable sourcing efforts, everything we do is driven by care, creativity, and a desire to make fashion accessible for everyone.
        Thank you for being part of the MyClothes story. Let’s make fashion fun again — together.</p>

      <h3>Contact Us</h3>
      <ContactForm/>
    </div>
  );
}

export default About;
