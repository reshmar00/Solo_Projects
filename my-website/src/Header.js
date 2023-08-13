import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <a href="#default" className="logo" onClick={() => props.changePage("")}>
                <img src={`${process.env.PUBLIC_URL}/resh-logo.jpg`} alt="Reshma's website" />
            </a>
            <a className={props.currentPage === "home" ? "active" : ""} href="#home" onClick={() => props.changePage("home")}>HOME</a>
            <a className={props.currentPage === "about-me" ? "active" : ""} href="#about-me" onClick={() => props.changePage("about-me")}>ABOUT ME</a>
            <a className={props.currentPage === "resume" ? "active" : ""} href="#resume" onClick={() => props.changePage("resume")}>RESUME</a>
            <a className={props.currentPage === "my-projects" ? "active" : ""} href="#my-projects" onClick={() => props.changePage("my-projects")}>MY PROJECTS</a>
        </div>
    );
}

export default Header;