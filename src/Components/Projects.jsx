import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

import photo1 from "../assets/Project 1/photo1.JPG";
import photo2 from "../assets/Project 1/photo2.JPG";
import photo3 from "../assets/Project 1/photo3.JPG";
import photo4 from "../assets/Project 1/photo4.JPG";

import photo11 from "../assets/Project 2/photo11.JPG";
import photo12 from "../assets/Project 2/photo12.JPG";
import photo13 from "../assets/Project 2/photo13.JPG";
import photo14 from "../assets/Project 2/photo14.JPG";

import farmer1 from "../assets/Project 3/farmer1.JPG";
import farmer2 from "../assets/Project 3/farmer2.JPG";
import farmer3 from "../assets/Project 3/farmer3.JPG";
import farmer4 from "../assets/Project 3/farmer4.JPG";
import farmer5 from "../assets/Project 3/farmer5.JPG";
import farmer6 from "../assets/Project 3/farmer6.JPG";
import farmer7 from "../assets/Project 3/farmer7.JPG";
import farmer8 from "../assets/Project 3/farmer8.JPG";
import farmer9 from "../assets/Project 3/farmer9.JPG";

import photo41 from "../assets/Project 6/photo41.JPG";
import photo42 from "../assets/Project 6/photo42.JPG";
import photo43 from "../assets/Project 6/photo43.JPG";
import photo44 from "../assets/Project 6/photo44.jpg";
import photo45 from "../assets/Project 6/photo45.jpg";
import photo46 from "../assets/Project 6/photo46.jpg";
import photo47 from "../assets/Project 6/photo47.jpg";


const projects = [
  {
    title: "Baseline Survey",
    founder: "A.M Fresh (U.K)",
    implementing: "IRFT and SRDT",
    period: "2 months (2022)",
    description: "A survey was conducted in Nashik, Sangli, Satara and Osmanabad Districts of Maharashtra to have a first-hand account of development expectations from the grape growers, farm workers and packhouse workers.",
    images: [photo1, photo2, photo3, photo4],
  },
  {
    title: "Baseline Survey",
    founder: "Syngenta Bioscience Pvt. Ltd.",
    implementing: "IRFT and SRDT",
    period: "1 month (2022)",
    description: "A survey was conducted in Goa to have first-hand account of the community development expectations from the community workers, SHGs, and Gram Panchayat.",
    images: [photo11, photo12, photo13, photo14],
  },
  {
    title: "Health and Safety Farmer Awareness Programme",
    founder: "Syngenta",
    implementing: "SRDT",
    period: "5 months (2022-23)",
    description: "We trained 5000 farmers and 500 spray-men from Maheshwar and Bhagwanpura blocks of Khargone District, MP on farmers' health and safety while using and handling chemicals, followed by usage of Syngenta PPE kit and demonstrations. A 50-day van campaign was organized to reach maximum farmers and villagers with safety messages.",
    images: [farmer1, farmer2, farmer3, farmer4, farmer5, farmer6, farmer7, farmer8, farmer9],
  },
  {
    title: "Baseline Mapping: Management Systems and Labor Conditions",
    founder: "Patagonia",
    implementing: "IRFT and SRDT",
    period: "1 month (2023)",
    description: `Location: Sambhajinagar

Mapping Objectives:
1. Chain of custody tracking and traceability for cotton-in-conversion.
2. Mapping farmer contracting, premium payments, training, and labor monitoring.
3. Understanding transition challenges to regenerative agriculture.
4. Studying verification systems and working conditions.
5. Recommendations to Patagonia.`,
    images: [],
  },
  {
    title: "Syngenta Good Growth Plan",
    founder: "Syngenta",
    implementing: "SRDT & IRFT",
    period: "1 month (2023)",
    description: `Location: Maharashtra, Gujarat and Karnataka

Grower training on regenerative agriculture practices (1000 growers trained).

Key Principles:
• Minimized soil disturbance
• Plants in the ground year-round
• Diversified crops
• Precision application of inputs
• Integrated livestock when possible`,
    images: [],
  },
  {
    title: "Health Camp and Awareness for 400 Farmers",
    founder: "East West India Seeds Pvt. Ltd",
    implementing: "SRDT",
    period: "21st Dec 2023",
    description: `Location: Devulgaon Raja, Maharashtra

Health camp, PPE kit distribution, and safety awareness session for 400 farmers.`,
    images: [photo41, photo42, photo43, photo44, photo45, photo46, photo47],
  },
  {
    title: "SAVE 3.0: Soil Health and Mulch Collection & Recycling",
    founder: "Syngenta",
    implementing: "SRDT",
    period: "1 year (2023-24)",
    description: `Location: Devulgaon Raja, Lonar, Washim, Nanded (Maharashtra)

Soil Health: Soil testing of 400 growers, analysis of test reports by soil experts, and awareness sessions for growers based on recommendations.`,
    images: [],
  },
  {
    title: "Health Camp and Awareness for 700 Farmers",
    founder: "East West India Seeds Pvt. Ltd",
    implementing: "SRDT",
    period: "11th Dec 2024",
    description: `Location: Devulgaon Raja, Maharashtra

Health camp, PPE kit distribution, and safety awareness programme for 700 farmers held on 11th December 2024.`,
    images: [],
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
