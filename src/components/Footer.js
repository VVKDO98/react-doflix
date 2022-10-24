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
            <div className="footer__links">
                <div className="links_col">
                    <ul className='links__list'>
                        <li>Audiodescription</li>
                        <li>Investor Relations</li>
                        <li>Legal information</li>
                    </ul>
                </div>
                <div className="links_col">
                    <ul className='links__list'>
                        <li>Help Center</li>
                        <li>Recruitement</li>
                        <li>Cookie preferences</li>
                    </ul>
                </div>
                <div className="links_col">
                    <ul className='links__list'>
                        <li>Gift cards</li>
                        <li>Terms of use</li>
                        <li>Legal Notice</li>
                    </ul>
                </div>
                <div className="links_col">
                    <ul className='links__list'>
                        <li>Hurry</li>
                        <li>Privacy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
            <div className="footer__credit">
                <p>© 1997-2022 VVKDO98 Corporation</p>
            </div>
        </footer>
    );
};

export default Footer;