import React from 'react';
import './AboutMe.css';
import Footer from "./Footer";

function AboutMe() {
    return (
        <div className="about-me-content">
            <div className="about-me-content-inner">
                <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="Reshma's Portrait" className="App-photo" />
                <p>
                    Hi there! I'm currently pursuing my Master of Software Development
                    degree at the University of Utah, set to graduate in December 2023.
                    Before diving into this exciting journey, I had a blast working in education,
                    language editing, and advertising. These experiences have given me a well-rounded
                    perspective on the importance of effective communication, attention to detail, and creative
                    problem-solving. I'm always thrilled to find opportunities to apply these skills
                    and collaborate with others.<br /><br />
                    Feel free to connect with me – let's chat programming, tech stacks,
                    or anything else that sparks our interest!
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutMe;