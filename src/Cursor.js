// let mouseCursor = document.querySelector('.cursor');

// const cursor=(e)=>{
//     console.log(e)
//   if (mouseCursor){
//     mouseCursor.style.top = e.pageY + 'px' 
//     mouseCursor.style.left = e.pageX + 'px'
//   }
// }
// window.addEventListener('mousemove',cursor);
import { React, useEffect }from 'react';
function Cursor(){
     useEffect(()=>{
    let mouseCursor = document.querySelector('div.cursors');
    let balls = mouseCursor.querySelectorAll('div')

let aimy = 0 
let aimx = 0 

balls.forEach((ball, index) =>{
    let currenty = 0 
    let currentx = 0 
    let speed = 0.3 - index * 0.015
    let size = 3 + index * .2
    const animate = function () {
        currentx += (aimx - currentx) * speed 
        currenty += (aimy - currenty) * speed

        ball.style.left = currentx + 'px'
        ball.style.top = currenty + 'px'
        ball.style.width = size + 'rem'
        ball.style.height = size + 'rem'

        requestAnimationFrame(animate)
    }
    animate()
})

document.addEventListener('mousemove', function(event){
    aimx = event.pageX
    aimy = event.pageY
});

})
     return(
         <div className = 'cursors'>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
         </div>
     )
 }

 export default Cursor;