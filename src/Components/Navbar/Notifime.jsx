import React from 'react'
import './Notifime.css'

const Notifime = () => {
  return (
    <div className="notifi-container">
        <h2 className="notification-header">Notifications</h2>
        <div className="notification-content">
            <div className="notification-item">
                <p className="notification-title">New Subscriber</p>
                <p className="notification-details">John just subscribed to your channel</p>
                <p className="notification-time">2 minutes ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">Video Liked</p>
                <p className="notification-details">Emily liked your video</p>
                <p className="notification-time">5 minutes ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">New Comment</p>
                <p className="notification-details">Mike commented: "need more on react"</p>
                <p className="notification-time">12 minutes ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">Video Milestone</p>
                <p className="notification-details">Intro to GitHub got 1000 likes</p>
                <p className="notification-time">30 minutes ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">New Reply</p>
                <p className="notification-details">Anna replied: "which one should I learn react or next"</p>
                <p className="notification-time">45 minutes ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">Mention</p>
                <p className="notification-details">@techguru mentioned you in comment: "check this channel"</p>
                <p className="notification-time">3 minutes ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">Achievement Unlocked</p>
                <p className="notification-details">You unlocked the "The Rising Star" badge</p>
                <p className="notification-time">1 day ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">Video Shared</p>
                <p className="notification-details">Your video was shared by someone</p>
                <p className="notification-time">4 hours ago</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">Story Liked</p>
                <p className="notification-details">Daniel liked your story</p>
                <p className="notification-time">Just now</p>
            </div>

            <div className="notification-item">
                <p className="notification-title">Thumbnail Updated</p>
                <p className="notification-details">Your thumbnail was updated</p>
                <p className="notification-time">2 hours ago</p>
            </div>
        </div>
    </div>
  )
}

export default Notifime
