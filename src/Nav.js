import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { BiCode, BiPalette, BiBrain, BiMenu, BiPhone, BiBorderAll, BiDockBottom } from "react-icons/bi";


function Nav(props) {
    const modalShow = props.modalShow;
    const params = useParams();
    console.log(Object.values(params));
    const isMobile = () => {
        return props.width >= 760 ?         <nav className = "Nav" > 
        {params === ''? <Link className= "nav-home" to="/" borderColor = 'orange' borderWidth= '2px'>William Lin</Link>:<Link className= "nav-home" to="/" >William Lin</Link>}
        <ul className = "nav-quad">
            <ul className = "nav-trio">
            <Link className = "about-me" to="/about-me" > <BiBrain /> About Me</Link>
            <Link className = "coding" to="/coding" > <BiCode /> Coding</Link>
            <Link className = "design" to="/design" > <BiPalette /> Design</Link>
            </ul>
            <Link className ="contact" to="/contact" > <BiPhone />Contact</Link>
        </ul>
    </nav>:         
    <nav className = "mobileNav">
        <Link className= "mobile-nav-home" to="/">William Lin</Link>
        <ul className= "mobile-nav-solo">
            <div className="mobile-nav-menu" onClick={props.modalToggle}>
                <BiMenu />Menu
            </div>
        </ul>
    </nav>
    }
    return (
        isMobile()
    );

}

export default Nav;


