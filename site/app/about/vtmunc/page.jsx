import React from 'react';
import './Vtmunc.css';

export default function AboutVtmunc() {
    return (
        <main className="container">
            <div className='row justify-content-center'>
                    <h1 className="vtmuncTitle">Why VTMUNC?</h1>
            </div>  
            <div className='row'>
                <div className='col-md-5'>
                    <p className='whyParagraph'>As students of Virginia Polytechnic Institute and State University (otherwise known as Virginia Tech), we are bound by Virginia Tech’s motto, “Ut Prosim” (That I May Serve). Our conference, Virginia Tech Model United Nations Conference (VTMUNC), is an extension of that very motto, where we serve our delegates with the opportunity to understand what it means to serve those around them. Working diligently to help foster an experience that facilitates rigorous debate, reflection, and open-mindedness, we are committed to cultivating a community of young globally conscious leaders who understand the values of ally-ship and service. Through the conference, we will give our young delegates a chance to understand and address the complex challenges that we face in our world today, equipping them with the skills to be a true leader.
                    </p>
                </div>
                <div className='col-md-7'>
                    <img className="whyImg" src={"/../Images/AboutUsGroupPhoto2.JPG"} />
                </div>
                
            </div>
        </main>        
    )
}