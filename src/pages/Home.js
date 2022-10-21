import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MoviesList from '../components/MoviesList';

  



const Home = () => {
    const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=ef32645a58fd6506e28924ca1e4c975e&language=en-US&page=1";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(API_POPULAR)
        .then((response) => setMovies(response.data.results));
    }, []);

    // console.log(movies);

    const renderMoviesList = () => (
        movies.map((movie) => <MoviesList key={movie.id} movie={movie} /> )
    );

    return (
        <div className='home'>
            <Hero/>
            <div className='swiper'>
            <div className='home__list home__list--popular swiper-wrapper'>
                {renderMoviesList()}
            </div>
            </div>
        </div>
    );
};

export default Home;