import React from 'react';
import {fetchLandingImages} from '../actions/actions';

function Landing() {

    const images = fetchLandingImages().map((img, key) => {
        return <li key={key} className="card"><img src={img} alt="fashion article"/></li>
    });

    return (
        <div className="container">
            <div className="container__column container__landing">
                <h1 className="logo">FIT ME</h1>

                <h5 className="header header__landing"><span className="highlight">AI Fashion Done Right.</span></h5>
                <p className="text__landing">Generate 1000’s of recommendations based off of your own personal tastes and outfits your already rock.</p>
        
                <button id="oauth-btn" className="btn btn__landing btn__landing__google"> Signup with Google</button>
                <button className="btn btn__landing btn__landing__facebook"> Signup with Facebook</button>
            </div>
            <div className="container__column container__landing card_container__landing">
                <ul>
                    {images}
                </ul>
            </div>
            
        </div>
    )
}

export default Landing;