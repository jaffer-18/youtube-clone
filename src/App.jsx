import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Contactus from './Components/Navbar/Contactus'
import More from './Components/Navbar/More'
import Notifime from './Components/Navbar/Notifime'
import UserInfo from './Components/Navbar/userinfo'
import './Components/Navbar/Navbar.css'
import Uploaded from './Components/Upload/Upload'

const App = () => {

  const [sidebar,setSidebar]=useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/More' element={<More/>}/>
        <Route path='/Notifime' element={<Notifime/>}/>
        <Route path='/userinfo' element={<UserInfo/>}/>
        <Route path='/upload' element={<Uploaded/>}/>
      </Routes>
    </div>
  )
}

export default App