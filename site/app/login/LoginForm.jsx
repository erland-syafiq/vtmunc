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
            const userEmail = formData.email;
            const userPass = formData.password;
            // Send post request with user email and password
            fetch('/api/auth/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail, userPass }),
            })
            .then(response => {
                if (response.ok) { 
                  // Redirect to applicants if ok response
                  window.location.href = '/applicants';
                } else {
                    const newErrors = {};
                    newErrors.email = "Invalid email and password";
                    newErrors.password = "Invalid email and password";
                    clearForm();
                    setErrors(newErrors);
                }
            });

        }
        catch(e) {
            console.error("There was an error submitting the form!", e);
        }
        
    };

    function clearForm() {
        setFormData({ email: '', password: '' });
    };

    function validateForm() {
        const newErrors = {};

        if (!formData.email) newErrors.email = "Email is required";
        else if (!isValidEmail(formData.email)) newErrors.email = "Email is invalid";
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
                {/* TODO: or delete */}
                <label className="custom-control-label" htmlFor="rememberMe">
                    Remember me?
                </label>
            </div>
            <div>
                <button id="login-submit" type="submit" className="w-100 btn btn-lg btn-primary">
                    Log in
                </button>
            </div>
        </form>
    )
}