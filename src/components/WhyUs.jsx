import React from 'react';
import trackerHome from '../assets/tracker-home.png';

function WhyUs() {
    return ( 
        <div className="why-us-cover">
            <h1>Why Us?</h1>
            <div className="why-us-content">
                <p>Elevate your clothing business with our e-commerce website, offering a hassle-free experience through intuitive finance tracking and efficient product management tools, empowering you to focus on what you love – designing and selling fashion.</p>
                <img src={trackerHome} alt="" />
            </div>
        </div>
     );
}

export default WhyUs;