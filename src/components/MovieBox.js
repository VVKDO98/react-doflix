import React from 'react';
const API_IMG = "https://image.tmdb.org/t/p/w500/"
const MovieBox = ({title, release_date, poster_path, overview}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={API_IMG+poster_path} alt={title} />
            <p>{overview}</p>
            <p>{release_date}</p>
        </div>
    );
};

export default MovieBox;