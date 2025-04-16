import React from 'react'
import './Contactus.css'

const Contactus = () => {
  return (
    <div className="contact-container">
        <div className="bio-section">
            <p>I am a BCA student, eager to expand my knowledge and develop new skills.
               Passionate about learning, I strive for academic excellence and personal growth. 
               My dedication and hard work help me overcome challenges and achieve my goals. 
               I enjoy exploring different subjects, analyzing concepts, and applying what I learn to real-life situations. 
               With a strong work ethic and a curious mindset, I embrace opportunities for improvement and innovation. 
               I am committed to success and believe in continuous learning to make a meaningful impact. 
               My ambition drives me to excel, and I am determined to build a bright future.
               Vid tube is a free website which was developed in order to watch videos for entertainment purpose for free of cost.
               Vid tube is build using React.js and firebase which fetches real time data and videos and its content like title of videos,description of video,number of likes and dislikes,number of subscribers from youtube data API.
            </p>
        </div>

        <div className="contact-info">
            <p><span className="contact-label">Email:</span> <span className="contact-value">jaffer@gmail.com</span></p>
        </div>

        <div className="contact-info">
            <p><span className="contact-label">Landline:</span> <span className="contact-value">9876543210</span></p>
        </div>

        <div className="contact-info">
            <p><span className="contact-label">Mobile:</span> <span className="contact-value">9876543210</span></p>
        </div>
    </div>
  )
}

export default Contactus
