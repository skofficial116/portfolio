import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import SkillsPage from "./pages/SkillPage";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProjectsPage from "./pages/ProjectsPage";
import Services from "./pages/ServicesPage";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-5"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<Services />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </>
  );
};

export default App;
