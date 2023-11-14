import * as React from "react";
import { useParams, Link } from "react-router-dom";
import notfound1 from "./images/notfound1.png";
import notfound2 from "./images/notfound2.png";
import notfound3 from "./images/notfound3.png"
import Pdf from "./William Lin Resume.pdf";
import { useEffect, useState } from "react";

function NotFound() {
    const [quote, setQuote] = useState(null);

    let params = useParams();
    useEffect(() => {
        let x = Math.floor(Math.random()*4)+1
        const randomizeQuote = () => {
            return x === 3 ? <img className='notfound' src = {notfound1} alt= "notfound1"/>: x === 2 ? 
            <img className='notfound' src = {notfound2} alt= "notfound2"/>: x === 1 
            ? <img className='notfound' src = {notfound3} alt= "notfound3"/> : null;
        }
        setQuote(randomizeQuote())
      }, []);
    return (
        <div className="NotFound">
            <h1>What's {Object.values(params)}?</h1>
            <div className="notfounddiv">
                {quote}
                <Link className= "home-redirect" to="/" >Home</Link>
                <a href={Pdf} target="_blank" rel="noreferrer" className = "cv">Resume </a>
					<a href="https://www.linkedin.com/in/wl96/" target="blank" rel="noreferrer" className = "linkedin">LinkedIn</a>
            </div>
        </div>
    );
  }
  
  export default NotFound;