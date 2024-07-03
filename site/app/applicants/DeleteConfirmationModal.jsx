import { useRef, useState } from "react";

const APPLICANTS_URL = "/api/applicants";

export default function DeleteConfirmationModal({applicant, showDeleteConfirmation, setShowDeleteConfirmation, deleteApplicant}) {

    const modalRef = useRef(null);
    const [error, setError] = useState("");

    async function handleDelete() {
        try {
            const response = await fetch(APPLICANTS_URL, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: applicant.id
                })
            });

            if (response.status != 200) {
                throw new Error(`Response error code: ${response.status}, Response message: ${response.body}`)
            }
            
            setShowDeleteConfirmation(false);
            deleteApplicant(applicant);
        }
        catch (e) {
            
            setError(`${e.name}: ${e.message}`);
        }
    }

    function handleClickOnModal(event) {
        if (modalRef && !modalRef.current.contains(event.target)) {
            setShowDeleteConfirmation(false);
        }
    }


    return (
        <div className={`modal ${showDeleteConfirmation ? 'd-block' : 'd-none'} transparent-overlay-delete-confirmation`} tabIndex="-1" role="dialog" onClick={handleClickOnModal}>
            <div className="modal-dialog modal-xl" role="document" ref={modalRef}>
                <div className="modal-content card">
                    <div className="modal-header">
                        <h3 className="modal-title">Confirm Deletion</h3>
                        <button type="button" className="close" onClick={() => setShowDeleteConfirmation(false)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h4>Are you sure you want to delete this applicant?</h4>
                        <br />
                        <p><strong>Advisor:</strong> {applicant.advisorName}</p>
                        <p><strong>Advisor Relation:</strong> {applicant.advisorRelation}</p>
                        <p><strong>School Name:</strong> {applicant.schoolName}</p>
                        <p><strong>School Address:</strong> {applicant.schoolMailingAddress}</p>
                        <p><strong>Delegation Size:</strong> {applicant.delegationSize}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteConfirmation(false)}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                    <span className="text-danger">{error}</span>
                </div>
            </div>
        </div>
    )
}