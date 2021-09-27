import React from "react";
import "./Services.css";

function index() {
  return (
    <div className="services container" id="services">
      <h2 className="title">Services</h2>
      <div className="services-cards">
        <SCard
          title="Web Development"
          img={<i class="fas fa-code"></i>}
          text="I have been working as a programmer for 2 years and did awesome projects."
        />
        <SCard
          title="Designing"
          img={<i class="fas fa-layer-group"></i>}
          text="Design, develop, create. That's why developers love also designing"
        />
        <SCard
          title="Tutoring"
          img={<i class="fas fa-chalkboard"></i>}
          text="I can teach Front end development, If you are interested just contact me!"
        />
      </div>
      <div className="services-counter">
        <div className="services-counter-inner">
          <SCounter num="3" txt="Happy Client" />
          <SCounter num="6" txt="Successful Projects" />
          <SCounter num="2" txt="Freelance Companies" />
        </div>
      </div>
    </div>
  );
}

const SCard = ({ img, title, text }) => {
  return (
    <div className="scard hireme">
      <div className="hireme1"></div>
      <div className="scard-inner">
        <div className="icon">{img}</div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
const SCounter = ({ num, txt }) => {
  return (
    <div className="scounter">
      <p>
        {num} <span>+</span>
      </p>
      <h3>{txt}</h3>
    </div>
  );
};

export default index;
