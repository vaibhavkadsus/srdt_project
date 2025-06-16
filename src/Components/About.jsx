import React from "react";
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Empowering rural communities through sustainable development</p>
      </div>

      <div className="about-section">
        <img
          src="src\assets\About\Grower Awareness Session 4.jpg"
          alt="Sai Rural Development Trust"
        />
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Sai Rural Development Trust (SRDT), registered under the Mumbai Public Trust
            Act, works at the grassroots level to uplift farmers, women, SHGs, and rural
            communities through social programs and sustainable practices.
          </p>
        </div>
      </div>

      <div className="about-cards">
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To empower underprivileged individuals and communities to live with dignity
            and actively contribute to society.
          </p>
        </div>
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To drive social change, inclusion, and community integration through
            education, healthcare, and skill development.
          </p>
        </div>
      </div>

      <div className="about-values">
        <h2>Our Core Values</h2>
        <div className="value-tags">
          {["Responsibility", "Accountability", "Transparency", "Innovation", "Equality", "Participation", "Creativity"]
            .map((val) => (
              <span key={val}>{val}</span>
          ))}
        </div>
      </div>

      <div className="chairman-message">
        <h2>Message from the Chairman</h2>
        <p>
          “It’s our duty and responsibility to give back to society. With our team’s
          dedication and support, we are building a brighter future for all.”
        </p>
        <p><strong>– Mr. Ram Santram Mise</strong></p>
      </div>

      <div className="about-contact">
        <p>📍 Address: Masnerwadi, Gangakhed, Parbhani – 431514, Maharashtra</p>
        <p>📧 Email: sairuraldevelopmenttrust@gmail.com</p>
        <p>📞 Phone: +91 99202 41110</p>
      </div>
    </div>
  );
};

export default About;
