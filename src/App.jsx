import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Contactus from './Components/Navbar/Contactus'
import More from './Components/Navbar/More'
import Notifime from './Components/Navbar/Notifime'

const App = () => {

  const [sidebar,setSidebar]=useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        <Route path='/contact' element={<Contactus/>}> </Route>
        <Route path='/More' element={<More/>}></Route>
        <Route path='/Notifime' element={<Notifime/>}></Route>
      </Routes>
    </div>
  )
}

export default App