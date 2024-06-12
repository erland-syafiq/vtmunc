
import React from "react";


/**
 * Dashboard Component
 * @param {Object[]} applicants array of applicants in descending order 
 * @returns {JSX.ELement} a dashboard with metrics on total number of participants and more
 */
export default function Dashboard({applicants}) {

    // Find total number of participants
    const totalParticipants = applicants.reduce((accumulator, applicant) => accumulator + applicant.delegationSize, 0);

    // Find number of days since last sign up. 
    const daysSinceSignUp = Math.floor((new Date() - new Date(applicants[0].date)) / (24 * 60 * 60 * 1000));

    return (
        <section className="Analysis">
            <div className="row">
                <div className="col-3">
                    <div className="card text-center">
                        <h4>Total Participants</h4>
                        <h2>{totalParticipants}</h2>
                    </div>
                    <div className="card text-center">
                        <h4>Number of Days Since a Sign Up</h4>
                        <h2>{daysSinceSignUp}</h2>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <div className="card">
                        <canvas id="participantsChart">
                        </canvas>
                    </div>
                    <h4>
                        Total Number of Delegates
                    </h4>
                </div>
                <div className="col-3">
                    <div className="card text-center">
                        <h4>Applicants' Invoice Status</h4>
                        <canvas id="invoiceStatusChart"></canvas>
                    </div>
                </div>
            </div>
        </section>
    );
};