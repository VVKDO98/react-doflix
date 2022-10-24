import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Profile = () => {
    useEffect(() => {
        document.title = "Series - Netflix";  
      }, []);
      
    return (
        <div>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default Profile;