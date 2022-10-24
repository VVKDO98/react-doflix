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
                        <li><a href="/">Audiodescription</a></li>
                        <li><a href="/">Investor Relations</a></li>
                        <li><a href="/">Legal information</a></li>
                    </ul>
                </div>
                <div className="links_col">
                    <ul className='links__list'>
                        <li><a href="/">Help Center</a></li>
                        <li><a href="/">Recruitement</a></li>
                        <li><a href="/">Cookie preferences</a></li>
                    </ul>
                </div>
                <div className="links_col">
                    <ul className='links__list'>
                        <li><a href="/">Gift cards</a></li>
                        <li><a href="/">Terms of use</a></li>
                        <li><a href="/">Legal Notice</a></li>
                    </ul>
                </div>
                <div className="links_col">
                    <ul className='links__list'>
                        <li><a href="/">Hurry</a></li>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Contact us</a></li>
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