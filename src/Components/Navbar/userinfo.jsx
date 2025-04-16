import React from 'react'
import './userinfo.css'
import profile_icon from '../../assets/jack.png'

const UserInfo = () => {
  return (
    <div>
      <img src={profile_icon} alt="profile" className="profile-image"/>
      <div className="user-info-container">
        <h2 className="user-info-title">ABOUT THE OWNER</h2>
        
        <div className="info-section">
          <p className="info-label">CHANNEL NAME:</p>
          <p className="info-value">JACK SMITH</p>
        </div>

        <div className="info-section">
          <p className="info-label">CHANNEL BIO:</p>
          <p className="info-value">This channel was created by John Smith who give information about the coding, programming language and various connecting devices and also technical topics</p>
        </div>

        <div className="info-section">
          <p className="info-label">CHANNEL CREATION DATE:</p>
          <p className="info-value">23-2-2000</p>
        </div>

        <div className="info-section">
          <p className="info-label">TOTAL VIDEOS UPLOADED:</p>
          <p className="info-value">122 videos</p>
        </div>

        <div className="info-section">
          <p className="info-label">TOTAL VIEWS:</p>
          <p className="info-value">3.3 millions</p>
        </div>

        <div className="info-section">
          <p className="info-label">CHANNEL CATEGORY:</p>
          <p className="info-value">tech/gadgets/education/gaming</p>
        </div>

        <div className="info-section">
          <p className="info-label">UPLOAD FREQUENCY:</p>
          <p className="info-value">uploads 2 videos a week</p>
        </div>

        <div className="info-section">
          <p className="info-label">LOCATION:</p>
          <p className="info-value">San Fransisco</p>
        </div>

        <div className="info-section">
          <p className="info-label">CONTACT/BUSINESS:</p>
          <p className="info-value">jaffer@gmail.com</p>
        </div>

        <div className="info-section">
          <p className="info-label">SOCIAL MEDIA LINKS:</p>
          <div className="social-links">
            <p className="info-value">Instagram: unknowngamer_123</p>
            <p className="info-value">Facebook: john_smith</p>
            <p className="info-value">Twitter: john_smith</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
