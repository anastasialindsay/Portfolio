import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ProjectCard from "./components/project-card/project-card.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import EmployeeLookup from "./components/projects/employee-lookup.component";
import LandingPage from "./components/projects/landing-page.component";
import Project03 from "./components/projects/project03.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<ProjectCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employee-lookup" element={<EmployeeLookup />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/project03" element={<Project03 />} />
      </Route>
    </Routes>
  );
};

export default App;
