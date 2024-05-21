import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HeroImg.css';
import IntroImg from "../assets/homepg.png";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="homepage" />
        </div>

        <div className="content">
            <p>HI! I'M VINAYAK, I talk about</p>
            <h1>Software Development • Data Science • Product Management• </h1>

            <Link to="/project" className="btn"> {/* Use Link component */}
                Projects
            </Link>
            <Link to="/contact" className="btn-light"> {/* Use Link component */}
                Contact
            </Link>
        </div>
       
    </div>
  );
}

export default HeroImg;
