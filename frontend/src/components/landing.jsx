import React from 'react';
import image_1 from '../images/image_1.jpg';
import image_2 from '../images/image_2.jpg';
import image_3 from '../images/image_3.jpg';

function Landing() {
    return (
        <div className="container">
            <div className="container__column container__landing">
                <h1 className="logo">FIT ME</h1>

                <h5 className="header header__landing"><span className="highlight">AI Fashion Done Right.</span></h5>
                <p className="text__landing">Generate 1000’s of recommendations based off of your own personal tastes and outfits your already rock.</p>
        
                <button id="oauth-btn" className="btn btn__landing" style={{"backgroundColor": "#FF6B00"}}> Signup with Google</button>
                <button className="btn btn__landing" style={{"backgroundColor": "#0085FF"}}> Signup with Facebook</button>
            </div>
            <div className="container__column container__landing card_container__landing">
                <ul>
                    <li className="card"><img src={image_3} alt="shoe"/></li>
                    <li className="card"><img src={image_2} alt="shoe"/></li>
                    <li className="card"><img src={image_1} alt="shoe"/></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Landing;