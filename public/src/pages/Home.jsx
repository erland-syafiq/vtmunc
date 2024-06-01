import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <main className="container contentBackground">
        <section className="hero">
            <div className="heroHighlightBox"></div>
            <div className="heroContent">
                <h3>
                    Feb 2nd - Feb 4th
                </h3>
                <h1>
                    VTMUNC 2024
                </h1>
                <h4>
                    The premier Model United Nations conference for high school students
                </h4>
                <Link to="/register" text="R">
                    <h4  className="btn btn-primary btn-lg heroBtn">
                            Register Here
                    </h4>
                </Link>
            </div>
            <div className="heroBackground"></div>
        </section>
    </main>
    )
}

export default Home;