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
                    Feb 28th - Mar 2nd
                </h3>
                <h1>
                    VTMUNC 2025
                </h1>
                <h4>
                    The premier Model United Nations conference for high school students, join us for next year!
                </h4>
                <Link href="/letter">
                    <h4  className="btn btn-primary btn-lg heroBtn">
                            Letter From Secretariat
                    </h4>
                </Link>
            </div>
            <div className="heroBackground"></div>
        </section>
    </main>
    )
}

export default Home;