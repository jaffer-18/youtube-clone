import React from 'react'
import './Upload.css'
import video from '../../assets/video.mp4'

const Upload = () => {
  return (
    <div>
        <div className='uploaded-container'>
            <h1>Uploaded videos</h1>
            <video src={video} className='uploaded-video' controls/>
            <p>hello</p>
            <p>hello</p>
            <p>i am here</p>
        </div>
    </div>
  )
}

export default Upload