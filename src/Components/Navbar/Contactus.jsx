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
        <h1 className="more-title">UPCOMING FEATURES</h1>
      
      <p className="more-abstract">
        <strong>ABSTRACT:</strong> Vid tube is a free website which was developed in order to watch videos for entertainment purpose for free of cost
      </p>
      
      <p className="more-working">
        <strong>WORKING:</strong> Vid tube is build using React.js and firebase which fetches real time data and videos and its content like title of videos,description of video,number of likes and dislikes,number of subscribers from youtube data API. 
      </p>
      
      <p className="more-features">
        <strong>UPCOMING FEATURES:</strong> In the upcoming we would like to add watch history, parental controls,uploading videos,downloading videos,making shorts,sharing video and subscribing to the channels and also creating a playlist.
      </p>
      <p className="more-abstract">
        <strong>IN THE PIPELINE:</strong> we are constantly working to bring new and exciting features to enhance our user interface and your experince and to improve video playing features there alot of pipelines.So stay tuned.
      </p>
      
      <p className="more-working">
        <strong>ON OUR ROADMAP:</strong> our roadmap includes powerful tools for content discovery,performance and fresh UI updates.We are listening to your feedbacks and shaping the future of the website
      </p>
      
      <p className="more-features">
        <strong>STAY TUNED:</strong> Big things are on the way! we are working hard behind the scenes features,better video curation and community engagement tools.this iis just the beginning-stick with us as we grow and evolve your Vid tube.
      </p>
    </div>
  )
}

export default Contactus
