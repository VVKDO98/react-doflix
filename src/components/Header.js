import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__block header__block--left'>
                <img src={process.env.PUBLIC_URL + "/assets/img/menuicon.png"} alt="Burger menu" width="30px" />
                <img src={process.env.PUBLIC_URL + "/assets/img/netflix.png"} alt="Logo Netflix" width="150px" />
            </div>
            <div className='header__block header__block--right'>
                <img src={process.env.PUBLIC_URL + "/assets/img/searchicon.png"} alt="Logo Netflix" width="30px" />
                <img src={process.env.PUBLIC_URL + "/assets/img/dotsicon.png"} alt="Logo Netflix" width="30px" />
            </div>
        </div>
    );
};

export default Header;