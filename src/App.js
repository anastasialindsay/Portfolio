import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ProjectCard from "./components/project-card/project-card.component";
import About from "./components/about/about.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<ProjectCard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
