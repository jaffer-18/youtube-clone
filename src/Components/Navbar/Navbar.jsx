// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// // import './Navbar.css';
// // import Image1 from '../../assets/menu.png';
// // import logo from '../../assets/logo.png';
// // import search_icon from '../../assets/search.png';
// // import upload_icon from '../../assets/upload.png';
// // import more_icon from '../../assets/more.png';
// // import notification_icon from '../../assets/notification.png';
// // import profile_icon from '../../assets/jack.png';

// // // Navbar Component
// // const Navbar = ({ setSidebar, toggleModal }) => {
// //   const navigate = useNavigate();

// //   return (
// //     <nav className='flex-div'>
// //       <div className='nav-left flex-div'>
// //         <img
// //           className='menu-icon'
// //           onClick={() => setSidebar((prev) => !prev)}
// //           src={Image1}
// //           alt="menu"
// //         />
// //         <Link to="/">
// //           <img className='logo' src={logo} alt="logo" />
// //         </Link>
// //       </div>

// //       <div className="nav-right flex-div">
// //         <button
// //           onClick={() =>
// //             (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')
// //           }
// //           className='logout-button'
// //         >
// //           LOGOUT
// //         </button>
// //         <Link to="/Contact">
// //           <h6>CONTACT ME</h6>
// //         </Link>
// //         <img
// //           src={upload_icon}
// //           alt="upload"
// //           style={{ cursor: 'pointer' }}
// //           onClick={UploadModal}
// //         />
// //         <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
// //         <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
// //         <img
// //           onClick={() => navigate('/userinfo')}
// //           src={profile_icon}
// //           className='user-icon'
// //           alt="profile"
// //         />
// //       </div>
// //     </nav>
// //   );
// // };

// // // Upload Modal Component
// // const UploadModal = ({ modal, toggleModal }) => {
// //   return (
// //     <>
// //       {modal && (
// //         <div className="modal">
// //           <div onClick={toggleModal} className="overlay">
// //             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //               <h2>Hello Modal</h2>
// //               <p>
// //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vitae,
// //                 itaque delectus tempora dolores velit perferendis obcaecati inventore aliquid
// //                 nesciunt voluptate ipsam, quia dicta magni dolor consequatur? Sapiente, ea nemo?
// //               </p>
// //               <button className='close-modal' onClick={toggleModal}>
// //                 CLOSE
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Navbar;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Image1 from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';

// // Upload Modal Component
// const UploadModal = ({ toggleModal }) => {
//   return (
//     <div className="modal">
//       <div className="overlay" onClick={toggleModal}>
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <h2>UPLOAD</h2>
//           <input type="file"/>
//           <input type="text" placeholder="Enter a caption..." />
//           <p>
//           </p>
//           <button className="close-modal" onClick={toggleModal}>CLOSE</button>
//           <button className="upload-button" onClick={toggleModal}>UPLOAD</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Navbar Component
// const Navbar = ({ setSidebar }) => {
//   const navigate = useNavigate();
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className='flex-div'>
//         <div className='nav-left flex-div'>
//           <img
//             className='menu-icon'
//             onClick={() => setSidebar((prev) => !prev)}
//             src={Image1}
//             alt="menu"
//           />
//           <Link to="/">
//             <img className='logo' src={logo} alt="logo" />
//           </Link>
//         </div>

//         <div className="nav-right flex-div">
//           <button
//             onClick={() =>
//               (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')
//             }
//             className='logout-button'
//           >
//             LOGOUT
//           </button>
//           <Link to="/Contact">
//             <h6>CONTACT ME</h6>
//           </Link>
//           <img
//             src={upload_icon}
//             alt="upload"
//             style={{ cursor: 'pointer' }}
//             onClick={toggleModal}
//           />
//           <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
//           <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
//           <img
//             onClick={() => navigate('/userinfo')}
//             src={profile_icon}
//             className='user-icon'
//             alt="profile"
//           />
//         </div>
//       </nav>

//       {modal && <UploadModal toggleModal={toggleModal} />}
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Image1 from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';

// // Upload Modal Component
// const UploadModal = ({ toggleModal }) => {
//   const [videoBase64, setVideoBase64] = useState('');
//   const [caption, setCaption] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.includes('video')) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setVideoBase64(event.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUpload = () => {
//     console.log("Video Base64:", videoBase64);
//     console.log("Caption:", caption);
//     toggleModal();
//   };

//   return (
//     <div className="modal">
//       <div className="overlay" onClick={toggleModal}>
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <h2>UPLOAD</h2>
//           <input type="file" accept="video/*" onChange={handleFileChange} />
//           <input 
//             type="text" 
//             placeholder="Enter a caption..." 
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//           />
//           <p>
//           </p>
//           <button className="close-modal" onClick={toggleModal}>CLOSE</button>
//           <button className="upload-button" onClick={handleUpload}>UPLOAD</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Navbar Component
// const Navbar = ({ setSidebar }) => {
//   const navigate = useNavigate();
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className='flex-div'>
//         <div className='nav-left flex-div'>
//           <img
//             className='menu-icon'
//             onClick={() => setSidebar((prev) => !prev)}
//             src={Image1}
//             alt="menu"
//           />
//           <Link to="/">
//             <img className='logo' src={logo} alt="logo" />
//           </Link>
//         </div>

//         <div className="nav-right flex-div">
//           <button
//             onClick={() =>
//               (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')
//             }
//             className='logout-button'
//           >
//             LOGOUT
//           </button>
//           <Link to="/Contact">
//             <h6>CONTACT ME</h6>
//           </Link>
//           <img
//             src={upload_icon}
//             alt="upload"
//             style={{ cursor: 'pointer' }}
//             onClick={toggleModal}
//           />
//           <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
//           <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
//           <img
//             onClick={() => navigate('/userinfo')}
//             src={profile_icon}
//             className='user-icon'
//             alt="profile"
//           />
//         </div>
//       </nav>

//       {modal && <UploadModal toggleModal={toggleModal} />}
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Image1 from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';
// // Import Firebase components
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // Upload Modal Component
// const UploadModal = ({ toggleModal }) => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoBase64, setVideoBase64] = useState('');
//   const [caption, setCaption] = useState('');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.includes('video')) {
//       setVideoFile(file);
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setVideoBase64(event.target.result);
//       };
//       reader.readAsDataURL(file);
//     } else if (file) {
//       setError('Please select a valid video file');
//     }
//   };

//   const handleUpload = async () => {
//     if (!videoFile) {
//       setError('Please select a video to upload');
//       return;
//     }
    
//     if (!caption.trim()) {
//       setError('Please enter a caption');
//       return;
//     }

//     setIsUploading(true);
//     setError('');
    
//     try {
//       const auth = getAuth();
//       const storage = getStorage();
//       const db = getFirestore();
      
//       // Create a unique filename using timestamp and original filename
//       const timestamp = new Date().getTime();
//       const fileName = `videos/${auth.currentUser.uid}/${timestamp}-${videoFile.name}`;
      
//       // Create storage reference
//       const storageRef = ref(storage, fileName);
      
//       // Upload the video file
//       const uploadTask = uploadBytesResumable(storageRef, videoFile);
      
//       // Listen for upload progress
//       uploadTask.on('state_changed', 
//         (snapshot) => {
//           // Calculate and update progress
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadProgress(progress);
//         },
//         (error) => {
//           // Handle upload errors
//           setError('Upload failed: ' + error.message);
//           setIsUploading(false);
//         },
//         async () => {
//           // Handle successful upload
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
//           // Add the video info to Firestore database
//           await addDoc(collection(db, "videos"), {
//             userId: auth.currentUser.uid,
//             userName: auth.currentUser.displayName || 'Anonymous',
//             caption: caption,
//             videoUrl: downloadURL,
//             fileName: fileName,
//             timestamp: serverTimestamp(),
//             likes: 0,
//             comments: []
//           });
          
//           // Reset form and close modal
//           setVideoFile(null);
//           setVideoBase64('');
//           setCaption('');
//           setUploadProgress(0);
//           setIsUploading(false);
//           toggleModal();
//         }
//       );
//     } catch (error) {
//       setError('Upload failed: ' + error.message);
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="overlay" onClick={toggleModal}>
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <h2>UPLOAD</h2>
//           <input type="file" accept="video/*" onChange={handleFileChange} />
//           <input 
//             type="text" 
//             placeholder="Enter a caption..." 
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//           />
          
//           {videoBase64 && (
//             <div className="video-preview">
//               <video controls width="100%" height="auto">
//                 <source src={videoBase64} type={videoFile?.type} />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           )}
          
//           {isUploading && (
//             <div className="progress-bar">
//               <div 
//                 className="progress" 
//                 style={{ width: `${uploadProgress}%` }}
//               ></div>
//               <span>{Math.round(uploadProgress)}%</span>
//             </div>
//           )}
          
//           {error && <p className="error-message">{error}</p>}
          
//           <div className="modal-buttons">
//             <button 
//               className="close-modal" 
//               onClick={toggleModal}
//               disabled={isUploading}
//             >
//               CLOSE
//             </button>
//             <button 
//               className="upload-button" 
//               onClick={handleUpload}
//               disabled={isUploading}
//             >
//               {isUploading ? 'UPLOADING...' : 'UPLOAD'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Navbar Component
// const Navbar = ({ setSidebar }) => {
//   const navigate = useNavigate();
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className='flex-div'>
//         <div className='nav-left flex-div'>
//           <img
//             className='menu-icon'
//             onClick={() => setSidebar((prev) => !prev)}
//             src={Image1}
//             alt="menu"
//           />
//           <Link to="/">
//             <img className='logo' src={logo} alt="logo" />
//           </Link>
//         </div>

//         <div className="nav-right flex-div">
//           <button
//             onClick={() =>
//               (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')
//             }
//             className='logout-button'
//           >
//             LOGOUT
//           </button>
//           <Link to="/Contact">
//             <h6>CONTACT ME</h6>
//           </Link>
//           <img
//             src={upload_icon}
//             alt="upload"
//             style={{ cursor: 'pointer' }}
//             onClick={toggleModal}
//           />
//           <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
//           <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
//           <img
//             onClick={() => navigate('/userinfo')}
//             src={profile_icon}
//             className='user-icon'
//             alt="profile"
//           />
//         </div>
//       </nav>

//       {modal && <UploadModal toggleModal={toggleModal} />}
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Image1 from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';
// // Import Firebase components
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // Style objects for inline styling
// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 1000
//   },
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     maxWidth: '500px',
//     width: '90%',
//     maxHeight: '80vh',
//     overflowY: 'auto',
//     zIndex: 1001
//   },
//   videoPreview: {
//     margin: '10px 0',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     overflow: 'hidden'
//   },
//   progressBar: {
//     width: '100%',
//     height: '20px',
//     backgroundColor: '#e0e0e0',
//     borderRadius: '4px',
//     margin: '10px 0',
//     position: 'relative'
//   },
//   progress: (percentage) => ({
//     height: '100%',
//     backgroundColor: '#4285f4',
//     borderRadius: '4px',
//     transition: 'width 0.3s ease',
//     width: `${percentage}%`
//   }),
//   progressText: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     color: '#000',
//     fontSize: '12px',
//     fontWeight: 'bold'
//   },
//   errorMessage: {
//     color: '#d32f2f',
//     margin: '10px 0'
//   },
//   modalButtons: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '15px'
//   },
//   fileInput: {
//     width: '100%',
//     padding: '10px 0',
//     marginBottom: '10px'
//   },
//   captionInput: {
//     width: '100%',
//     padding: '10px',
//     margin: '10px 0',
//     borderRadius: '4px',
//     border: '1px solid #ddd'
//   },
//   button: {
//     padding: '10px 20px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     border: 'none',
//     fontWeight: 'bold'
//   },
//   closeButton: {
//     backgroundColor: '#f44336',
//     color: 'white'
//   },
//   uploadButton: {
//     backgroundColor: '#4CAF50',
//     color: 'white'
//   },
//   disabledButton: {
//     opacity: 0.6,
//     cursor: 'not-allowed'
//   }
// };

// // Upload Modal Component
// const UploadModal = ({ toggleModal }) => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoBase64, setVideoBase64] = useState('');
//   const [caption, setCaption] = useState('');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.includes('video')) {
//       setVideoFile(file);
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setVideoBase64(event.target.result);
//       };
//       reader.readAsDataURL(file);
//     } else if (file) {
//       setError('Please select a valid video file');
//     }
//   };

//   const handleUpload = async () => {
//     if (!videoFile) {
//       setError('Please select a video to upload');
//       return;
//     }
    
//     if (!caption.trim()) {
//       setError('Please enter a caption');
//       return;
//     }

//     setIsUploading(true);
//     setError('');
    
//     try {
//       const auth = getAuth();
//       const storage = getStorage();
//       const db = getFirestore();
      
//       // Create a unique filename using timestamp and original filename
//       const timestamp = new Date().getTime();
//       const fileName = `videos/${auth.currentUser.uid}/${timestamp}-${videoFile.name}`;
      
//       // Create storage reference
//       const storageRef = ref(storage, fileName);
      
//       // Upload the video file
//       const uploadTask = uploadBytesResumable(storageRef, videoFile);
      
//       // Listen for upload progress
//       uploadTask.on('state_changed', 
//         (snapshot) => {
//           // Calculate and update progress
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadProgress(progress);
//         },
//         (error) => {
//           // Handle upload errors
//           setError('Upload failed: ' + error.message);
//           setIsUploading(false);
//         },
//         async () => {
//           // Handle successful upload
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
//           // Add the video info to Firestore database
//           await addDoc(collection(db, "videos"), {
//             userId: auth.currentUser.uid,
//             userName: auth.currentUser.displayName || 'Anonymous',
//             caption: caption,
//             videoUrl: downloadURL,
//             fileName: fileName,
//             timestamp: serverTimestamp(),
//             likes: 0,
//             comments: []
//           });
          
//           // Reset form and close modal
//           setVideoFile(null);
//           setVideoBase64('');
//           setCaption('');
//           setUploadProgress(0);
//           setIsUploading(false);
//           toggleModal();
//         }
//       );
//     } catch (error) {
//       setError('Upload failed: ' + error.message);
//       setIsUploading(false);
//     }
//   };

//   // Stop propagation on modal content click to prevent closing when clicking inside
//   const handleModalContentClick = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div style={styles.modal}>
//       <div style={styles.overlay} onClick={toggleModal}>
//         <div style={styles.modalContent} onClick={handleModalContentClick}>
//           <h2>UPLOAD</h2>
//           <input 
//             type="file" 
//             accept="video/*" 
//             onChange={handleFileChange} 
//             style={styles.fileInput}
//           />
//           <input 
//             type="text" 
//             placeholder="Enter a caption..." 
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//             style={styles.captionInput}
//           />
          
//           {videoBase64 && (
//             <div style={styles.videoPreview}>
//               <video controls width="100%" height="auto">
//                 <source src={videoBase64} type={videoFile?.type} />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           )}
          
//           {isUploading && (
//             <div style={styles.progressBar}>
//               <div style={styles.progress(uploadProgress)}></div>
//               <span style={styles.progressText}>{Math.round(uploadProgress)}%</span>
//             </div>
//           )}
          
//           {error && <p style={styles.errorMessage}>{error}</p>}
          
//           <div style={styles.modalButtons}>
//             <button 
//               style={{
//                 ...styles.button,
//                 ...styles.closeButton,
//                 ...(isUploading ? styles.disabledButton : {})
//               }}
//               onClick={toggleModal}
//               disabled={isUploading}
//             >
//               CLOSE
//             </button>
//             <button 
//               style={{
//                 ...styles.button,
//                 ...styles.uploadButton,
//                 ...(isUploading ? styles.disabledButton : {})
//               }}
//               onClick={handleUpload}
//               disabled={isUploading}
//             >
//               {isUploading ? 'UPLOADING...' : 'UPLOAD'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Navbar Component
// const Navbar = ({ setSidebar }) => {
//   const navigate = useNavigate();
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className='flex-div'>
//         <div className='nav-left flex-div'>
//           <img
//             className='menu-icon'
//             onClick={() => setSidebar((prev) => !prev)}
//             src={Image1}
//             alt="menu"
//           />
//           <Link to="/">
//             <img className='logo' src={logo} alt="logo" />
//           </Link>
//         </div>

//         <div className="nav-right flex-div">
//           <button
//             onClick={() =>
//               (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')
//             }
//             className='logout-button'
//           >
//             LOGOUT
//           </button>
//           <Link to="/Contact">
//             <h6>CONTACT ME</h6>
//           </Link>
//           <img
//             src={upload_icon}
//             alt="upload"
//             style={{ cursor: 'pointer' }}
//             onClick={toggleModal}
//           />
//           <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
//           <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
//           <img
//             onClick={() => navigate('/userinfo')}
//             src={profile_icon}
//             className='user-icon'
//             alt="profile"
//           />
//         </div>
//       </nav>

//       {modal && <UploadModal toggleModal={toggleModal} />}
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Image1 from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

// Import Firebase app and auth from your Firebase config file
import app from '../../firebase'; // Adjust path as needed
import { auth } from '../../firebase'; // Adjust path as needed

// Import Firebase components
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Style objects for inline styling
const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    zIndex: 1001
  },
  videoPreview: {
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressBar: {
    width: '100%',
    height: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    margin: '10px 0',
    position: 'relative'
  },
  progress: (percentage) => ({
    height: '100%',
    backgroundColor: '#4285f4',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
    width: `${percentage}%`
  }),
  progressText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#000',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  errorMessage: {
    color: '#d32f2f',
    margin: '10px 0'
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px'
  },
  fileInput: {
    width: '100%',
    padding: '10px 0',
    marginBottom: '10px'
  },
  captionInput: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold'
  },
  closeButton: {
    backgroundColor: '#f44336',
    color: 'white'
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    color: 'white'
  },
  disabledButton: {
    opacity: 0.6,
    cursor: 'not-allowed'
  }
};

// Initialize Firebase services
const storage = getStorage(app);
const db = getFirestore(app);

// Upload Modal Component
const UploadModal = ({ toggleModal }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoBase64, setVideoBase64] = useState('');
  const [caption, setCaption] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes('video')) {
      setVideoFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setVideoBase64(event.target.result);
      };
      reader.readAsDataURL(file);
    } else if (file) {
      setError('Please select a valid video file');
    }
  };

  const handleUpload = async () => {
    if (!videoFile) {
      setError('Please select a video to upload');
      return;
    }
    
    if (!caption.trim()) {
      setError('Please enter a caption');
      return;
    }

    // Check if user is logged in
    if (!auth.currentUser) {
      setError('You must be logged in to upload videos');
      return;
    }

    setIsUploading(true);
    setError('');
    
    try {
      // Create a unique filename using timestamp and original filename
      const timestamp = new Date().getTime();
      const fileName = `videos/${auth.currentUser.uid}/${timestamp}-${videoFile.name}`;
      
      // Create storage reference
      const storageRef = ref(storage, fileName);
      
      // Upload the video file
      const uploadTask = uploadBytesResumable(storageRef, videoFile);
      
      // Listen for upload progress
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Calculate and update progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          // Handle upload errors
          setError('Upload failed: ' + error.message);
          setIsUploading(false);
        },
        async () => {
          // Handle successful upload
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          // Add the video info to Firestore database
          await addDoc(collection(db, "videos"), {
            userId: auth.currentUser.uid,
            userName: auth.currentUser.displayName || 'Anonymous',
            caption: caption,
            videoUrl: downloadURL,
            fileName: fileName,
            timestamp: serverTimestamp(),
            likes: 0,
            comments: []
          });
          
          // Reset form and close modal
          setVideoFile(null);
          setVideoBase64('');
          setCaption('');
          setUploadProgress(0);
          setIsUploading(false);
          toggleModal();
        }
      );
    } catch (error) {
      setError('Upload failed: ' + error.message);
      setIsUploading(false);
    }
  };

  // Stop propagation on modal content click to prevent closing when clicking inside
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={styles.modal}>
      <div style={styles.overlay} onClick={toggleModal}>
        <div style={styles.modalContent} onClick={handleModalContentClick}>
          <h2>UPLOAD</h2>
          <input 
            type="file" 
            accept="video/*" 
            onChange={handleFileChange} 
            style={styles.fileInput}
          />
          <input 
            type="text" 
            placeholder="Enter a caption..." 
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={styles.captionInput}
          />
          
          {videoBase64 && (
            <div style={styles.videoPreview}>
              <video controls width="100%" height="auto">
                <source src={videoBase64} type={videoFile?.type} />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          
          {isUploading && (
            <div style={styles.progressBar}>
              <div style={styles.progress(uploadProgress)}></div>
              <span style={styles.progressText}>{Math.round(uploadProgress)}%</span>
            </div>
          )}
          
          {error && <p style={styles.errorMessage}>{error}</p>}
          
          <div style={styles.modalButtons}>
            <button 
              style={{
                ...styles.button,
                ...styles.closeButton,
                ...(isUploading ? styles.disabledButton : {})
              }}
              onClick={toggleModal}
              disabled={isUploading}
            >
              CLOSE
            </button>
            <button 
              style={{
                ...styles.button,
                ...styles.uploadButton,
                ...(isUploading ? styles.disabledButton : {})
              }}
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? 'UPLOADING...' : 'UPLOAD'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ setSidebar }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <nav className='flex-div'>
        <div className='nav-left flex-div'>
          <img
            className='menu-icon'
            onClick={() => setSidebar((prev) => !prev)}
            src={Image1}
            alt="menu"
          />
          <Link to="/">
            <img className='logo' src={logo} alt="logo" />
          </Link>
        </div>

        <div className="nav-right flex-div">
          <button
            onClick={() =>
              (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')
            }
            className='logout-button'
          >
            LOGOUT
          </button>
          <Link to="/Contact">
            <h6>CONTACT ME</h6>
          </Link>
          <img
            src={upload_icon}
            alt="upload"
            style={{ cursor: 'pointer' }}
            onClick={toggleModal}
          />
          <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
          <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
          <img
            onClick={() => navigate('/userinfo')}
            src={profile_icon}
            className='user-icon'
            alt="profile"
          />
        </div>
      </nav>

      {modal && <UploadModal toggleModal={toggleModal} />}
    </>
  );
};

export default Navbar;