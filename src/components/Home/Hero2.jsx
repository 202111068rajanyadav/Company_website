import { useState, useEffect } from "react";
// import './Hero.css';

function Hero2({image}) {
console.log(image.url)

  return (
  
      
     
    <img src={image.url} alt="lund" style={{width:"100%",height:"500px"}} />
         

  );
}

export default Hero2;
