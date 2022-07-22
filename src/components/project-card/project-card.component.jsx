import "./project-card.styles.scss";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
    },
    {
      id: 2,
      title: "Project 2",
    },
    {
      id: 3,
      title: "Project 3",
    },
  ];
  return (
    <div className="project-container">
      {projects.map(({ title }) => (
        <div className="project-container">
          <div className="background-image" />
          <div className="project-body-container">
            <h2>{title}</h2>
            <p>Click to See</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
