import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>CONTACT:</div>
            <a href="mailto:reshma.ragh@gmail.com" className="gmail-link">
                <span className="link-content">
                    <img src="/gmail-icon.png" alt="Gmail" className="icon" />
                    <span className="link-text">E-mail</span>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/reshma-raghavan-03038821b/" className="linkedin-link">
                <span className="link-content">
                    <img src="/linkedin-icon.png" alt="LinkedIn" className="icon" />
                    <span className="link-text">LinkedIn</span>
                </span>
            </a>
        </div>
    );
};


export default Footer;