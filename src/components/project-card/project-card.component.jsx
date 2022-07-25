import { Link, Navigate } from "react-router-dom";

import "./project-card.styles.scss";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "Mock Employee Directory",
      nav: "/employee-lookup",
    },
    {
      id: 2,
      title: "Mock Landing Page",
      nav: "/landing-page",
    },
    {
      id: 3,
      title: "Project 3",
      nav: "/project03",
    },
    // {
    //   id: 4,
    //   title: "Project 4",
    // },
  ];
  return (
    <div className="project-card-container" key={projects.id}>
      {projects.map(({ title, nav }) => (
        <div className="project-card">
          <div className="project-title">
            <h2>{title}</h2>
            <Link to={nav}>Click here</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
