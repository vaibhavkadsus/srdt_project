import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

import photo1 from "../assets/Project 1/photo1.JPG";
import photo2 from "../assets/Project 1/photo2.JPG";
import photo3 from "../assets/Project 1/photo3.JPG";
import photo4 from "../assets/Project 1/photo4.JPG";
import photo11 from "../assets/project 2/photo11.JPG";
import photo12 from "../assets/project 2/photo12.JPG";
import photo13 from "../assets/project 2/photo13.JPG";
import photo14 from "../assets/project 2/photo14.JPG";

const projects = [
  {
    title: "Baseline Survey",
    founder: "A.M Fresh (U.K)",
    implementing: "IRFT and SRDT",
    period: "2 months (2022)",
    description:
      "A survey was conducted in Nashik, Sangli, Satara and Osmanabad Districts of Maharashtra to have a first-hand account of development expectations from the grape growers, farm workers, and packhouse workers.",
    images: [photo1, photo2, photo3, photo4],
  },
  {
    title: "Baseline Survey",
    founder: "Syngenta Bioscience Pvt. Ltd.",
    implementing: "IRFT and SRDT",
    period: "1 month (2022)",
    description:
      "A survey was conducted in Goa to understand community development expectations from community workers, SHGs, gram panchayat, grape growers, farm workers, and packhouse workers.",
    images: [photo11, photo12, photo13, photo14],
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="completed-projects">
      <h2 className="heading">Completed Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <Slider {...settings}>
              {project.images.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={`Slide ${i + 1}`} className="project-image" />
                </div>
              ))}
            </Slider>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p><strong>Funder Name:</strong> {project.founder}</p>
              <p><strong>Implementing Agencies:</strong> {project.implementing}</p>
              <p><strong>Period of Intervention:</strong> {project.period}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
