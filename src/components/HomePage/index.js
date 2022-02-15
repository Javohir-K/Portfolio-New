import React from "react";

import TopSec from "../TopSec";
import AboutMe from "../AboutMe";
import SocialIcons from "../SocialIcons";
import ServicesPage from "../ServicesPage";
import ProjectsPage from "../ProjectsPage";
import ResumePage from "../ResumePage";
import ContactPage from "../ContactPage";

import "./HomePage.css";

function index() {
  return (
    <div className="homepage">
      <TopSec />
      <AboutMe />
      <ServicesPage />
      <ProjectsPage />
      <ResumePage />
      <ContactPage />
      <ScrollTop />
      <SocialIcons />
      <div className="bg-line1"></div>
      <div className="bg-line2"></div>
      <div className="bg-line3"></div>
      <div className="bg-line4"></div>
      <div className="bg-line5"></div>
    </div>
  );
}

const ScrollTop = () => {
  function ScrollToTop() {
    window.scrollTo(0, 0);
  }
  window.addEventListener("scroll", function () {
    const x = document.getElementById("BtnScroll");
    let val = window.scrollY;

    if (val > 400) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
  return (
    <button id="BtnScroll" className="btnscrolltop" onClick={ScrollToTop}>
      <i className="fa fa-angle-up"></i>
    </button>
  );
};

export default index;
