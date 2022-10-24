import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li><Link to="/" className='nav__item'>Home</Link></li>
                <li><Link to="/series" className='nav__item'>Series</Link></li>
                <li><Link to="/movies" className='nav__item'>Movies</Link></li>
                <li><Link to="/" className='nav__item'>Most watched</Link></li>
                <li><Link to="/" className='nav__item'>New releases</Link></li>
                <li><Link to="/" className='nav__item'>My list</Link></li>
                <li><Link to="/" className='nav__item'>Explore</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;