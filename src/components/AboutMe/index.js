import React from "react";
import "./AboutMe.css";
import MyImage from "../../images/222.png";

function index() {
  function ShowSkills(){
    const x = document.getElementById("skillHidden")
    if(x.classList.contains("skill-hidden")){
      x.classList.remove("skill-hidden")
    }
    else if(!x.classList.contains("skill-hidden")){
      x.classList.add("skill-hidden")

    }
  }
  return (
    <div className="aboutme container" id="aboutme">
      <h2 className="title">About Me</h2>
      <div className="aboutme-inner">
        <div className="aboutme-image">
          <div className="aboutme-image-inner">
            <img src={MyImage} alt="" />
          </div>
        </div>
        <div className="aboutme-info">
          <h1>Hello, Im Javohir</h1>
          <p>
            Just few words about me. I am a self-taught 21 years old front-end
            developer with 2 years of experience. Yeah, as a main career, i
            chose to be web developer, and again who knows, maybe i might
            explore something more to dream.
          </p>
          <div className="skills">
            <Skill name="Html" percent="100" value="100" />
            <Skill name="Css" percent="90" value="90" />
            <Skill name="Javascript" percent="75" value="75" />
            <Skill name="ReactJs" percent="70" value="70" />
            <Skill name="Web Design" percent="80" value="80" />
            {/* Hidden skills */}
            <div className="skill-hidden" id="skillHidden">
              <Skill name="Bootstrap" percent="60" value="60" />
              <Skill name="JQuery" percent="70" value="70" />
              <Skill name="MaterialUi, Ant Design, Styled, Axios" percent="70" value="70" />
              <Skill name="NodeJS, ExpressJs, NextJS" percent="40" value="40" />
              <Skill name="Linux, MySql, MongoDB, Rest API" percent="65" value="65" />
            </div>
          </div>
          <div className="hire-me">
            <a href="https://www.t.me/notsoaveragee" target="_blank" rel="noreferrer" className="hireme font-light">
              Hire me
              <div className="hireme1"></div>
              <i className="fa fa-angle-right"></i>
            </a>
            <button id="skillBtn" onClick={ShowSkills} className="hireme skill-show-btn">
            <div className="hireme1"></div>
            Show all
            <i className="fa fa-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const Skill = ({ name, percent, value }) => {
  return (
    <div className="skill">
      <div className="skill-info">
        <p>{name}</p>
        <p>{percent}%</p>
      </div>
      <div className="skill-value">
        <div
          className="skill-val-inner"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default index;
