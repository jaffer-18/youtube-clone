import React from 'react'
import './More.css'

const More = () => {
  return (
    <div className="more-container">      
      <h1 className="more-title">Vid tube</h1>
      
      <p className="more-abstract">
        <strong>ABSTRACT:</strong> Vid tube is a free website which was developed in order to watch videos for entertainment purpose
      </p>
      
      <p className="more-working">
        <strong>WORKING:</strong> Vid tube is build using React.js and firebase which fetches real time data and videos and its content from youtube data API 
      </p>
      
      <p className="more-features">
        <strong>UPCOMING FEATURES:</strong> In the upcoming we would like to add watch history, parental controls, and uploading videos and also downloading them and also making shorts
      </p>
    </div>
  )
}

export default More
