"use client"

import React from 'react';
import Link  from "next/link";
import './Navbar.css';
import { usePathname } from 'next/navigation';

function Navbar() {
    const path = usePathname();

    const isHomePage = path === '/';

    const navbarStyle = isHomePage ? 'navbar-transparent' : '';

    return (
            <nav className={`${navbarStyle} navbar navbar-expand-md navbar-toggleable-md navbar-light box-shadow`}>
                <div className="container-fluid">
                    <Link href="/"><img src="/images/logo.png" className="navbar-logo"/></Link>
                    <Link className="nav-link" href="/">VTMUNC</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-md-inline-flex justify-content-end">
                        <Link className="nav-link" href="/"> Home </Link>
                        <Link className="nav-link" href="/about"> About Us </Link>
                        <Link className="nav-link" href="/committees">Committees </Link>
                        {/* <Link className="nav-link" href="/resources">Resources </Link>
                        <Link className="nav-link" href="/sponsors"> Sponsors </Link> */}
                        <Link className="nav-link" href="/register"> Register </Link>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;