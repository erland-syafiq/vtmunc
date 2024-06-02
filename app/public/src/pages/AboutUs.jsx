import React from 'react';
import UserCard from '../components/UserCard.jsx';
import useStaticData from '../hooks/useStaticData.jsx';
import './AboutUs.css';

function AboutUs() {
    const secretariat = useStaticData("/data/secretariat.json", []);

    return (
        <main className="container">
            <section>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-nowrap secretariatTitle">Secretariat</h2>
                    </div>
                </div>
                <div className="row">
                    {
                    secretariat.map(({name, position, bio, email, image}, index) => 
                         <UserCard colWidth={4} key={index} name={name} position={position} bio={bio} email={email} imagePath={"/Images/Secretariat_Headshots/" + image}/>
                    )}
                </div>
            </section>
        </main>
    );
};

export default AboutUs;