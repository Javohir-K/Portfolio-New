import React from 'react'

import TopSec from "../TopSec"
import AboutMe from "../AboutMe"
import SocialIcons from "../SocialIcons"
import ServicesPage from "../ServicesPage"
import ProjectsPage from "../ProjectsPage"
import ResumePage from "../ResumePage"
import ContactPage from "../ContactPage"

import "./HomePage.css"

function index() {
    return (
        <div className="homepage">
        <TopSec/>
        <AboutMe/>
        <ServicesPage/>
        <ProjectsPage/>
        <ResumePage/>
        <ContactPage/>
        <SocialIcons/>
        </div>
    )
}

export default index
