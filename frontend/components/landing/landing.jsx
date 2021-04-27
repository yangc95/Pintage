import React from 'react';

const Landing = () => {
    let landingImage = <div className="landing-imgs">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
        <div className="six"></div>
        <div className="seven"></div>
        <div className="eight"></div>
        <div className="nine"></div>
        <div className="ten"></div>
        <div className="eleven"></div>
        <div className="twelve"></div>
        <div className="thirteen"></div>
        <div className="fourteen"></div>
        <div className="fifteen"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="sixteen"></div>
    </div>;

    return (
        <div className="landing">
            <div className="landing-header">
                <div className="landing-title">
                    <h1>Get your next</h1>
                    <ul className="idea-module">
                        {/* <li>food idea</li>
                        <li>home idea</li> */}
                        <li>travel idea</li>
                    </ul>
                </div>
                {landingImage}
                {/* <section className="landing-carousel">
                    <aside>
                        <ol className="carousel-nav-index"> 
                            <li className="carousel-nav-item">
                                <a className="carousel-nav-button" href="#landing-carousel-1"></a>
                            </li>
                            <li className="carousel-nav-item"> 
                                <a className="carousel-nav-button" href="#landing-carousel-2"></a>
                            </li>
                            <li className="carousel-nav-item">
                                <a className="carousel-nav-button" href="#landing-carousel-3"></a>
                            </li>
                            <li className="carousel-nav-item">
                                <a className="carousel-nav-button" href="#landing-carousel-4"></a>
                            </li>
                        </ol>
                    </aside>
                    <ol className="landing-carousel-viewport">
                        <li 
                            id="landing-carousel-1"
                            className="landing-carousel-slide">
                            {landingImage}
                        </li>
                        <li 
                            id="landing-carousel-2"
                            className="landing-carousel-slide">
                            {landingImage}
                        </li>
                        <li 
                            id="landing-carousel-3"
                            className="landing-carousel-slide">
                            {landingImage}
                        </li>
                        <li 
                            id="landing-carousel-4"
                            className="landing-carousel-slide">
                            {landingImage}
                        </li>
                    </ol>
                </section> */}
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Landing;
