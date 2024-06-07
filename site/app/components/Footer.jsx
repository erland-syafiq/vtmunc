import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footerText col-12 col-md-8 pb-3">
                        <div className="logoTitle d-flex align-items-center">
                            <img src="/images/logo.png" />
                            <h4>VTMUNC 2025</h4>
                        </div>
                        <p>
                            Virginia Tech, Blacksburg, VA 24061 <br/>
                            chargedaffaires@vtmunc.org <br />
                            <a href="https://www.inclusive.vt.edu/resources/land-acknowledgement-and-labor-recognition.html" target="_blank" className="footerLink" >
                            Land Acknowledgement</a>
                        </p>

                        <p className="disclaimerText">
                            Although this organization has members who are Virginia Tech students and may have University employees
                            associated or engaged in its activities and affairs, the organization is not a part of or an agency of
                            the University. It is a separate and independent organization which is responsible for and manages its
                            own activities and affairs. The University does not direct, supervise or control the organization and is
                            not responsible for the organization's contracts, acts or omissions. the VTMUNC secretariat reserves the
                            right to change website contents at any given time.
                        </p>

                        <a href="https://www.instagram.com/vtmunc/" target="_blank">
                            <img src="/images/instagram.svg" className="img-fluid" />
                        </a>
                    </div>


                    <div className="footerMap col-md-4 d-flex justify-content-center z-depth-1-half map-container" id="map-container-google-1">
                        <iframe src="https://maps.google.com/maps?q=blacksburg&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;