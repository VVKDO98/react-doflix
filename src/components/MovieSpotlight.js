import React from 'react';

const MovieSpotlight = ({title, poster_path}) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/"
    
    return (
        <div>
            <p>{title}</p>
            <img src={API_IMG+poster_path} alt={title} />
        </div>
    );
};

export default MovieSpotlight;