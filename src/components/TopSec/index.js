import React from "react";

import BgImg from "../../images/bimg.jpg";
//css
import "./TopSec.css";
import Typed from "react-typed";

function index() {
  window.addEventListener("scroll", function () {
    const x = document.getElementById("BImg");
    var value = window.scrollY;

    x.style.top = value * 0.5 + "px";

    // x.style.transform= `translateY(${value})`;
  });
  function ScrollBottom() {
    window.scrollTo(0,700)
  }
  return (
    <div className="top-section container" id="topsec">
      <img className="back-image" id="BImg" src={BgImg} alt="" />
      <div className="top-sec" id="TopSec">
        <div className="top-sec-inner">
          <p className="name">I Am Javohir Komiljonov</p>
          <h2 className="job typed">
            <Typed
              typeSpeed={50}
              backSpeed={50}
              strings={["web-developer", "designer", "freelancer"]}
              loop
            />
          </h2>
          <div className="contact-info">
            <div className="contact-card">
              <p>Address:</p>
              <p>Tashkent, Uzbekistan</p>
            </div>
            <div className="contact-card">
              <p>Phone:</p>
              <p>+998937407044</p>
            </div>
            <div className="contact-card">
              <p>Email:</p>
              <p>javoxir2000k@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div  className="scroll-bottom" id="scrollBtn">
        <button onClick={ScrollBottom} className="mouse">

        </button>
        <div className="scroll-inner"></div>
      </div>
    </div>
  );
}

export default index;
