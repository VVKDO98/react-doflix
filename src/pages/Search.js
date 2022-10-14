import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieBox from '../components/MovieBox';


const Search = () => {
    const [movies, setMovies] = useState([]);

    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ef32645a58fd6506e28924ca1e4c975e"
    
    useEffect(() => {
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data);
            setMovies(data.results)
        })
    },[])

    return (
        <div>
            <h1>Search</h1>
            <div>
                {movies.map((movieReq) => 
                <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
        </div>
    );
};

export default Search;