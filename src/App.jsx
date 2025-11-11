import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SkillsPage from "./pages/SkillPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import Services from "./pages/ServicesPage";
import Me from "./pages/Me";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-5"></div>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/me" element={<Me />} />
        <Route path="*" element={<Home />} />{" "}
      </Routes>
    </>
  );
};

export default App;
