import React from 'react'
import TextFile from '../Components/TextBox';
import hero from '../asset/hero.jpg'
import '../css/hero.css'
import Instructions from '../Components/Instructions';


const FrontPage = () => {
  return (      
    
    <div>
        <div className="hero-wrap">
          <img
            className="hero-bg"
            src={hero}
            alt=""
          />
          <div className="hero-content">
            <h1>Vinyl Tracker</h1>
          </div>
        </div>
        <TextFile />
        <Instructions />
    </div>
    
  );
}



export default FrontPage;