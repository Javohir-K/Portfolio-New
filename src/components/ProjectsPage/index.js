import React from "react";
import "./Projects.css";

//Images
import Img1 from "../../images/pizza-king.jpg"
import Img2 from "../../images/fb.jpeg"
import Img3 from "../../images/movie.jpg"
import Img4 from "../../images/traveluzb.jpg"
import Img5 from "../../images/dopegraphers.jpg"

function index() {
  return (
    <div className="projects-wrapper container" id="projects">
      <div className="projects-top">
        <h2 className="title">Projects</h2>
        <a
          href="https://github.com/Javohir-K"
          target="_blank"
          rel="noreferrer"
          className="hireme"
        >
          <div className="hireme1"></div>
          All Projects
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
      <div className="projects-bottom">
        <div className="projects-flex1">
          <ProjectCard
          img={Img1}
          title="Pizza King"
          info="Food ordering website"
          link="https://pizza-king-jk.netlify.app/"
          />
          <ProjectCard
          img={Img2}
          title="Facebook Clone"
          info="Social app clone website"
          link="https://fb-clone-app-dbc25.web.app/"
          />
        </div>
        <div className="projects-flex2">
        <ProjectCard
          img={Img3}
          title="Movie Search DB"
          info="Search your favorite movie"
          link="https://rmdb-jk.netlify.app/"
          />
                    <ProjectCard
          img={Img4}
          title="Travel Uzbekistan"
          info="Travelling guide website for visitors of Uzbekistan"
          link="https://travel-uzbekistan-jk.netlify.app/"
          />
                    <ProjectCard
          img={Img5}
          title="Dopegraphers"
          info="Photographing and designing company website"
          link="https://dopegraphers.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ img, title, info, link }) => {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="project-card-info">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <a href={link} className="card-link" target="_blank" rel="noreferrer">
        <i class="fas fa-eye"></i>
      </a>
    </div>
  );
};

export default index;
