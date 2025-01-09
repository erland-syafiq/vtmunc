"use client"
import React from 'react';
import './Resources.css';

export default function Resources() {
    
    
    return (
    <main className="resourcesPage">
        <h1 className='resourceTitle'>Resources</h1>

        <div className='row resourceGroup'>

            <div className='col-md-4'>
                <a href='/Policy/Conference_Policies.pdf' target='_blank' className='no-hover-effect'>
                    <div className='resourceCard3'>
                        <h2 className="white-text">Conference Policies</h2>
                    </div>
                </a>
            </div>  
            <div className='col-md-4'>
                <a href='/Policy/VTMUNC_Visa_Information_Form.pdf' target='_blank' className='no-hover-effect'>
                    <div className='resourceCard1'>
                        <h2 className="white-text">Visa Information</h2>
                    </div>
                </a>
            </div>                    
            <div className='col-md-4'>
                <a href='/Policy/VTMUNC_SUPPORT_FORM.pdf' target='_blank' className='no-hover-effect'>
                    <div className='resourceCard2'>
                        <h2 className="white-text">VTMUNC Support Request Form</h2>
                    </div>
                </a>
            </div>            
        </div>

    </main>          
    )
}