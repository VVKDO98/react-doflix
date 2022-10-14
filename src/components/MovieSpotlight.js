import React from 'react';

const MovieSpotlight = ({title, poster_path}) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/"
    
    return (
        <div className='movieSpotlight'>
            <div className='movieSpotlight__banner'>
                <div className='movieSpotlight__side'>
                    <img src="assets/img/play.png" alt="Play button" />
                </div>
                <div className='movieSpotlight__side'>
                    <p className='movieSpotlight__title'>Movie Spotlight</p>
                    <p>{title}</p>
                </div>
            </div>
            <div className='movieSpotlight__image'>
                <img src={API_IMG+poster_path} alt={title} />
            </div>
        </div>
    );
};

export default MovieSpotlight;