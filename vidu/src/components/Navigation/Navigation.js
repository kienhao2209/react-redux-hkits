import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
                <div className="container px-5">
                    <Link to="/">Start Bootstrap</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >Menu
                        <i className="bi-list" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tin">Tin tức</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tin-chi-tiet">Tin chi tiết</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lien-he">Liên hệ</NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                            <span className="d-flex align-items-center">
                                <i className="bi-chat-text-fill me-2"/>
                                <span className="small">Send Feedback</span>
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;