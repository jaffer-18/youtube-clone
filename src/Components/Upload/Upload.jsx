import React from 'react'
import "./Upload.css"

const Upload = () => {
  return (
    <div className='main-container'>
        <div className='upload-container'>
            <h2>Upload</h2>
            <p>upload your file here</p>
            <div className='upload-form'>
                <form action="">
                    <input type="file" className="upload-fea" id="upload-fea" />
                    <button className="upload_btn" type="submit">upload</button>
                    <button className="remove_btn" type="button">delete</button>           
                </form>
            </div>
        </div>
    </div>
  )
}

export default Upload