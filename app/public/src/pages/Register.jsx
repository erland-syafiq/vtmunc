import React from 'react';
import {useState} from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function Register() {
    useDocumentTitle("Register");

    const [formData, setFormData] = useState({
        advisorEmail: "",
        advisorName: "",
        advisorPhone: "",
        advisorRelation: "",
        advisorOtherInformation: "",
        headDelegateEmail: "",
        headDelegateName: "",
        headDelegatePhone: "",
        schoolName: "",
        delegationSize: 0,
        schoolMailingAddress: "",
        delegateList: "",
        isAgreeWithTerms: false,
        commentsOrQuestions: ""
    })

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    function handleChange (e) {
        const { name, value, type, checked } = e.target;

        // Deals with a checkbox input
        if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: checked
            })
            return;
        }
        
        // Deals with a number input
        if (type === "number") {
            if (isNaN(value)) {
                setFormData({
                    ...formData,
                    [name]: 0
                })
            }
            else {
                setFormData({
                    ...formData,
                    [name]: parseInt(value)
                });
            }
            return;
        }
        
        // Deals with a string input
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function validateForm() {
        const newErrors = {};

        if (!formData.advisorEmail) newErrors.advisorEmail = "Advisor Email is required";
        if (!isValidEmail(formData.advisorEmail)) newErrors.advisorEmail = "Advisor Email is invalid";
        if (!formData.advisorName) newErrors.advisorName = 'Advisor Name is required';
        if (!formData.advisorPhone) newErrors.advisorPhone = 'Advisor Phone is required';
        if (!formData.advisorRelation) newErrors.advisorRelation = "Advisor Relation is required"
    
        if (!formData.schoolName) newErrors.schoolName = 'School Name is required';
        if (formData.delegationSize <= 0) newErrors.delegationSize = 'Delegation Size is required';
        if (!formData.schoolMailingAddress) newErrors.schoolMailingAddress = 'School Mailing Address is required';
        if (!formData.isAgreeWithTerms) newErrors.isAgreeWithTerms = 'You must agree to the terms';
        
        setErrors(newErrors);
        console.log(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit (e) {
        e.preventDefault();

        const URL = `${process.env.BACKEND_URL}/applicants`

        if (!validateForm()) return;

        try {
            // Fetch data
            const response = await fetch(URL, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            
            if (response.status === 200) {
                navigate("/register-success");
            }
            else {
                navigate("/register-server-failure");
            }
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };

    return (
        <main className="container registerPage">
            <div className="row">
                <div className="col-md-12">

                    <h1> Registration</h1>

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

                    <form onSubmit={handleSubmit}>
                        <div className="group">
                            <h4>Advisor(s) Information</h4>
                            <p>Please provide your contact information. We will use this information to stay in touch with you as we prepare for the conference, and to send you an invoice when required. If you are an independent delegate, describe your relation to the independent delegate (e.g: Parent or Self).</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <h5>Advisor Email*</h5>
                                    <input
                                        name="advisorEmail"
                                        value={formData.advisorEmail}
                                        onChange={handleChange}
                                        className={`form-control ${errors.advisorEmail ? 'is-invalid' : ""}`} 
                                    />
                                    <span className="text-danger">{errors.advisorEmail}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <h5> Advisor Name*</h5>
                                    <input 
                                        name="advisorName"
                                        value={formData.advisorName}
                                        onChange={handleChange}
                                        className={`form-control ${errors.advisorName ? 'is-invalid' : ""}`} 
                                    />
                                    <span className="text-danger">{errors.advisorName}</span>
                                </div>
                                <div className="col-md-3">
                                    <h5>Phone Number*</h5>
                                    <input 
                                        name="advisorPhone"
                                        value={formData.advisorPhone}    
                                        onChange={handleChange}
                                        className={`form-control ${errors.advisorPhone ? 'is-invalid' : ""}`} 
                                    />
                                    <span className="text-danger">{errors.advisorPhone}</span>
                                </div>
                                <div className="col-md-5">
                                    <h5>Describe your relation to the school (Teacher, Parent, etc)*</h5>
                                    <input 
                                        name="advisorRelation" 
                                        value={formData.advisorRelation}
                                        onChange={handleChange}
                                        className={`form-control ${errors.advisorRelation ? 'is-invalid' : ""}`} 
                                    />
                                    <span className="text-danger">{errors.advisorRelation}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h5>List the name of your other advisors and other contact information if there are any.</h5>
                                    <input 
                                        name="advisorOtherInformation" 
                                        value={formData.advisorOtherInformation}
                                        onChange={handleChange}
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <h4>Head Delegate Information</h4>
                            <p>A head delegate is a designated student representative who will lead their organization. Advisors, please provide the information for those head delegates. However, filling out this section is not required.  Independent delegates should also not fill out this form. </p>

                            <div className="row">
                                <div className="col-md-4">
                                    <h5>Head Delegate Email</h5>
                                    <input 
                                        name="headDelegateEmail" 
                                        value={formData.headDelegateEmail}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                                <div className="col-md-4">
                                    <h5>Head Delegate Name</h5>
                                    <input 
                                        name="headDelegateName" 
                                        value={formData.headDelegateName}
                                        onChange={handleChange}
                                        className="form-control" 
                                    />
                                </div>
                                <div className="col-md-4">
                                    <h5>Phone Number</h5>
                                    <input 
                                        name="headDelegatePhone"
                                        value={formData.headDelegatePhone}
                                        onChange={handleChange} 
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <h4>School and Organizational Info.</h4>
                            <p>
                                Please provide the following information about your school and organization. Independent delegates are kindly asked to list "Independent Delegate” under “School Name” and to use their personal address instead of a school address.<br />

                                If, after submitting this form, you would like to add or drop delegates, please reach out to our Chargé d'Affaires, Delaney Moran, chargedaffaires@vtmunc.org <br />
                            </p>

                            <div className="row">
                                <div className="col-md-6">
                                    <h5>School Name*</h5>
                                    <input 
                                        name="schoolName" 
                                        value={formData.schoolName}
                                        onChange={handleChange}
                                        className={`form-control ${errors.schoolName ? 'is-invalid' : ""}`} 
                                    />
                                    <span className="text-danger">{errors.schoolName}</span>
                                </div>
                                <div className="col-md-2">
                                    <h5>Delegation Size*</h5>
                                    <input 
                                        name="delegationSize" 
                                        type="number"
                                        value={formData.delegationSize}
                                        onChange={handleChange}
                                        className={`form-control ${errors.delegationSize ? 'is-invalid' : ""}`} 
                                    />
                                    <span className="text-danger">{errors.delegationSize}</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h5>School Mailing Address (In case we need to mail lost items or awards and merchandise)*</h5>
                                    <input 
                                        name="schoolMailingAddress" 
                                        value={formData.schoolMailingAddress}
                                        onChange={handleChange}
                                        className={`form-control ${errors.schoolMailingAddress ? 'is-invalid' : ""}`} 
                                    />
                                    <span className="text-danger">{errors.schoolMailingAddress}</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h5>Names of Delegates (please respond in a list format) [Not required]</h5>
                                    <textarea 
                                        name="delegateList" 
                                        value={formData.namesOfDelegates}
                                        onChange={handleChange}
                                        className="form-control"
                                    > </textarea>
                                </div>
                            </div>
                        </div>


                        <div className="group">
                            <h4>Agreement to Abide by Conference Policies</h4>
                            <p><a href="/Policy/Conference_Policies.pdf" target="_blank">VTMUNC policies</a> are published in the website. The VTMUNC staff, including the Secretary General and the Secretariat, are released from liability for delegate conduct for the duration of the conference. Additionally, VTMUNC staff reserves the right to ask a delegate to leave the conference if said delegate violates our policies.</p>
                            <h5>Do you agree to the terms stated*</h5>


                            <div className="form-check">
                                <input 
                                    type="checkbox"
                                    name="isAgreeWithTerms" 
                                    checked={formData.isAgreeWithTerms}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label name="isAgreeWithTerms" className="form-check-label"></label>
                                <span name="isAgreeWithTerms" className="text-danger">{errors.isAgreeWithTerms}</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Comments or Questions?</h4>
                                    <p>If you have any comments or questions, please write them below!</p>
                                    <textarea 
                                        name="commentsOrQuestions" 
                                        value={formData.commentsOrQuestions}
                                        onChange={handleChange}
                                        className="form-control"
                                    ></textarea>
                                    <span asp-validation-for="CommentsOrQuestions" className="text-danger"></span>
                                </div>
                            </div>
                        </div>


                        
                        <div className="form-group">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register;