import * as React from "react";
// import SecondNav from "./SecondNav";
import doodle from "./images/potfolio-doodle.png";
import {Link} from 'react-router-dom';

function Design(props) {
    return (
        <div className="Design">
                  {/* <SecondNav search="design"/> */}
                  <a href="https://willlin1996.wixsite.com/portfolio" className= "portfolio" alt="wix link" target = "_blank" fontSize= '4rem' rel="noreferrer">
                Portfolio
            </a>
            <Link className= "portfolio" to="/">Home</Link>
            <div >Design Page Under Construction</div>
            <img className='doodle' src = {doodle} alt= "desk"/>
        </div>
    );
  }
  
  export default Design;