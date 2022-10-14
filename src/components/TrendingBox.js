import React, { useEffect, useState } from 'react';
import Trending from './Trending';

const TrendingBox = () => {
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
        <div>
            <h2>Trending</h2>
            {popular.slice(1,4).map((popularMovie) => <Trending  key={popularMovie.id} {...popularMovie}/>)}
        </div>
    );
};

export default TrendingBox;