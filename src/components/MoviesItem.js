import React from 'react';

const MoviesList = ({movie}) => {
    return (
            <div className="item__carousel">
                <img className='item__image' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
            </div>
    );
};

export default MoviesList;