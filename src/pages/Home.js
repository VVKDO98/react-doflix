import React from 'react';


const Home = () => {
    return (
        <div className='home'>
            <div className='home__hero'>
                <div className='hero__content'>
                    <img className='hero__image' src={process.env.PUBLIC_URL + "/assets/img/logofilm.png"} alt="" width="400px" />
                    <p className='hero__description'>Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life.</p>
                    <div className='hero__buttons'>
                        <button className='hero__button hero__button--white'><i className="fa-solid fa-play"></i>  Reading</button>
                        <button className='hero__button hero__button--black'><i className="fa-solid fa-plus"></i>  Add to list</button>
                    </div>
                </div>
                {/* <img className='home__background' src={process.env.PUBLIC_URL + "/assets/img/bg.jpg"} alt="Logo Netflix" /> */}
            </div>
        </div>
    );
};

export default Home;