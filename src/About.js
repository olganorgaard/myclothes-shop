import { useState } from "react";
import Swal from "sweetalert2";


function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Thank you! We received your message!",
        icon: "success",
        draggable: true
        });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h1>Welcome to MyClothes – Your Style, Your Statement.</h1>
      <p>At MyClothes, we believe fashion is more than just clothing — it's a form of self-expression. Since our founding, we’ve been committed to helping people feel confident, comfortable, and stylish in their everyday lives.
        Whether you're looking for the latest trends, timeless basics, or bold statement pieces, MyClothes offers a carefully curated collection that suits every personality and occasion. Our team is passionate about bringing you high-quality, affordable fashion that celebrates individuality and inclusivity.
        We’re more than a clothing store — we’re a community. From our customer-first service to our sustainable sourcing efforts, everything we do is driven by care, creativity, and a desire to make fashion accessible for everyone.
        Thank you for being part of the MyClothes story. Let’s make fashion fun again — together.</p>

      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit} className="submit_form">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="form-control"
        ></textarea>
        <button type="submit" className="about_btn">Submit</button>
      </form>
    </div>
  );
}

export default About;
