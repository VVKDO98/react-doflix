import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieBox from '../components/MovieSpotlight';


const Search = () => {
    const [movies, setMovies] = useState([]);

    const API = "";
    // useEffect(() => {
    //     fetch(API_URL)
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setMovies(data.results)
    //     })
    // },[])

    return (
        <div>
            <input type="search" name="" id="" />
            <div>
                {/* {movies.map((movieReq) => 
                <MovieBox key={movieReq.id} {...movieReq}/>)} */}
            </div>
        </div>
    );
};

export default Search;