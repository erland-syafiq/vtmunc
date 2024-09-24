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
        <main className="">

            <div className='row justify-content-center'>
                    <h1 className="aboutTitle">About Us</h1>
            </div>
            
            <img className="aboutImg" src={"/Images/AboutUsGroupPhoto2.jpg"} />


            <section className= "container mt-3">
                <div className="row justify-content-center">
                    <div className='col-10'>
                        <div className="imageLine"></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <a href='about/vtmunc'>
                            <div className='aboutCard1'>
                                <h2 className="white-text">Why VTMUNC?</h2>
                            </div>
                        </a>
                    </div>                    
                    <div className='col-md-4'>
                        <a href='about/vtmun'>
                            <div className='aboutCard2'>
                                <h2 className="white-text">Virginia Tech Model UN</h2>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-4'>
                        <a href='about/blacksburg'>
                            <div className='aboutCard3'>                            
                                <h2 className="white-text">Virginia Tech & Blacksburg</h2>
                            </div>
                        </a>
                    </div>
                    
                </div>
                <div className="row justify-content-center">
                    <div className='col-10'>
                        <div className="imageLine"></div>
                    </div>
                </div>
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