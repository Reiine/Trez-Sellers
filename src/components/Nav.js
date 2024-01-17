import React, { useEffect } from 'react';
import logo from '../assets/trez.webp';
import logoblack from '../assets/trezblack.png';
import { Link } from 'react-router-dom';
import DashNav from './DashNav';

function Nav() {
    useEffect(()=>{
        const nav = document.getElementById('nav');
        const img = document.getElementById('logimg');
        window.addEventListener('scroll',function(e){
            if(this.window.scrollY>50){
                nav.classList.add('nav-on-change');
                img.src = logoblack;
            }else{
                img.src = logo;
                nav.classList.remove('nav-on-change');
                nav.classList.add('nav-cover');
            }
        })
        
    },[])
    return ( 
        <>
            <div className='nav-cover' id='nav'>
                <Link to='/'><img src={logo} alt="logo" id='logimg' /></Link>
                <DashNav/>

            </div>
        </>
     );
}

export default Nav;