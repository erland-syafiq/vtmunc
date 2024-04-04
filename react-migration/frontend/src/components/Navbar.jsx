import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light box-shadow mb-3">
                <div class="container-fluid">
                    <img src="/Images/Logo.png" class="navbar-logo" />
                    <a class="navbar-brand customFont" asp-area="" asp-controller="Home" asp-action="Index">VTMUNC</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse d-sm-inline-flex justify-content-end">
                        <NavLink to="/"><a class="nav-link customFont"> Home</a></NavLink>
                        <NavLink to="/about"><a class="nav-link customFont"> About Us</a></NavLink>
                        <NavLink to="/committees"><a class="nav-link customFont"> Committees</a></NavLink>
                        <NavLink to="/resources"><a class="nav-link customFont"> Resources</a></NavLink>
                        <NavLink to="/sponsors"><a class="nav-link customFont"> Sponsors</a></NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;