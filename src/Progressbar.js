import * as React from "react";
import {useEffect} from "react";
function ProgressBar() {
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  useEffect(()=>{
    myFunction()
    window.addEventListener('scroll', myFunction);
  },[])

  return(
    <div className="progress-div">
  <div className="progress-container">
    <div className="progress-bar" id="myBar"></div>
  </div>
</div>
  )
  }

  export default ProgressBar;