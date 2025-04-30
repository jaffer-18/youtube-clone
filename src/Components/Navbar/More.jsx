import React from 'react';
import './More.css';
import Jaffer from '../../assets/jaffer.png'; // Adjust the path as necessary

const More = () => {
  return (
    <div className="more-container">
        <h1>Meet the developers</h1>
        <img src={Jaffer} className="jaffer-image" />
        <h2>Mohammed Jaffer Sharieff</h2>
        <p>Front end developers and data intergration</p>
    </div>
  );
}

export default More;