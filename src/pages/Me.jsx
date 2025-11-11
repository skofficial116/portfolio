import React from "react";
import AboutIntro from "../components/AboutIntro";
import AboutDetails from "../components/AboutDetails";
import ContactSection from "../components/ContactSection";
import EducationTimeline from "../components/EducationTimeline";
// import Ab
const Me = () => {
  return (
    <main className="bg-[#0B0C10]">
      <AboutIntro />
      <AboutDetails />
      <EducationTimeline/>
      <ContactSection />
    </main>
  );
};

export default Me;
