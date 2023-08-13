import React, { useState } from 'react';
import Header from './Header';
import ResumePage from './ResumePage';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Footer from './Footer';
import './App.css';
function App() {
    const [currentPage, setCurrentPage] = useState("");

    return (
        <div className="App">
            <Header currentPage={currentPage} changePage={setCurrentPage} />
            {
                <div className="App-content">
                    {(currentPage === "" || currentPage === "home") &&
                                <h1>Hi, I'm Reshma. Welcome to my website!</h1>
                    }
                    {currentPage === "about-me" && <AboutMe />}
                    {currentPage === "resume" && <ResumePage />}
                    {currentPage === "my-projects" && <MyProjects />}
                    <Footer />
                </div>

            }
        </div>
    );
}


export default App;