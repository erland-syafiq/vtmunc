"use client"


import { isValidEmail } from '../utils/validation';

import React, { useState } from 'react';

export default function LoginForm() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            // Attempt login
        }
        catch(e) {
            console.error("There was an error submitting the form!", e);
        }
        
    };

    function validateForm() {
        const newErrors = {};

        if (!formData.advisorEmail) newErrors.email = "Email is required";
        if (!isValidEmail(formData.advisorEmail)) newErrors.email = "Email is invalid";
        if (!formData.password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    return (
        <form id="account" method="post" onSubmit={handleSubmit}>
            <h4>Log In for staff</h4>
            <hr />
            <div className="form-floating">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    autoComplete="username"
                    aria-required="true"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <span className="text-danger">{errors.email}</span>
            </div>
            <div className="form-floating">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    autoComplete="current-password"
                    aria-required="true"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <span className="text-danger">{errors.password}</span>
            </div>
            <div className="form-group custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="custom-control-label" htmlFor="rememberMe">
                    Remember me?
                </label>
            </div>
            <div>
                <button id="login-submit" type="submit" className="w-100 btn btn-lg btn-primary">
                    Log in
                </button>
            </div>
            <div>
                <p>
                    <a id="forgot-password" href="/forgot-password">
                        Forgot your password?
                    </a>{' '}
                    |{' '}
                    <a href="/staff-register">
                        Register as a new user
                    </a>{' '}
                    |{' '}
                    <a id="resend-confirmation" href="/resend-email-confirmation">
                        Resend email confirmation
                    </a>
                </p>
            </div>
        </form>
    )
}