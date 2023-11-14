import * as React from "react";
import Pdf from "./William Lin Resume.pdf";
import Textline from "./Textline.js";
import { BsTwitter, BsShop, BsGithub, BsMedium } from "react-icons/bs";

function Home(props) {
    return (
        <div className="Home">
            <div className= "id-border">
			<div className="content">
				<h1 className="intro">Hello, My Name is</h1><h1 className = "intro2">William Lin</h1>
				<div className="typing">
					<p className = "intro3">I'm a </p> <Textline />
				</div>
				<div className = "misc">
					<a href={'https://www.github.com/Gloompowder'} target="_blank" rel="noreferrer"> <BsGithub/></a>
					<a href={'https://studiogloomlinks.vercel.app/'} target="_blank" rel="noreferrer"> <BsShop /></a>
					<a href={'https://medium.com/@will-lin'} target="_blank" rel="noreferrer"> <BsMedium/></a>
					{/* <a href={'https:/www.twitter.com/gloompowder'} target="_blank" rel="noreferrer"> <BsTwitter/></a> */}
				</div>
				<div className= "cred">
					<a href={Pdf} target="_blank" rel="noreferrer" className = "cv">Resume </a>
					<a href="https://www.linkedin.com/in/wl96/" target="blank" rel="noreferrer" className = "linkedin">LinkedIn</a>
				</div>
			</div>
			</div>
            </div>
    );
  }
  
  export default Home;