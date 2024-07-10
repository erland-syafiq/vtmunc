import React from 'react';
import './RegisterSuccess.css';

export default function RegisterSuccess() {
    return (
        <main className="container">
            <div className='registerSuccess'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div className='registerCard'>
                            <div className='row'>
                                <h2>Thank you for registering for VTMUNC!</h2>                 
                            </div>

                            <div>
                                <img className="registerImg" src={"/Images/AboutUsGroupPhoto.jpg"} />
                            </div>

                            <h5>We will begin processing your data as soon as possible. Please reach out to vtmunconference@gmail.com if you have any more questions.</h5>
                        </div>
                    </div> 
                    <div className='col-md-3'></div>
                </div>
                </div>
            <div className="registerSuccessBackground"></div>
        </main>        
    )
}