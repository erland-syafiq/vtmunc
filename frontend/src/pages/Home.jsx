import React from 'react';
import './Home.css';

function Home() {
    return (
    <main class="container contentBackground">
        <section class="hero">
            <div class="heroHighlightBox"></div>
            <div class="heroContent">
                <h3>
                    Feb 2nd - Feb 4th
                </h3>
                <h1>
                    VTMUNC 2024
                </h1>
                <h4>
                    The premier Model United Nations conference for high school students
                </h4>
                <a class="btn btn-primary btn-lg heroBtn" asp-area="" asp-controller="Applicants" asp-action="Create">
                    <h4>
                        Register Here
                    </h4>
                </a>
            </div>
            <div class="heroBackground"></div>
        </section>
    </main>
    )
}

export default Home;