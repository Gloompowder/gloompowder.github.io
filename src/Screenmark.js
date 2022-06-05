// import * as React from "react";

// function ScreenMark(props){
//     function smoothScroll(){
//         window.scrollTo({top: 0, behavior: 'smooth'});
//     }
//     function myFunction() {
//         var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//         var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         var scrolled = (winScroll / height) * 100;
//         {return scrolled < .1? <div>
//             Scroll
//         </div> :
//         <div onClick={smoothScroll}>
//             Scroll up
//             </div>}
//       }
//     return(
//         <div className= "autoscroll">
//             {myFunction()}
//         </div>
//     )
// }

// export default ScreenMark;
import * as React from "react";

function ScreenMark(props){
    function smoothScroll(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
      }
    return(
        <div className= "autoscroll">
                    <div onClick={smoothScroll}>
            Scroll up
            </div>
        </div>
    )
}

export default ScreenMark;