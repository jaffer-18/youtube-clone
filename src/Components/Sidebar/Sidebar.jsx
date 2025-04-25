import React from 'react'
import './Sidebar.css'
import Home from '../../assets/home.png'
import GameIcon from '../../assets/game_icon.png'
import Automobiles  from '../../assets/automobiles.png'
import Sports from '../../assets/sports.png'
import Entertainment from '../../assets/entertainment.png'
import Tech from '../../assets/tech.png'
import Music from '../../assets/music.png'
import Blogs from '../../assets/blogs.png'
import News from '../../assets/news.png'
import Jack from '../../assets/jack.png'
import Simon from '../../assets/simon.png'
import Tom from '../../assets/tom.png'
import Megan from '../../assets/megan.png'
import Cameron from '../../assets/cameron.png'
import upload_icon from '../../assets/upload.png'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Sidebar = ({sidebar,category,setCategory}) => {
    const navigate = useNavigate();

  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category==0?"active":""}`} onClick={()=>
                {setCategory(0) ; console.log("Ayush")}}>
                <img src={Home} alt=""/><p>Home</p>
            </div>
            <div className={`side-link ${category==20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={GameIcon} alt=""/><p>Game</p>
            </div>
            <div className={`side-link ${category==2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={Automobiles} alt=""/><p>Automobiles</p>
            </div>
            <div className={`side-link ${category==17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={Sports} alt=""/><p>Sports</p>
            </div>
            <div className={`side-link ${category==24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={Entertainment} alt=""/><p>Entertainment</p>
            </div>
            <div className={`side-link ${category==28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={Tech} alt=""/><p>Techology</p>
            </div>
            <div className={`side-link ${category==10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={Music} alt=""/><p>Musics</p>
            </div>
            <div className={`side-link ${category==22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={Blogs} alt=""/><p>Blogs</p>
            </div>
            <div className={`side-link ${category==25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={News} alt=""/><p>News</p>
            </div>
            <div className="side-link" onClick={() => {navigate("/upload")}}>
                <img src={upload_icon} onClick={() => {navigate("/upload")}} alt=""/><p>Uploaded videos</p>
            </div>
            <hr/>
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={Jack} alt=""/><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src={Simon} alt=""/><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={Tom} alt=""/><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src={Megan} alt=""/><p>5-minutes crafts</p>
            </div>
            <div className="side-link">
                <img src={Cameron} alt=""/><p>Nasdaily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar