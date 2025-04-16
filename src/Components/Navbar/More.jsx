import React from 'react'
import './More.css'

const More = () => {
  return (
    <div className="more-container">      
      <h1 className="more-title">UPCOMING FEATURES</h1>
      
      <p className="more-abstract">
        <strong>ABSTRACT:</strong> Vid tube is a free website which was developed in order to watch videos for entertainment purpose for free of cost
      </p>
      
      <p className="more-working">
        <strong>WORKING:</strong> Vid tube is build using React.js and firebase which fetches real time data and videos and its content like title of videos,description of video,number of likes and dislikes,number of subscribers from youtube data API. 
      </p>
      
      <p className="more-features">
        <strong>UPCOMING FEATURES:</strong> In the upcoming we would like to add watch history, parental controls, and uploading videos and also downloading them and also making shorts and also sharing video and subscribing to the channels and also creating a playlist.
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

export default More
