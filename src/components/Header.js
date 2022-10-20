import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    const changeColorHeader = () => {
        if(window.scrollY >= 80){
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeColorHeader);

    return (
        <div className={scroll ? 'header header__active' : 'header'}>
            <div className='header__block header__block--left'>
                <img src={process.env.PUBLIC_URL + "/assets/img/netflix.png"} alt="Logo Netflix" height="30px" />
            </div>
            <div className="header__block header__block--mid">
                <Navbar/>
            </div>
            <div className='header__block header__block--right'>
                <img src={process.env.PUBLIC_URL + "/assets/img/searchicon.png"} alt="Logo Netflix" width="30px" />
                <img src={process.env.PUBLIC_URL + "/assets/img/dotsicon.png"} alt="Logo Netflix" width="30px" />
            </div>
        </div>
    );
};

export default Header;