import * as React from "react";
import profilepic from "./images/profilepic.png";
import Rails from './images/rails.svg';
import Ruby from './images/ruby.svg';
import Postgresql from './images/postgresql.svg';
import Javascript from './images/javascript-1.svg';
import Python from './images/python-5.svg';
import ReactSVG from './images/react-2.svg';
import Html from './images/html-1.svg';
import Css from './images/css-3.svg';
import Adobe from './images/adobe-creative-cloud-cc.svg';
import Github from './images/github-icon-1.svg';
import Illustrator from './images/adobe-illustrator-cc-2019.svg';
import Java from './images/java-4.svg';
import Animate from './images/adobe-animate.svg';
import Photoshop from './images/photoshop-cc-7.svg';
import Heroku from './images/heroku-4.svg';
import { Link } from "react-router-dom";
import ScreenMark from "./Screenmark";



function AboutMe(props) {
    return (
        <div className="AboutMe">
            <div className='content2'>
            <h2 className = 'header-me'>
                About Me
            </h2>
            <div className = 'pic-summary'>
            <img className='profilepic' src = {profilepic} alt= "William Lin Profile"/>
            <div>
            <p className = "summary">
            I am a Full Stack Developer located in New York City. I am an avid learner and I focus my projects whether graphically or technologically based
            around effective, compelling design.
            </p>
            <p className = 'summary'>
            I am experienced with Ruby on Rails, React, and Javascript based programming with a background in Computer Information Systems.
            </p>
            <div className='cred2'>
            <a className = 'abt-me-a' href="https://www.github.com/Gloompowder" target="_blank" rel="noreferrer">Github</a>
                <a className = 'abt-me-a' href="https://willlin1996.wixsite.com/portfolio" alt="wix link" target = "_blank" rel="noreferrer">
                Design
            </a>
            <Link className ="abt-me-a" to="/contact" > Contact</Link>
            </div>
            </div>
            </div>
            </div>
            <h2 className = 'myTools'>
                My Tools
            </h2>
            <div className = "svg-div">
                    <div className ="svg-logo">
                        <img src={Html} alt = "HTML"/>
                        <h4>HTML</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Css} alt = "Css"/>
                        <h4>CSS</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Javascript} alt = "Javascript"/>
                        <h4>JAVASCRIPT</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={ReactSVG} alt = "ReactSVG"/>
                        <h4>React</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Postgresql} alt = "Postgresql"/>
                        <h4>PostgreSQL</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Heroku} alt = "Heroku"/>
                        <h4>Heroku</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Python} alt = "Python"/>
                        <h4>Python</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Java} alt = "Java"/>  
                        <h4>Java</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Ruby} alt = "Ruby"/>
                        <h4>Ruby</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Rails} alt = "Rails"/>
                        <h4>Rails</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Adobe} alt = "Adobe"/>
                        <h4>Adobe</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Illustrator} alt = "Illustrator"/>
                        <h4>Illustrator</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Photoshop} alt = "Photoshop"/>
                        <h4>Photoshop</h4>
                    </div>
                    <div className ="svg-logo">
                        <img src={Github} alt = "Github"/>
                        <h4>Github</h4>
                    </div>                    
                    <div className ="svg-logo">
                        <img src={Animate} alt = "Animate"/>
                        <h4>Animate</h4>
                    </div>
                </div>
                <ScreenMark width = {props.width} height = {props.height}/>
        </div>
    );
  }
  
  export default AboutMe;