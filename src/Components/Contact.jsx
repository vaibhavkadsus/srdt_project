import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        {status && <div className="status-message">{status}</div>}
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Address:</strong> Registered office: At: Masnerwadi, Tq: Gangakhed, Dist: Parbhani - 431514.</p>
        <p><strong>Phone:</strong> 9920241110</p>
        <p><strong>Email:</strong> sairuraldevelopmenttrust@gmail.com</p>

        <h4>Find Us Here:</h4>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?ll=18.932863,76.840078&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1708031553330880014"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
