import React from 'react';
import './MyProjects.css';
import Footer from "./Footer";

function MyProjects() {
    return (
        <div className="my-projects-content">
            <h2>My Projects</h2>
            <p>Here are some of the projects I've worked on:</p>
             Example:
            <div className="project">
                <h3>Project 1</h3>
                <p>Description of project 1...</p>
            </div>
            <Footer />
        </div>
    );
}

export default MyProjects;