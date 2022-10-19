import React from 'react';


const Home = () => {
    return (
        <div className='home'>
            <div className='home__hero'>
                <img src={process.env.PUBLIC_URL + "/assets/img/bg.jpg"} alt="Logo Netflix" />
            </div>
        </div>
    );
};

export default Home;