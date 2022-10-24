import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


const Search = () => {
    
    useEffect(() => {
        document.title = "Movie - Netflix";  
      }, []);

    return (
        <div>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default Search;