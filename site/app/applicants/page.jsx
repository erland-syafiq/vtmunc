"use client"

import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Link from "next/link";
import "./DashboardPage.css";
import { invoiceStatusToString } from "@/app/utils/applicantUtils";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

/**
 * Page displays some metrics on our current applicants including total number of participants, 
 * total number of participants over time, our current invoice status demographics, and more. It 
 * also displays a table of all of the participants. 
 * 
 * @returns {JSX.Element} dashboard page
 */
export default function DashboardPage() {
    
    // List of applicants
    const [applicants, setApplicants] = useState([]);

    // Whether delete popup box is visible
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    
    // Applicant to be deleted
    const [applicantToDelete, setApplicantToDelete] = useState({});



    // Fetch data for applicants
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("/api/applicants", {cache: "no-store"});
            const newApplicants = await res.json();
            setApplicants(newApplicants);
        }
        getData();
    }, []);

    // Open delete confirmation
    function handleApplicantDelete(applicant) {
        setApplicantToDelete(applicant);
        setShowDeleteConfirmation(true);
    }

    // Delete applicant
    function deleteApplicant(applicantToDelete) {
        const newApplicants = applicants.filter((applicant) => applicantToDelete.id != applicant.id);
        setApplicants(newApplicants);
    }

    console.log(applicants);


    if (applicants.length == 0) {
        return (
            <main className="vh-100 dashboard"></main>
        )
    }

    // Sorts applicants in descending order by date in place
    applicants.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <main className="dashboard pt-3">
            <DeleteConfirmationModal 
                applicant={applicantToDelete}
                showDeleteConfirmation={showDeleteConfirmation}
                setShowDeleteConfirmation={setShowDeleteConfirmation}
                deleteApplicant={deleteApplicant}
            />
            <div className="container">
                <h2>Delegations</h2>
                <Dashboard applicants={applicants}/>
                <h3>Delegation List</h3>
                <Link href="/register">Manual registration</Link>
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
                                <th>Delete</th>
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
                                                <Link href={`/applicants/edit/${applicant.id}`}>Edit</Link> | <Link href={`/applicants/details/${applicant.id}`}>Details</Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-danger" onClick={() => handleApplicantDelete(applicant)}>
                                                    <img src="/icons/trash.svg" className="img-fluid" />
                                                </button> 
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