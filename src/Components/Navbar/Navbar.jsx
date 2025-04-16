import React from 'react'
import './Navbar.css'
// import Contact from '../'
import Image1 from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link, useNavigate } from 'react-router-dom'
import Contact from './Contactus'
import More from './More'

const Navbar = ({setSidebar}) => {
  const navigate = useNavigate();

  const handleMore = ()=>{
    navigate('/More');
  }
  return (
    <nav className='flex-div'>
       <div className='nav-left flex-div'>
          <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={Image1} alt=""/>
        <Link to="/"><img className='logo' src={logo} alt=""/></Link>
       </div>

       <div className="nav-right flex-div">
        <button onClick={() => window.location.href = 'https://delightful-sunshine-112988.netlify.app/'} className='logout-button'>LOGOUT</button>
        <Link to="/Contact"><h6>CONTACT ME</h6></Link>
        <label htmlFor="file-upload">
          <img src={upload_icon} alt="" style={{ cursor: 'pointer' }} />
        </label>
          <input id="file-upload" type="file" style={{ display: 'none' }} />

          <img onClick={handleMore} src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
       </div>
    </nav>
  )
}

export default Navbar