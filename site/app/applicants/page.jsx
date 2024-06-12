import React from "react";
import { getApplicants } from "../api/db/dynamodb";
import Dashboard from "./Dashboard";
import Link from "next/link";

export default async function DashboardPage() {
    try {
        const applicants = await getApplicants();

        return (
            <main className="container dashboard">
                <h2>Delegations</h2>
                <Dashboard />
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
                                        <tr>
                                            <td>{applicant.date}</td>
                                            <td>{applicant.schoolName}</td>
                                            <td>{applicant.advisorName}</td>
                                            <td>{applicant.advisorEmail}</td>
                                            <td>{applicant.delegationSize}</td>
                                            <td>{applicant.invoiceStatus}</td>
                                            <td>
                                                <Link href={`/applicants/edit/${applicant.id}`}>Edit</Link> |
                                                <Link href={`/applicants/details/${applicant.id}`}>Details</Link> |
                                                <Link href={`/applicants/edit/${applicant.id}`}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </main>
        )

    }
    catch (e) {
        return (
            <main className="container">
                <h1>Error: {e.name}</h1>
                <p>{e.message}</p>
            </main>
        )
    }
}