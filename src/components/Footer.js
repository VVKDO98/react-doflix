import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__social">
                <IoLogoFacebook/>
                <IoLogoInstagram/>
                <IoLogoTwitter/>
                <IoLogoYoutube/>
            </div>
            <div className="footer__links"></div>
            <div className="footer__credit"></div>
        </footer>
    );
};

export default Footer;