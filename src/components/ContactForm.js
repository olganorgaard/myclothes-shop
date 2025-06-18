import { useState } from "react";
import Swal from "sweetalert2";
import '../styles/About.css'

function ContactForm() {
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
  );
}

export default ContactForm;
