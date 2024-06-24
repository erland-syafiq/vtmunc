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
            <div class="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Registration</h1>

                        <div className="group">
                            <h4>Dear Advisors and Independent Delegates,</h4>
                            <p>Thank you for your registration for VTMUNC! For independent delegates that are staying in Blacksburg overnight, please contact Delaney Moran, our charge d'affairs on chargedaffaires@vtmunc.org, so we can send you a liability waiver form.</p>
                            <p>Note: * means a field is required</p>
                        </div>

                        <div className="group">
                            <h4>Payment Information,</h4>
                            <p>
                                Once you have completed this form, we will send you an invoice. Your delegation's registration will only be complete when you paid this invoice. Those invoices must be paid two weeks after the registration page.<br />
                                Late registration: The latest to pay January 26th<br />
                                <br />
                                Individual Delegates<br />
                                Early Registration: September to October 29th $50<br />
                                Normal Registration: October 30th to December 10th $60<br />
                                Late Registration: December 11th to January 19th $70<br />
                                <br />
                                Delegation Fees (a group of more than 3 people)<br />
                                Early: $60<br />
                                Normal: $70<br />
                                Late: $80<br />
                            </p>
                        </div>

                        <RegisterForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
