// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Image1 from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import search_icon from '../../assets/search.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';

// // Navbar Component
// const Navbar = ({ setSidebar, toggleModal }) => {
//   const navigate = useNavigate();

//   return (
//     <nav className='flex-div'>
//       <div className='nav-left flex-div'>
//         <img
//           className='menu-icon'
//           onClick={() => setSidebar((prev) => !prev)}
//           src={Image1}
//           alt="menu"
//         />
//         <Link to="/">
//           <img className='logo' src={logo} alt="logo" />
//         </Link>
//       </div>

//       <div className="nav-right flex-div">
//         <button
//           onClick={() =>
//             (window.location.href = 'https://delightful-sunshine-112988.netlify.app/')
//           }
//           className='logout-button'
//         >
//           LOGOUT
//         </button>
//         <Link to="/Contact">
//           <h6>CONTACT ME</h6>
//         </Link>
//         <img
//           src={upload_icon}
//           alt="upload"
//           style={{ cursor: 'pointer' }}
//           onClick={UploadModal}
//         />
//         <img onClick={() => navigate('/More')} src={more_icon} alt="more" />
//         <img onClick={() => navigate('/Notifime')} src={notification_icon} alt="notifications" />
//         <img
//           onClick={() => navigate('/userinfo')}
//           src={profile_icon}
//           className='user-icon'
//           alt="profile"
//         />
//       </div>
//     </nav>
//   );
// };

// // Upload Modal Component
// const UploadModal = ({ modal, toggleModal }) => {
//   return (
//     <>
//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay">
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <h2>Hello Modal</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vitae,
//                 itaque delectus tempora dolores velit perferendis obcaecati inventore aliquid
//                 nesciunt voluptate ipsam, quia dicta magni dolor consequatur? Sapiente, ea nemo?
//               </p>
//               <button className='close-modal' onClick={toggleModal}>
//                 CLOSE
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
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

// Upload Modal Component
const UploadModal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>UPLOAD</h2>
          <p>
            <input type="file"/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vitae,
            itaque delectus tempora dolores velit perferendis obcaecati inventore aliquid
            nesciunt voluptate ipsam, quia dicta magni dolor consequatur? Sapiente, ea nemo?
          </p>
          <button className="close-modal" onClick={toggleModal}>
            UPLOAD
          </button>
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
