import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Image1 from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

import { db } from '../../firebase';
import {
  collection, addDoc, serverTimestamp, writeBatch, doc, getDoc,
  query, where, orderBy, getDocs, updateDoc
} from "firebase/firestore";

const styles = {
  modal: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000
  },
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#fff', padding: '20px', borderRadius: '8px', maxWidth: '500px', width: '90%', maxHeight: '80vh', overflowY: 'auto', zIndex: 1001
  },
  videoPreview: {
    margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden'
  },
  progressBar: {
    width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '4px', margin: '10px 0', position: 'relative'
  },
  progress: (percentage) => ({
    height: '100%', backgroundColor: '#4285f4', borderRadius: '4px', transition: 'width 0.3s ease', width: `${percentage}%`
  }),
  progressText: {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#000', fontSize: '12px', fontWeight: 'bold'
  },
  errorMessage: {
    color: '#d32f2f', margin: '10px 0'
  },
  successMessage: {
    color: '#4CAF50', margin: '10px 0'
  },
  modalButtons: {
    display: 'flex', justifyContent: 'space-between', marginTop: '15px'
  },
  fileInput: {
    width: '100%', padding: '10px 0', marginBottom: '10px'
  },
  captionInput: {
    width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd'
  },
  usernameInput: {
    width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd'
  },
  channelInput: {
    width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd'
  },
  button: {
    padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', border: 'none', fontWeight: 'bold'
  },
  closeButton: {
    backgroundColor: '#f44336', color: 'white'
  },
  uploadButton: {
    backgroundColor: '#4CAF50', color: 'white'
  },
  disabledButton: {
    opacity: 0.6, cursor: 'not-allowed'
  },
  warningMessage: {
    backgroundColor: '#fff3cd', color: '#856404', padding: '10px', borderRadius: '4px', marginBottom: '10px', fontSize: '14px'
  }
};

const UploadModal = ({ toggleModal }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoBase64, setVideoBase64] = useState('');
  const [caption, setCaption] = useState('');
  const [username, setUsername] = useState('');
  const [channelName, setChannelName] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes('video')) {
      setVideoFile(file);
      const reader = new FileReader();
      reader.onload = (event) => setVideoBase64(event.target.result);
      reader.readAsDataURL(file);
      setError('');
    } else if (file) {
      setError('Please select a valid video file');
    }
  };

  const splitBase64IntoChunks = (base64String, chunkSize = 750000) => {
    let dataPrefix = '', base64Data = '';
    if (base64String.startsWith('data:')) {
      const commaIndex = base64String.indexOf(',');
      dataPrefix = base64String.substring(0, commaIndex + 1);
      base64Data = base64String.substring(commaIndex + 1);
    } else {
      dataPrefix = 'data:video/mp4;base64,';
      base64Data = base64String;
    }
    const chunks = [];
    const totalChunks = Math.ceil(base64Data.length / chunkSize);
    for (let i = 0; i < totalChunks; i++) {
      chunks.push(base64Data.substring(i * chunkSize, (i + 1) * chunkSize));
    }
    return { dataPrefix, chunks, totalChunks };
  };

  const handleUpload = async () => {
    if (!videoFile || !caption.trim() || !username.trim() || !channelName.trim() || !videoBase64) {
      setError('All fields are required and video must be converted');
      return;
    }

    const fileSizeInMB = (videoFile.size / (1024 * 1024)).toFixed(2);
    if (fileSizeInMB > 50) {
      setError(`File size (${fileSizeInMB}MB) is too large. Please choose a smaller video.`);
      return;
    }

    setIsUploading(true);
    setError('');
    try {
      setUploadProgress(10);
      const { dataPrefix, chunks, totalChunks } = splitBase64IntoChunks(videoBase64);
      const videoData = {
        userName: username, channelName, caption,
        timestamp: serverTimestamp(), likes: 0, views: 0,
        comments: [], dataPrefix, fileType: videoFile.type,
        fileSize: videoFile.size, originalName: videoFile.name,
        status: "processing", totalChunks
      };
      const mainDocRef = await addDoc(collection(db, "videos"), videoData);
      const videoId = mainDocRef.id;
      setUploadProgress(20);
      const progressIncrement = 70 / totalChunks;
      for (let i = 0; i < chunks.length; i += 10) {
        const batch = writeBatch(db);
        for (let j = i; j < Math.min(i + 10, chunks.length); j++) {
          const chunkRef = doc(collection(db, "videoChunks"));
          batch.set(chunkRef, { videoId, chunkIndex: j, data: chunks[j], totalChunks });
        }
        await batch.commit();
        setUploadProgress(20 + ((Math.min(i + 10, chunks.length) / totalChunks) * 70));
      }
      await updateDoc(doc(db, "videos", videoId), { status: "complete" });
      setUploadProgress(100);
      setSuccess('Video uploaded successfully!');
      setTimeout(() => {
        setVideoFile(null);
        setVideoBase64('');
        setCaption('');
        setUsername('');
        setChannelName('');
        setUploadProgress(0);
        setIsUploading(false);
        setSuccess('');
        toggleModal();
      }, 2000);
    } catch (error) {
      console.error("Upload error:", error);
      setError('Failed to upload: ' + error.message);
      setIsUploading(false);
    }
  };

  return (
    <div style={styles.modal}>
      <div style={styles.overlay} onClick={toggleModal}>
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <h2>UPLOAD</h2>
          <div style={styles.warningMessage}><strong>Note:</strong> Videos are stored as base64.So the large videos will be chunked and error in playing.</div>
          <input type="file" accept="video/*" onChange={handleFileChange} style={styles.fileInput} />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.usernameInput} />
          <input type="text" placeholder="Channel Name" value={channelName} onChange={(e) => setChannelName(e.target.value)} style={styles.channelInput} />
          <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} style={styles.captionInput} />
          {videoBase64 && <div style={styles.videoPreview}><video controls width="100%"><source src={videoBase64} type={videoFile?.type} /></video></div>}
          {isUploading && <div style={styles.progressBar}><div style={styles.progress(uploadProgress)}></div><span style={styles.progressText}>{Math.round(uploadProgress)}%</span></div>}
          {error && <p style={styles.errorMessage}>{error}</p>}
          {success && <p style={styles.successMessage}>{success}</p>}
          <div style={styles.modalButtons}>
            <button style={{ ...styles.button, ...styles.closeButton, ...(isUploading ? styles.disabledButton : {}) }} onClick={toggleModal} disabled={isUploading}>CLOSE</button>
            <button style={{ ...styles.button, ...styles.uploadButton, ...(isUploading ? styles.disabledButton : {}) }} onClick={handleUpload} disabled={isUploading}>{isUploading ? 'UPLOADING...' : 'UPLOAD'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ setSidebar }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((prev) => !prev);

  return (
    <>
      <nav className='flex-div'>
        <div className='nav-left flex-div'>
          <img className='menu-icon' onClick={() => setSidebar((prev) => !prev)} src={Image1} alt="menu" />
          <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
        </div>
        <div className="nav-right flex-div">
          <button onClick={() => (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')} className='logout-button'>LOGOUT</button>
          <Link to="/Contact"><h6>CONTACT ME</h6></Link>
          <img src={upload_icon} alt="upload" style={{ cursor: 'pointer' }} onClick={toggleModal} />
          <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
          <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
          <img onClick={() => navigate('/userinfo')} src={profile_icon} className='user-icon' alt="profile" />
        </div>
      </nav>
      {modal && <UploadModal toggleModal={toggleModal} />}
    </>
  );
};

export const reconstructBase64Video = async (videoId) => {
  try {
    const videoRef = doc(db, "videos", videoId);
    const videoDoc = await getDoc(videoRef);
    if (!videoDoc.exists()) throw new Error("Video not found");
    const { totalChunks, dataPrefix } = videoDoc.data();
    const chunksSnapshot = await getDocs(query(collection(db, "videoChunks"), where("videoId", "==", videoId), orderBy("chunkIndex")));
    let base64Data = "";
    chunksSnapshot.forEach((doc) => base64Data += doc.data().data);
    return `${dataPrefix}${base64Data}`;
  } catch (error) {
    console.error("Error reconstructing video:", error);
    throw error;
  }
};

export default Navbar;