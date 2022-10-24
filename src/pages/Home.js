import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MoviesItem from '../components/MoviesItem';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";


const Home = () => {
    const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=ef32645a58fd6506e28924ca1e4c975e&language=en-US&page=1";
    const API_TOPRATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=ef32645a58fd6506e28924ca1e4c975e&language=en-US&page=1";
    const API_TVSHOWS = "https://api.themoviedb.org/3/tv/popular?api_key=ef32645a58fd6506e28924ca1e4c975e&language=en-US&page=1";

    const [popular, setPopular] = useState([]);
    const [toprated, setTopRated] = useState([]);
    const [tvshow, setTvShows] = useState([]);

    useEffect(() => {
        function fetchApi(api, setter){
            fetch(api)
            .then(response => response.json())
            .then(data => setter(data.results))
        }

        fetchApi(API_POPULAR, setPopular);
        fetchApi(API_TOPRATED, setTopRated);
        fetchApi(API_TVSHOWS, setTvShows);
    },[])

    const renderMoviesList = (list) => (
        list.map((movie) => <SwiperSlide><MoviesItem key={movie.id} movie={movie} /></SwiperSlide> )
    );

    return (
        <div className='home'>
            <Hero/>
            <div className='home__lists'>
                <div className="home__list">
                    <div className="list__carousel">
                        <h2>Popular</h2>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={3}
                            slidesPerGroup={7}
                            loop={true}
                            loopFillGroupWithBlank={false}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            {renderMoviesList(popular)}
                        </Swiper>
                    </div>
                    <div className="list__carousel">
                        <h2>Top rated</h2>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={3}
                            slidesPerGroup={7}
                            loop={true}
                            loopFillGroupWithBlank={false}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            {renderMoviesList(toprated)}
                        </Swiper>
                    </div>
                    <div className="list__carousel">
                        <h2>Most popular series</h2>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={3}
                            slidesPerGroup={7}
                            loop={true}
                            loopFillGroupWithBlank={false}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            {renderMoviesList(tvshow)}
                        </Swiper>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;