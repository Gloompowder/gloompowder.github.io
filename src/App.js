import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import NotFound from "./NotFound";
import Coding from "./Coding.js";
import Design from "./Design.js";
import AboutMe from "./AboutMe.js";
import Contact from "./Contact";
import Home from "./Home.js";
import Modal from "./Modal.js";
import Cursor from './Cursor.js';
// import Screenmark from "./Screenmark.js";
import Progressbar from "./Progressbar.js";


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  // const [light, setLight] = useState('light');
  const [modalShow, setModalShow] = useState(false);

  const modalToggle = () => {
    modalShow === true? setModalShow(false): setModalShow(true);
  }

  
  useEffect(()=>{
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      const newWidth = window.innerWidth;
      setHeight(newHeight);
      setWidth(newWidth);
    };
    const addingWindowLogger =() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 
    };

    
    addingWindowLogger();
  },[])
  return (
<div className = "App" >
  <Cursor />
      <Nav height = {height} width = {width} modalToggle={modalToggle} modalShow = {modalShow}/>
      <Progressbar />
      {/* <Screenmark height = {height} width = {width}/> */}
      {modalShow && <Modal modalToggle={modalToggle} modalShow={modalShow}/>}
      <Routes>
        <Route path = "/" element = {<Home  height = {height} width = {width}/>}/>
        <Route path="/coding" element={<Coding width ={ width } height={ height }/>} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact"  element={<Contact width ={ width } height={ height }/>} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
