import React from "react";

import "./Resume.css";

function index() {
  return (
    <div className="resume container" id="resume">
        <div className="projects-top">
      <h2 className="title">Resume</h2>
        <a href="../../images/mycv.pdf" className="hireme" download>
            <div className="hireme1"></div>
            Download CV
            <i className="fa fa-download"></i>
            </a>
        </div>
      <div className="resume-inner">
        <ResumeCard
          title="Education"
          info="As a normal person I studied some places"
          cardinfo={
            <>
              <CardInfo
                name="Elementary School N-45"
                time="Khazorasp, Khorezm. 2006-2010"
              />
              <CardInfo
                name="Middle School N-1 Lyceum"
                time="Khazorasp, Khorezm. 2010-2016"
              />
              <CardInfo
                name="Academic Lyceum TTAUF"
                time="Khazorasp, Khorezm. 2016-2018"
              />
              <CardInfo
                name="Tashkent University of Information Technologies"
                time="Tashkent. 2018-Present"
              />
            </>
          }
        />
        <ResumeCard
          title="Experience"
          info="Also have some experience in my job field as well."
          cardinfo={
            <>
              <CardInfo
                name="Upwork.com"
                time="Freelancer developer. 2020-Present"
              />
              <CardInfo
                name="IT Park"
                time="Front end developer. 2021-Present"
              />
              <CardInfo name="Sabroma consult" time="IT Teacher. 2019-2020" />
            </>
          }
        />
        <ResumeCard
          title="Technologies"
          info="I use many good technologies for web development here are some of them."
          cardinfo={
            <>
              <CardInfo
                name="Front end development"
                time="Html, Css, Js, ReactJs"
              />
              <CardInfo
                name="Linux Server"
                time="Ubuntu, Arch, Advanced commands"
              />
              <CardInfo name="Web Design" time="Figma, Photoshop, Adobe XD" />
              <CardInfo
                name="Databases and APIs (Basic)"
                time="MySql, MongoDB, Sqlite, RestAPI, Axios"
              />
              <CardInfo
                name="Backend development (Basic)"
                time="NodeJS, Express, NextJs, Python"
              />
            </>
          }
        />
      </div>
    </div>
  );
}

const ResumeCard = ({ title, info, cardinfo }) => {
  return (
    <div className="resume-card">
      <h2>{title}</h2>
      <p>{info}</p>
      <div className="card-info">{cardinfo}</div>
    </div>
  );
};

const CardInfo = ({ name, time }) => {
  return (
    <div className="resume-card-info">
      <h4>{name}</h4>
      <p>{time}</p>
    </div>
  );
};
export default index;
