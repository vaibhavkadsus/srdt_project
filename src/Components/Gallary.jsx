import React, { useState } from "react";
import "./Gallary.css";

import img1 from "../assets/Gallary/IMG_8190.JPEG";
import img2 from "../assets/Gallary/IMG_8203.JPEG";
import img3 from "../assets/Gallary/IMG_8248.JPEG";
import img4 from "../assets/Gallary/IMG_8287.JPEG";
import img5 from "../assets/Gallary/IMG_8307.JPEG";
import img6 from "../assets/Gallary/Mulch Collection.jpg";
import img7 from "../assets/Gallary/Pre-Awareness Session 2.jpeg";
import img8 from "../assets/Gallary/RAP  3.JPG";
import img9 from "../assets/Gallary/RAP 1.JPG";
import img10 from "../assets/Gallary/RAP 2.JPG";
import img11 from "../assets/Gallary/RAP 3.JPG";
import img12 from "../assets/Gallary/Soil Sample Collection 2.jpeg";
import img13 from "../assets/Gallary/Syn BS 1.JPG";
import img14 from "../assets/Gallary/Syn BS 2.JPG";
import img15 from "../assets/Gallary/Syn BS 3.JPG";
import img16 from "../assets/Gallary/Syn BS 4.JPG";
import img17 from "../assets/Gallary/unnamed.jpg";
import img18 from "../assets/Gallary/Van Campaign 3.JPG";
import img19 from "../assets/Gallary/AMF  bs4.JPG";
import img20 from "../assets/Gallary/AMF BS 1.JPG";
import img21 from "../assets/Gallary/AMF bs 2.JPG";
import img22 from "../assets/Gallary/AMF bs3.JPG";
import img23 from "../assets/Gallary/Farmer Awarness Sessions 3.JPG";
import img24 from "../assets/Gallary/Grower Awareness Session 2.jpg";
import img25 from "../assets/Gallary/Grower Awareness Session 3.jpg";
import img26 from "../assets/Gallary/Grower Awareness Session 4.jpg";
import img27 from "../assets/Gallary/Grower Awareness Session 5.jpg";
import img28 from "../assets/Gallary/Grower Awareness Session.JPG";
import img29 from "../assets/Gallary/Health Camp (Health & Safety Awareness Session).JPG";
import img31 from "../assets/Gallary/Health Camp 1.JPG";
import img32 from "../assets/Gallary/IMG_1627.jpg";
import img33 from "../assets/Gallary/IMG_1629.jpg";
import img34 from "../assets/Gallary/IMG_1666.jpg";
import img35 from "../assets/Gallary/IMG_1683.jpg";
import img36 from "../assets/Gallary/IMG_1846.jpg";
import img37 from "../assets/Gallary/IMG_1859.jpg";
import img38 from "../assets/Gallary/IMG_1860.jpg";
import img39 from "../assets/Gallary/IMG_1924.jpg";
import img40 from "../assets/Gallary/IMG_2171.JPG";
import img41 from "../assets/Gallary/IMG_8121.JPEG";
import img42 from "../assets/Gallary/IMG_8127.JPEG";
import img43 from "../assets/Gallary/IMG_8128.JPEG";
import img44 from "../assets/Gallary/IMG_8130.JPEG";

const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44,
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(img)}>
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Full view" className="modal-content" />
        </div>
      )}
    </div>
  );
};

export default Gallary;
