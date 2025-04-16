import React from 'react'
import './Notifime.css'

const Notifime = () => {
  return (
    <div className="notifi-container">
        <div className="section">
            <h2 className="section-title">UNDER THE HOOD</h2>
            <p className="content-text">
                Vidtube is powered by modern web technologies to ensure a fast, responsive, and a user-friendly as the core is React.js enabling efficient Components-based developement. Additional tools and libraries like react-router-DOM and moment and firebase support API calls
            </p>
        </div>

        <div className="section tech-stack">
            <h2 className="section-title">TECH STACK BREAKDOWN</h2>
            <div className="tech-item">
                <p><strong>Front-end:</strong> React.js, JSX, CSS</p>
            </div>
            <div className="tech-item">
                <p><strong>State Management:</strong> useState, useEffect</p>
            </div>
            <div className="tech-item">
                <p><strong>Routing:</strong> react-router-dom allows user to route and navigate to one page to another without refreshing the browser</p>
            </div>
        </div>

        <div className="section">
            <h2 className="section-title">MEET THE DEVELOPERS</h2>
            <p className="content-text">
                We as a team of three are very passionate in building famous website and interactive website
            </p>
        </div>

        <div className="section">
            <h2 className="section-title">WHY YOUTUBE-CLONE</h2>
            <p className="content-text">
                We have created youtube-clone called vid tube to understanding the real-world React apps. It was a learning journey for us that reflects our growth as a developer
            </p>
        </div>

        <div className="section">
            <h2 className="section-title">CHALLENGES WE FACED</h2>
            <p className="content-text">
                While building the vid tube the main challenge for us for integrating the API's. Each step taught us something new about React.js
            </p>
        </div>

        <div className="section">
            <h2 className="section-title">CREDITS AND RESOURCES</h2>
            <p className="content-text">
                We are using youtube data API, React.js documentation, and free UI from bootstrap and tailwind websites and Github to publish and also vercel to deployment process
            </p>
        </div>
    </div>
  )
}

export default Notifime
