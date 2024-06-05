import React from 'react';
import UserCard from '../components/UserCard.jsx';
import './AboutUs.css';
import fetchStaticJSON from '../utils/fetchStaticJSON.js';

async function AboutUs() {
    const secretariat = await fetchStaticJSON("/app/data/secretariat.json");


    return (
        <main className="container">
            <section>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-nowrap secretariatTitle">Secretariat Test</h2>
                    </div>
                </div>
                <div className="row">
                    {
                    secretariat.map(({name, position, bio, email, image}, index) => 
                         <UserCard colWidth={4} key={index} name={name} position={position} bio={bio} email={email} imagePath={"/Images/secretariat/" + image}/>
                    )}
                </div>
            </section>
        </main>
    );
};

export default AboutUs;