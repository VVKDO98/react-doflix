import React from 'react';

const Trending = ({title, poster_path}) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/"
    return (
        <div className='trending__card'>
            <div className="trending__banner">
                <p>{title}</p>
            </div>
            <div className='trending__image'>
                <img src={API_IMG+poster_path} alt={title} />
            </div>
        </div>
    );
};

export default Trending;