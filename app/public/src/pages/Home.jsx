import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
    useDocumentTitle("VTMUNC");

    return (
    <main className="container contentBackground">
        <section className="hero">
            <div className="heroHighlightBox"></div>
            <div className="heroContent">
                <h3>
                    Spring 2025
                </h3>
                <h1>
                    VTMUNC 2025
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