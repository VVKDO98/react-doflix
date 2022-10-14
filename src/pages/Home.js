import React, { useEffect, useState } from 'react';
import MovieSpotlight from '../components/MovieSpotlight';
import Trending from '../components/Trending';
import TrendingBox from '../components/TrendingBox';


const Home = () => {
    const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=ef32645a58fd6506e28924ca1e4c975e"
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch(API_POPULAR)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data);
            setPopular(data.results)
        })
    },[])

    return (
        <div className='home'>
            {popular.slice(0,1).map((popularMovie) => <MovieSpotlight  key={popularMovie.id} {...popularMovie}/>)}
            <TrendingBox/>
        </div>
    );
};

export default Home;