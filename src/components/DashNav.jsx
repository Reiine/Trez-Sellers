import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function DashNav() {
    const link1Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const link1 = link1Ref.current;

            if (link1 ) {
                if (window.scrollY < 50) {
                    link1.classList.add('dash-nav-cover-link');
                    link1.classList.remove('dash-nav-cover-link-change');
                } else {
                    link1.classList.remove('dash-nav-cover-link');
                    link1.classList.add('dash-nav-cover-link-change');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return ( 
        <div className="dash-nav-cover">
            <ul id='dash-ul'>
                <li><Link to="/" id='dash-li-1' className='dash-nav-cover-link' ref={link1Ref}>Contact</Link></li>
            </ul>
        </div>
     );
}

export default DashNav;
