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
    {
      id: 4,
      title: "Project 4",
    },
  ];
  return (
    <div className="project-card-container" key={projects.id}>
      {projects.map(({ title }) => (
        <div className="project-card">
          <div className="project-title">
            <h2>{title}</h2>
            <p>Click to See</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
