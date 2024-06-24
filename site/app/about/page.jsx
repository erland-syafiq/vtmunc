import React from 'react';
import UserCard from '../components/UserCard.jsx';
import './AboutUs.css';
import fetchStaticJSON from '../utils/fetchStaticJSON.js';

export const metadata = {
    title: "About Us",
    description: "Meet the VTMUNC Secretariat: dedicated leaders organizing an inspiring conference. Learn about their roles, backgrounds, and commitment to global diplomacy."
}

async function AboutUs() {
    const secretariat = await fetchStaticJSON("/app/data/secretariat.json");


    return (
        <main className="container">
            <section className="mt-3">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-nowrap secretariatTitle">Secretariat</h2>
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