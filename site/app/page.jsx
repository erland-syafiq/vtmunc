import React from 'react';
import './Home.css';
import Link from "next/link";

function Home() {

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
                    The premier Model United Nations conference for high school students. We had over 300 students come in 2024, join us for next year!
                </h4>
                <Link href="/register">
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