import React from 'react';
import Link from 'react-router';
import './info_sidebar.css';
import {
    FaUserCircle,
    FaLinkedin,
    FaGithubSquare,
    FaCode
} from 'react-icons/fa';
import { IconContext } from "react-icons";
import userPlaceholder from "../../images/user_placeholder.png";
import javier from "../../images/javier-linkedin1_low.jpg";
import yenisbel from "../../images/yenisbel.jpeg";
import david from "../../images/david.jpeg";

const InfoSidebar = (props) => {
    return (
        <div className="info-sidebar">
            <div className="info-sidebar-header">
                <h1>About this app</h1>
                <button onClick={props.handleSidebar}>X</button>
            </div>
            <div className="info-sidebar-contents">
                <div className="info-sidebar-contents-header">
                    <IconContext.Provider value={{ color: "#2EB67D", className: "global-class-name" }}>
                        <FaUserCircle />
                    </IconContext.Provider>
                    <h2>Developers</h2>
                </div>
                
                <ul className="info-sidebar-list">
                    <li><div><img src={david} alt="David's profile pic" /><span>David Odio</span></div>
                        <div className="sidebar-icons"><span><a href="https://www.linkedin.com/in/nordov/"><FaLinkedin /></a></span> <span><a href="https://github.com/nordov"><FaGithubSquare /></a></span></div></li>
                    <li><div><img src={javier} alt="Javier's profile pic" /><span>Javier Ortiz</span></div>
                        <div className="sidebar-icons"><span><a href="https://www.linkedin.com/in/javiermortiz/"><FaLinkedin /></a></span> <span><a href="https://github.com/javiermortiz"><FaGithubSquare /></a></span></div></li>
                    <li><div><img src={userPlaceholder} alt="Thalia's profile pic" /><span>Thalia Pena</span></div>
                        <div className="sidebar-icons"><span><a href="#"><FaLinkedin /></a></span> <span><a href="https://github.com/thaliapena12"><FaGithubSquare /></a></span></div></li>
                    <li><div><img src={yenisbel} alt="Yenisbel's profile pic" /><span>Yenisbel Valle</span></div>
                        <div className="sidebar-icons"><span><a href="https://www.linkedin.com/in/yenisbelv/"><FaLinkedin /></a></span> <span><a href="https://github.com/yenisbel"><FaGithubSquare /></a></span></div></li>
                </ul>
            </div>
            <div className="info-sidebar-technologies">
                <div className="info-sidebar-contents-header">
                    <IconContext.Provider value={{ color: "#D40E0D", className: "global-class-name" }}>
                        <FaCode />
                    </IconContext.Provider>
                    <h2>Technologies</h2>
                </div>

                <ul className="info-sidebar-list">
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Redux</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoSidebar;