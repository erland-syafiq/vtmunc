"use client"
import React, {useState} from 'react';
import './Philanthropy.css';
import { useAuth } from '../components/AuthProvider';

export default function Philanthropy() {
    const { isAuthenticated } = useAuth();

    const [amountRaised, setAmountRaised] = useState(156);
    const goal = 2000;

    const handleInputChange = (e) => {
        // Check input so it is between 0 and 2000
        const value = Math.max(0, Math.min(goal, parseInt(e.target.value, 10) || 0));
        setAmountRaised(value);
    };

    const percentageRaised = (amountRaised / goal) * 100;
    
    return (
    <main className="philanthropyPage">
        <div className='row'>

        </div>
        <h1 className='philanthropyTitle'>
            Blacksburg Refugee Partnership
        </h1>

        <div className='row'>
            <div className='col-md-6'>
                <img className="brp1Img" src={"/../Images/Philanthropy/brp1.jpg"} />
            </div>

            <div className='col-md-5 fundTracker'>
                <div className="progressBar">
                    <div 
                        className="progressFill" 
                        style={{ height: `${percentageRaised}%` }}
                    ></div>
                </div>

                { isAuthenticated && (<input 
                    type="number" 
                    value={amountRaised} 
                    onChange={handleInputChange} 
                    min={0} 
                    max={goal} 
                    className="amountInput"
                /> )}

                <h4>Total Raised: ${amountRaised}</h4>
                <p>Our goal for this conference is to raise $2,000. This is approximately the cost to support one family for one month. We are committed to donating 100% of merch sales and 50% of delegation fees to BRP.</p>
                                
            </div>
        </div>
        <div className='row'>
            <div className='philanthropyBlurb'>
                <p>
                    The Blacksburg Refugee Partnership (BRP) is a nonprofit organization dedicated to supporting refugees from Syria, Afghanistan, Burundi, and Somalia. Community volunteers work to provide displaced families with resources, education, and guidance to ultimately empower these individuals to rebuild their lives and become integrated into the New River Valley. 
                    <br></br><br></br>We chose the BRP because their mission to empower humanity embodies the spirit of our conference. We believe that to “Reach for the Stars,” we must chase our dreams and encourage those around us to do the same despite adversities that may arise. BRP’s work allows the local community to engage in global humanitarian aid and provide families with social integration. Virginia Tech’s Secretariat team hopes to inspire delegates to apply creative solutions, not just during the conference, but in their own lives and in their own communities. Our desire is that delegates will reflect on and investigate ways in which they can implement positive, sustainable changes. The determination and resilience that we seek to encourage in our delegates is the same drive and dedication that the BRP has in assisting refugees at every step of their journey and equipping them with the tools for long-term success exemplifies.
                    <br></br><br></br>For more information about the Blacksburg Refugee Partnership please visit their website:<br></br>
                    <a className='philanthropyA' href="https://www.blacksburgrefugeepartnership.org" target="_blank">
                        Blacksburg Refugee Partnership
                    </a>
                </p>
            </div>
            
        </div>

        <div className='row pictureRow'>
            <div className='col-md-4'>
                <img className="philanthropyRowImg" src={"/../Images/Philanthropy/brp2.jpg"} />
            </div>
            <div className='col-md-4'>
                <img className="philanthropyRowImg" src={"/../Images/Philanthropy/brp3.jpg"} />
            </div>
            <div className='col-md-4'>
                <img className="philanthropyRowImg" src={"/../Images/Philanthropy/brp4.jpg"} />
            </div>
        </div>

    </main>          
    )
}