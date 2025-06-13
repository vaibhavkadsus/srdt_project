import React, { useEffect, useState } from "react";
import photo1 from "../assets/Home/photo1.jpeg";
import photo2 from "../assets/Home/photo2.jpeg";
import photo3 from "../assets/Home/photo3.jpeg";
import photo4 from "../assets/Home/photo4.jpeg";
import photo4 from "../assets/Home/photo5.jpeg";
import photo4 from "../assets/Home/photo6.jpeg";
import "./Home.css";

const images = [photo1, photo2, photo3, photo4];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slide ${index === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Home;
