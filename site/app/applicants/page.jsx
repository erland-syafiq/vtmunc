import React from "react";
import { getApplicants } from "@/app/api/db/dynamodb";
import Dashboard from "./Dashboard";
import Link from "next/link";
import "./DashboardPage.css";
import { invoiceStatusToString } from "@/app/utils/applicantUtils";
import ErrorPage from "../components/ErrorPage";

/**
 * Page displays some metrics on our current applicants including total number of participants, 
 * total number of participants over time, our current invoice status demographics, and more. It 
 * also displays a table of all of the participants. 
 * 
 * @returns {JSX.Element} dashboard page
 */
export default async function DashboardPage() {
    try {
        const applicants = await getApplicants();
        // Sorts applicants in descending order by date in place
        applicants.sort((a, b) => new Date(b.date) - new Date(a.date));

        return (
            <main className="dashboard">
                <div className="container">
                    <h2>Delegations</h2>
                    <Dashboard applicants={applicants}/>
                    <div className="table-responsive">
                        <table className="table table-sm table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>School</th>
                                    <th>Advisor Name</th>
                                    <th>Advisor Email</th>
                                    <th>Delegation Size</th>
                                    <th>Invoice Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applicants.map((applicant) => {
                                        return (
                                            <tr key={applicant.id} >
                                                <td>{applicant.date}</td>
                                                <td>{applicant.schoolName}</td>
                                                <td>{applicant.advisorName}</td>
                                                <td>{applicant.advisorEmail}</td>
                                                <td>{applicant.delegationSize}</td>
                                                <td>{invoiceStatusToString(applicant.invoiceStatus)}</td>
                                                <td>
                                                    <Link href={`/applicants/edit/${applicant.id}`}>Edit</Link> | <Link href={`/applicants/details/${applicant.id}`}>Details</Link> | <Link href={`/applicants/edit/${applicant.id}`}>Delete</Link> 
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </main>
        )

    }
    catch (e) {
        return <ErrorPage e={e} />
    }
}