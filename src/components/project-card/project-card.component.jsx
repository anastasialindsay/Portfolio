import { Link } from "react-router-dom";

import "./project-card.styles.scss";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "Mock Employee Directory",
      nav: "/employee-lookup",
      description:
        "Meant for internal use, ideally, an intranet page like this would pull the data from the ERP or accounting software. For this project the fake-data is from JSONPlaceholder.typicode.com. It's a riff on one of the first React projects I completed called 'Monster's Rolodex.'",
    },
    {
      id: 2,
      title: "Mock Landing Page",
      nav: "/landing-page",
      description:
        "I used Material UI components for the text field and button.  The text field checks for a valid email address with error feedback on the page.  The button currently clears the text field.",
    },
    {
      id: 3,
      title: "Comming Soon...",
      nav: "/project03",
      description: "",
    },
    // {
    //   id: 4,
    //   title: "Project 4",
    // description: "",
    // },
  ];
  return (
    <div className="project-card-container">
      {projects.map(({ id, title, nav, description }) => (
        <div className="project-card" key={id}>
          <div className="project-title">
            <h2>{title}</h2>
            <Link to={nav}>Click here</Link>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
