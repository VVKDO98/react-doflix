import React from 'react';


const Home = () => {
    return (
        <div className='home'>
            <div className='home__hero'>
                <div className='hero__content'>
                    <img className='hero__image' src={process.env.PUBLIC_URL + "/assets/img/lucy.png"} alt="" width="400px" />
                    <div className='hero__buttons'>
                        <button className='hero__button'><i className="fa-solid fa-play"></i>  Lecture</button>
                        <button className='hero__button'><i className="fa-solid fa-plus"></i>  Ma liste</button>
                    </div>
                    <p className='hero__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam temporibus rerum fugiat esse consequatur quos optio exercitationem modi cumque!</p>
                </div>
                {/* <img className='home__background' src={process.env.PUBLIC_URL + "/assets/img/bg.jpg"} alt="Logo Netflix" /> */}
            </div>
        </div>
    );
};

export default Home;