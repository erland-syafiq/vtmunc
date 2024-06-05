import React from "react";
import './LoginPage.css';
import LoginForm from "./LoginForm";

export const metadata = {
    title: "Staff login",
    description: "Login page for staff.",
    noindex: true
}

export default function LoginPage () {

    return (
        <section className="container login d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="loginBox">
                    <h1>Staff Sign In</h1>
                    <LoginForm />
                    <h5>For any issues, contact erland@vt.edu</h5>
                </div>
            </div>
        </section>
    );
};