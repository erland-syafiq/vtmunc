"use client"
import React from 'react';
import './Resources.css';

export default function Resources() {
    
    
    return (
    <main className="resourcesPage">
        <h1 className='resourceTitle'>Resources</h1>

        <h3 className='resourceMiniTitle'>Waivers and Forms</h3>
        <div className='row resourceGroup'>
            {/* <div className='col-md-4'>
                <a href='/Policy/Conference_Policies.pdf' target='_blank' className='no-hover-effect'>
                    <div className='resourceCard3'>
                        <h2 className="white-text">Conference Policies</h2>
                    </div>
                </a>
            </div>   */}
            
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

        <h3 className='resourceMiniTitle'>Logistics</h3>
        <div className='row resourceGroup'>
            
            <div class="col-md-4">
                <a href="/Policy/Hotels.pdf" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Hotel Information</h4>                        
                        <img className="resourceImg" src="/Images/Resources/hotel.jpg" />
                    </div>
                </a>
            </div>  

            <div class="col-md-4">
                <a href="/Policy/Eating.pdf" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Where to Eat?</h4>                
                        <img class="resourceImg" src="/Images/Resources/eat.png" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="/Policy/Transportation.pdf" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Blacksburg Transportation</h4>
                        <img class="resourceImg" src="/Images/Resources/bt.jpg" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
            <a href="/Policy/Travel.pdf" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Getting to Blacksburg</h4>                        
                        <img class="resourceImg" src="/Images/Resources/transport.jpg" />
                    </div>
                </a>
            </div>

        </div>

        <h3 className='resourceMiniTitle'>How to MUN</h3>
        <div className='row resourceGroup'>
            
            <div class="col-md-4">
                <a href="/Policy/Flow_of_Debate.pdf" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>VT How to MUN</h4>                        
                        <img className="resourceImg" src="/Images/Resources/howto.png" />
                    </div>
                </a>
            </div>  

            <div class="col-md-4">
                <a href="https://bestdelegate.com/mun-made-easy-how-to-get-started-with-model-united-nations" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Getting Started with Model UN</h4>                
                        <img class="resourceImg" src="/Images/Resources/starting.jpg" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://www.youtube.com/watch?v=eOu7VAkuEEg" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Basics to Parliamentary Procedure</h4>
                        <img class="resourceImg" src="/Images/Resources/parlipro.jfif" />
                    </div>
                </a>
            </div>
        </div>

        <h3 className='resourceMiniTitle'>Overview of Committees</h3>
        <div className='row resourceGroup'>
            
            <div class="col-md-4">
                <a href="https://www.youtube.com/watch?v=nijZhSnDyrg" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Committee Formats</h4>                        
                        <img className="resourceImg" src="/Images/Resources/committee.jpg" />
                    </div>
                </a>
            </div>  

            <div class="col-md-4">
                <a href="https://www.youtube.com/watch?v=BYYwBLJ9q5E" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Overview of General Assembly</h4>                
                        <img class="resourceImg" src="/Images/Resources/ga.png" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://bestdelegate.com/everything-you-need-to-know-about-crisis-committees/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Overview of Crisis</h4>
                        <img class="resourceImg" src="/Images/Resources/crisis.jpg" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://www.allamericanmun.com/mun-101-specialized-committees/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Overview of Specialized</h4>
                        <img class="resourceImg" src="/Images/Resources/specialized.jpg" />
                    </div>
                </a>
            </div>
        </div>

        <h3 className='resourceMiniTitle'>Research Gathering</h3>
        <div className='row resourceGroup'>
            
            <div class="col-md-4">
                <a href="https://bestdelegate.com/mun-research-made-easy-15-things-every-delegate-should-have-in-their-research-binder/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Research Binder</h4>                        
                        <img className="resourceImg" src="/Images/Resources/binder.jfif" />
                    </div>
                </a>
            </div>  

            <div class="col-md-4">
                <a href="https://www.cia.gov/the-world-factbook/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>The World Factbook</h4>                
                        <img class="resourceImg" src="/Images/Resources/worldfactbook.png" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://www.un.org/securitycouncil/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>UN Security Council</h4>
                        <img class="resourceImg" src="/Images/Resources/unsc.png" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://www.amnesty.org/en/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Amnesty International</h4>
                        <img class="resourceImg" src="/Images/Resources/amnesty.jpg" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://foreignpolicy.com/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Foreign Policy</h4>                        
                        <img className="resourceImg" src="/Images/Resources/binder.jfif" />
                    </div>
                </a>
            </div>  

            <div class="col-md-4">
                <a href="https://www.pewresearch.org/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Pew Research Center</h4>                
                        <img class="resourceImg" src="/Images/Resources/prc.jpg" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://www.proquest.com/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Proquest</h4>
                        <img class="resourceImg" src="/Images/Resources/proquest.jpg" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://www.hrw.org/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Human Right Watch</h4>
                        <img class="resourceImg" src="/Images/Resources/hwr.png" />
                    </div>
                </a>
            </div>

            <div class="col-md-4">
                <a href="https://www.britannica.com/" target="_blank" className='no-hover-effect'>
                    <div class="resourceCard">
                        <h4>Britannica</h4>
                        <img class="resourceImg" src="/Images/Resources/britannica.png" />
                    </div>
                </a>
            </div>


        </div>

    </main>          
    )
}