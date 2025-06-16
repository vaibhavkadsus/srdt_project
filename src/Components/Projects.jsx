import React from "react";
import "./Projects.css";

const completedProjects = [
  {
    title: "Baseline Survey – A.M Fresh (U.K)",
    details:
      "Survey conducted in Nashik, Sangli, Satara & Osmanabad for grape growers, farm & pack‑house workers.",
    implementedBy: "IRFT & Sai Rural Development Trust",
  },
  {
    title: "Baseline Survey – Syngenta Bioscience Pvt. Ltd",
    details:
      "Survey conducted in Goa for community workers, SHGs & Gram Panchayats.",
    implementedBy: "IRFT & Sai Rural Development Trust",
  },
  {
    title: "Health & Safety Farmer Awareness Programme",
    details:
      "Training program for 5,000 farmers and 500 spray‑men in Khargone (MP) including a 50‑day awareness van campaign and PPE usage demo.",
    implementedBy: "Syngenta India Ltd",
  },
  {
    title: "Regenerative Agriculture Practices",
    details:
      "Training for ~1,000 growers in Maharashtra, Gujarat & Karnataka on regenerative farming practices like minimal soil disturbance, crop diversity, and livestock integration.",
    implementedBy: "Syngenta India Ltd",
  },
  {
    title: "Health Camp & PPE Kit Distribution",
    details:
      "Organized a health camp and distributed PPE kits to 400 farmers in Devulgaon Raja, Maharashtra.",
    implementedBy: "East West Seeds India Pvt. Ltd",
  },
  {
    title: "SAVE 3.0 – Soil Health & Mulch Recycling",
    details:
      "Soil testing of 400 growers in Devulgaon Raja, Lonar, Washim & Nanded with training on soil health awareness and recommendations.",
    implementedBy: "Syngenta India Ltd",
  },
];

const ongoingProjects = [
  {
    title: "SAVE 3.0 – Soil Health & Mulch Recycling",
    details:
      "Soil testing of 400 growers in Devulgaon Raja, Lonar, Washim & Nanded with training on soil health awareness and recommendations.",
    implementedBy: "Syngenta India Ltd",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="page-title">Our Projects</h1>

      <section>
        <h2>Completed Projects</h2>
        {completedProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <p className="implemented-by">Implemented by: <strong>{project.implementedBy}</strong></p>
          </div>
        ))}
      </section>

      <section>
        <h2>Ongoing Projects</h2>
        {ongoingProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <p className="implemented-by">Implemented by: <strong>{project.implementedBy}</strong></p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
