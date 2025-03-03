import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import Video1 from '../../assets/video.mp4'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'
import Share from '../../assets/share.png'
import Save from '../../assets/save.png'
import Jack from '../../assets/jack.png'
import User_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'


const PlayVideo = ({videoId}) => {

    const [apiData,setApiData]=useState(null);
    const [channelData,setChannelData] = useState(null);
    const [commentData,setCommentData] = useState([])

    const fetchVideoData = async()=>{
        //fetching videos data 
        const videoDetails_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]))
    }

    const fetchOtherData = async()=>{
        //fetching channel data 
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

        //fetching comment data
        const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

    useEffect(()=>{
        fetchVideoData();
    },[videoId]);

    useEffect(()=>{
       fetchOtherData(); 
    },[apiData])


    return (
    <div className='play-video'>
        {/*<video src={Video1} controls autoPlay muted></video>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"title here"}</h3>
        <div className='play-video-info'>
            <p>{apiData?apiData.statistics.viewCount:"1M"}1525 views &bull; 2 days ago</p>
            <div>
                <span><img src={Like} alt="" />{apiData?apiData.statistics.likeCount:"155"}</span>
                <span><img src={Dislike} alt="" /></span>
                <span><img src={Share} alt="" />Share</span>
                <span><img src={Save} alt="" />Save</span>
            </div>
        </div>
        <hr/>
        <div className='publisher'>
            <img src={channelData?channelData.snippet.thumbnails.default.url:""}/>
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?channelData.statistics.subscriberCount:"1M"}</span>
            </div>
            <button>subscribe</button>
        </div>
        <div className='vid-description'>
            <p>{apiData?apiData.snippet.description:"description is not available"}</p>
            <hr/>
            <h4>{apiData?apiData.statistics.commentCount:"1222 comments"}</h4>
            {commentData.map((item,index)=>{

                return(
                     <div key={index} className='comment'>
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className='comment-action'>
                            <img src={Like} alt=""/>
                            <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                            <img src={Dislike} alt=""/>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlayVideo