import React from 'react';


const MoviesList = ({movie}) => {
    return (
            <div className='home__list__movie swiper-slide'>
                <img className='list__movie__image' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
            </div>
    );
};

export default MoviesList;