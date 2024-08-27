import React from 'react';
import RegisterForm from './RegisterForm';
import './Register.css';

export const metadata = {
    title: "Register",
    description: "Register for VTMUNC to access committee info, schedules, and benefits. Join dynamic debates, develop diplomacy skills, and connect with global delegates"
}

export default function RegisterPage() {
    return (
        <main className="registerPage">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Registration</h1>

                        <div className="group">
                            <h4>Dear Advisors and Independent Delegates,</h4>
                            <p>Thank you for your registration for VTMUNC! For independent delegates that are staying in Blacksburg overnight, please contact Will Letvin, our charge d'affairs at vtmunconference@gmail.com, so we can send you a liability waiver form.</p>
                            <p>Note: * means a field is required</p>
                        </div>

                        <div className="group">
                            <h4>Payment Information</h4>
                            <p>
                                Once you have completed this form, we will send you an invoice. An initial deposit will be due within <b>two weeks</b> that is the entire delegation fee and 50% of the cumulative fee for each delegate. A final deposit will be due upon signing in at the conference, and it will include the other 50% of the  cumulative fee for each delegate.<br />
                                <br />
                            </p>
                            <h4>Fees</h4>
                            <p>
                                <b>Early Registration:</b> 
                                    <br /> September 1st to October 18th 
                                    <br /> For delegates: $50 per delegate, $60 delegation fee (waived for independent delegates)
                                    <br /> For sponsors: FREE for the first advisor, $5 for each additional sponsor<br /><br />
                                <b>Normal Registration:</b>
                                    <br /> October 19th to December 15th 
                                    <br /> For delegates: $70 per delegate, $70 delegation fee (waived for independent delegates)
                                    <br /> For sponsors: $10 per sponsor<br /><br />
                                <b>Late Registration:</b> 
                                    <br /> December 16th to January 22nd 
                                    <br /> For delegates: $80 per delegate, $80 delegation fee (waived for independent delegates)
                                    <br /> For sponsors: $10 per sponsor<br /><br />
                                <br />
                            </p>
                        </div>

                        <RegisterForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
