import "./cards.styles.scss";

const App = () => {
  const exampleCode = [
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
    {
      id: 5,
      title: "Project 5",
    },
  ];
  return (
    <div className="cards-container">
      {exampleCode.map(({ title }) => (
        <div className="card-container">
          <div className="background-image" />
          <div className="card-content-container">
            <h2>{title}</h2>
            <p>Click to See</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
