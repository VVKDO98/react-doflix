import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import MoviesList from '../components/MoviesList';
import { motion } from 'framer-motion';


const Home = () => {
    const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=ef32645a58fd6506e28924ca1e4c975e&language=en-US&page=1";
    const [movies, setMovies] = useState([]);
    const [width, setWidth] = useState(0);
    const carousel= useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

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
            <div>
                <h2>Popular</h2>
                <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                        {renderMoviesList()}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;