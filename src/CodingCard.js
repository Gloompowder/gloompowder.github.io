import * as React from "react";
import { BsInfoCircle, BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";

function CodingCard(props) {
    const [icon, setIcon] = useState(false)

    const projectname= Object.keys(props.project);
    const value = Object.values(props.project)[0]
    console.log(value)
    const description = value.description
    const frontend = value.frontend
    const backend = value.backend
    const database = value.database
    const devops = value.devops
    const image = value.image
    const demo = value.demo
    const websiteLink =() =>{
        if (value.website) {
            return value.website
        }
        else return demo
    }

    const toggleIcon =()=>{
        icon ? setIcon(false): setIcon(true)
    }

    return (
        <div className="projectdiv">
            <a href = {websiteLink()} target='_blank' rel="no-opener">
                <img src={image} alt= {projectname} className = "projectimage" >
                </img>
                {/* <span class="tooltiptext">demo</span> */}
            </a>
            <div className = "project-details">
            <div className = "project-block">
            <h1 className = "project">
                {projectname}
            </h1>
            <p className = "description">
                {description}
            </p>
                {!icon? <div className = "moreInfo">
                <div className= "frontend-div">
            <h4>
                Frontend
            </h4>
            {frontend.map((stack)=>{
                return(<div>{stack}</div>)
            })}
            </div>
            <div className= "backend-div">
            <h4>
                Backend
            </h4>
                        {backend.map((stack)=>{
                return(<div>{stack}</div>)
            })}
            </div>
            <div className = "database-div">
            <h4>
                Database
            </h4>
            <div className = "database">
                {database}
            </div>
            </div>
            {devops?
            <div className= "devops-div">
            <h4>
                Devops
            </h4>
            <div className = "devops">
                {devops}
            </div>
            </div>:null}
                </div>:
                <div className = "lessInfo">
                            <div className= "frontend-div">
            <h4>
                Frontend
            </h4>
            {frontend.map((stack)=>{
                return(<div>{stack}</div>)
            })}
            </div>
            <div className= "backend-div">
            <h4>
                Backend
            </h4>
                        {backend.map((stack)=>{
                return(<div>{stack}</div>)
            })}
            </div>
            <div className = "database-div">
            <h4>
                Database
            </h4>
            <p className = "database">
                {database}
            </p>
            </div>
            {devops?
            <div className= "devops-div">
            <h4>
                Devops
            </h4>
            <p className = "devops">
                {devops}
            </p>
            </div>:null}
                    </div>}
            </div>
            {icon?<div className="info-icon" onClick={toggleIcon}><BsInfoCircle /></div>:
            <div className="info-icon" onClick={toggleIcon}><BsFillXCircleFill /></div>}
            </div>
        </div>
    );
  }
  
  export default CodingCard;