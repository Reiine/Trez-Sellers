import React from 'react';
import logoimg from '../assets/trez.webp';

function VisitCustomer() {
    return ( 
        <div className="why-us-cover">
            <h1>Visit our customer's page</h1>
            <div className='why-us-content'>
                <img src={logoimg} alt="logo" className='visit-logo' />
                <p>Elevate your clothing business with our e-commerce website, offering a hassle-free experience through intuitive finance tracking and efficient product management tools, empowering you to focus on what you love – designing and selling fashion.</p>

            </div>
        </div>
     );
}

export default VisitCustomer;