import React from 'react';
import { NavLink, useLocation} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const navbarStyle = isHomePage ? 'navbar-transparent' : '';

    return (
        <header>
            <nav className={`${navbarStyle} navbar navbar-expand-sm navbar-toggleable-sm navbar-light box-shadow`}>
                <div className="container-fluid">
                    <NavLink to="/"><img src="/Images/Logo.png" className="navbar-logo"/></NavLink>
                    <NavLink className="nav-link" to="/">VTMUNC</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about"> About Us</NavLink>
                        <NavLink className="nav-link" to="/committees">Committees</NavLink>
                        <NavLink className="nav-link" to="/resources">Resources</NavLink>
                        <NavLink className="nav-link" to="/sponsors"> Sponsors</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;