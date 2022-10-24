import React from 'react';
import { motion } from 'framer-motion';

const MoviesList = ({movie}) => {
    return (
            <motion.div className="item__carousel">
                <img className='item__image' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
            </motion.div>
    );
};

export default MoviesList;