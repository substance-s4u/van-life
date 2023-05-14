import React from 'react';
import bgImg from "../assets/images/about-hero.png"

function About() {
    return (
        <div className="about main">
            <div className="about-wrapper container">
                <div className="about-text">
            <img src={bgImg} alt="logo" className="about-hero"/>
                    <h3>
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h3>
                    <p>
                        Our mission is to enliven your road trip with the
                        perfect travel van rental. Our vans are recertified
                        before each trip to ensure your travel plans can go off
                        without a hitch. (Hitch costs extra 😉)
                        <br />
                        <br />
                        Our team is full of vanlife enthusiasts who know
                        firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className="about-button">
                    <h4>
                        Your destination is waiting.
                        <br />
                        Your van is ready.
                    </h4>
                    <button>Explore our vans</button>
                </div>
            </div>
        </div>
    );
}

export default About;
