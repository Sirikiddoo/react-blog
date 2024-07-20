import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo-medium.png";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Company logo"/>
            </div>
            <div className="navbar-links">
                <NavLink
                    className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/">
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/overview">
                    Alle posts
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/new-post">
                    Nieuwe post maken
                </NavLink>
            </div>
        </nav>
    );
}

export default Navigation;