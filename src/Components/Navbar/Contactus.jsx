import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <div className="contact-container">
      <div className="bio-section">
        <p>
          I am a BCA student, eager to expand my knowledge and develop new skills.
          Passionate about learning, I strive for academic excellence and personal growth.
          My dedication and hard work help me overcome challenges and achieve my goals.
          I enjoy exploring different subjects, analyzing concepts, and applying what I learn to real-life situations.
          With a strong work ethic and a curious mindset, I embrace opportunities for improvement and innovation.
          I am committed to success and believe in continuous learning to make a meaningful impact.
          My ambition drives me to excel, and I am determined to build a bright future.
        </p>
        <p>
          Vid Tube is a free website developed to watch videos for entertainment purposes at no cost.
          Vid Tube is built using React.js and Firebase, which fetches real-time data, videos, and their content
          (e.g., video titles, descriptions, likes, dislikes, and subscriber counts) from the YouTube Data API.
        </p>
      </div>

      <div className="contact-info">
        <p>
          <span className="contact-label">Email:</span> 
          <span className="contact-value">jaffer@gmail.com</span>
        </p>
      </div>

      <div className="contact-info">
        <p>
          <span className="contact-label">Landline:</span> 
          <span className="contact-value">9876543210</span>
        </p>
      </div>

      <div className="contact-info">
        <p>
          <span className="contact-label">Mobile:</span> 
          <span className="contact-value">9876543210</span>
        </p>
      </div>

      <h1 className="more-title">Upcoming Features</h1>
      <p className="more-abstract">
        <strong>Abstract:</strong> Vid Tube is a free website developed to watch videos for entertainment purposes at no cost.
      </p>
      
      <p className="more-working">
        <strong>Working:</strong> Vid Tube is built using React.js and Firebase, which fetches real-time data, videos, and their content
        (e.g., video titles, descriptions, likes, dislikes, and subscriber counts) from the YouTube Data API.
      </p>
      
      <p className="more-features">
        <strong>Upcoming Features:</strong> In the future, we plan to add watch history, parental controls, video uploads, downloads,
        shorts creation, video sharing, channel subscriptions, and playlist creation.
      </p>
      
      <p className="more-abstract">
        <strong>In the Pipeline:</strong> We are constantly working to bring new and exciting features to enhance our user interface
        and improve video playback. Stay tuned for more updates.
      </p>
      
      <p className="more-working">
        <strong>On Our Roadmap:</strong> Our roadmap includes powerful tools for content discovery, performance improvements,
        and fresh UI updates. We are listening to your feedback and shaping the future of Vid Tube.
      </p>
      
      <p className="more-features">
        <strong>Stay Tuned:</strong> Big things are on the way! We are working hard behind the scenes to bring better features,
        improved video curation, and community engagement tools. This is just the beginning—stick with us as we grow and evolve Vid Tube.
      </p>
    </div>
  );
};

export default Contactus;