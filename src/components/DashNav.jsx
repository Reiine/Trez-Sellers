import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function DashNav() {
    const link1Ref = useRef(null);
    const link2Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const link1 = link1Ref.current;
            const link2 = link2Ref.current;

            if (link1 && link2) {
                if (window.scrollY < 50) {
                    link1.classList.add('dash-nav-cover-link');
                    link2.classList.add('dash-nav-cover-link');
                    link1.classList.remove('dash-nav-cover-link-change');
                    link2.classList.remove('dash-nav-cover-link-change');
                } else {
                    link1.classList.remove('dash-nav-cover-link');
                    link2.classList.remove('dash-nav-cover-link');
                    link1.classList.add('dash-nav-cover-link-change');
                    link2.classList.add('dash-nav-cover-link-change');
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
                <li><Link to="/" id='dash-li-1' className='' ref={link1Ref}>More</Link></li>
                <li><Link to="/" id='dash-li-2' className='' ref={link2Ref}>Account</Link></li>
            </ul>
        </div>
     );
}

export default DashNav;
