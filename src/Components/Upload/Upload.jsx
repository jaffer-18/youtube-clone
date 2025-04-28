// import React from 'react'
// import './Upload.css'
// import video from '../../assets/video.mp4'

// const Upload = () => {
//   return (
//     <div>
//         <div className='uploaded-container'>
//             <h1>Uploaded videos</h1>
//             <video src={video} className='uploaded-video' controls/>
//             <p>hello</p>
//             <p>hello</p>
//             <p>i am here</p>
//         </div>
//     </div>
//   )
// }

// export default Upload

// import React, { useState, useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";
// // Import your existing configuration
// import firebaseConfig from './firebase.js';
// import './Upload.css'; // For styling

// const Upload = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Initialize Firebase with your existing config
//     const app = initializeApp(firebaseConfig);
//     const database = getDatabase(app);
    
//     // Reference to your videos collection
//     const videosRef = ref(database, 'videos');
    
//     // Listen for data
//     const unsubscribe = onValue(videosRef, (snapshot) => {
//       try {
//         if (snapshot.exists()) {
//           const videoData = snapshot.val();
          
//           // Convert the object to an array
//           const videoArray = Object.keys(videoData).map(key => ({
//             id: key,
//             ...videoData[key]
//           }));
          
//           setVideos(videoArray);
//         } else {
//           setVideos([]);
//         }
//         setLoading(false);
//       } catch (err) {
//         setError('Error loading videos: ' + err.message);
//         setLoading(false);
//       }
//     }, (err) => {
//       setError('Database error: ' + err.message);
//       setLoading(false);
//     });
    
//     // Clean up the listener when component unmounts
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading videos...</div>;
//   }

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   return (
//     <div className="video-gallery">
//       <h1>Video Gallery</h1>
      
//       {videos.length === 0 ? (
//         <p>No videos found</p>
//       ) : (
//         <div className="video-grid">
//           {videos.map(video => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Separate component for individual video cards
// const VideoCard = ({ video }) => {
//   // Create video source URL from base64 data
//   const videoFormat = video.format || 'mp4';
//   const videoSrc = `data:video/${videoFormat};base64,${video.base64Data}`;
  
//   return (
//     <div className="video-card">
//       <h3>{video.title || 'Untitled Video'}</h3>
//       <div className="video-container">
//         <video controls>
//           <source src={videoSrc} type={`video/${videoFormat}`} />
//           Your browser does not support video playback.
//         </video>
//       </div>
//       {video.description && <p className="video-description">{video.description}</p>}
//       {video.timestamp && <p className="video-timestamp">Uploaded: {new Date(video.timestamp).toLocaleDateString()}</p>}
//     </div>
//   );
// };

// export default Upload;

// import React, { useState, useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";
// // Import your existing configuration
// import firebaseConfig from '../../firebase.js';
// import './Upload.css'; // ONLY fixed typo from './Upload,css'

// const Upload = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Initialize Firebase with your existing config
//     const app = initializeApp(firebaseConfig);
//     const database = getDatabase(app);
    
//     // Reference to your videos collection
//     const videosRef = ref(database, 'videos');
    
//     // Listen for data
//     const unsubscribe = onValue(videosRef, (snapshot) => {
//       try {
//         if (snapshot.exists()) {
//           const videoData = snapshot.val();
          
//           // Convert the object to an array
//           const videoArray = Object.keys(videoData).map(key => ({
//             id: key,
//             ...videoData[key]
//           }));
          
//           setVideos(videoArray);
//         } else {
//           setVideos([]);
//         }
//         setLoading(false);
//       } catch (err) {
//         setError('Error loading videos: ' + err.message);
//         setLoading(false);
//       }
//     }, (err) => {
//       setError('Database error: ' + err.message);
//       setLoading(false);
//     });
    
//     // Clean up the listener when component unmounts
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading videos...</div>;
//   }

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   return (
//     <div className="video-gallery">
//       <h1>Video Gallery</h1>
      
//       {videos.length === 0 ? (
//         <p>No videos found</p>
//       ) : (
//         <div className="video-grid">
//           {videos.map(video => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Separate component for individual video cards
// const VideoCard = ({ video }) => {
//   // Create video source URL from base64 data
//   const videoFormat = video.format || 'mp4';
//   const videoSrc = `data:video/${videoFormat};base64,${video.base64Data}`;
  
//   return (
//     <div className="video-card">
//       <h3>{video.title || 'Untitled Video'}</h3>
//       <div className="video-container">
//         <video controls>
//           <source src={videoSrc} type={`video/${videoFormat}`} />
//           Your browser does not support video playback.
//         </video>
//       </div>
//       {video.description && <p className="video-description">{video.description}</p>}
//       {video.timestamp && <p className="video-timestamp">Uploaded: {new Date(video.timestamp).toLocaleDateString()}</p>}
//     </div>
//   );
// };

// export default Upload;

import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; // ✅ import Firestore db
import { collection, getDocs } from 'firebase/firestore'; // ✅ Firestore functions
import './Upload.css';

const Upload = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosCollection = collection(db, 'videoChunks'); // your collection name
        const videosSnapshot = await getDocs(videosCollection);

        const videoArray = videosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setVideos(videoArray);
      } catch (err) {
        setError('Error loading videos: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div className="loading">Loading videos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="video-gallery">
      <h1>uploaded videos</h1>
      
      {videos.length === 0 ? (
        <p>No videos found</p>
      ) : (
        <div className="video-grid">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

const VideoCard = ({ video }) => {
  const videoFormat = video.format || 'mp4';
  const videoSrc = `data:video/${videoFormat};base64,${video.data}`;

  return (
    <div className="video-card">
      <h3>{video.title || 'Untitled Video'}</h3>
      <div className="video-container">
        <video controls>
          <source src={videoSrc} type={`video/${videoFormat}`} />
          Your browser does not support video playback.
        </video>
      </div>
      {video.description && <p className="video-description">{video.description}</p>}
      {video.timestamp && <p className="video-timestamp">Uploaded: {new Date(video.timestamp).toLocaleDateString()}</p>}
    </div>
  );
};

export default Upload;
