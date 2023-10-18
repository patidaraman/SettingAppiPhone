import React from 'react'
import { useNavigate } from 'react-router-dom'

function Display_1() {
    const navigate = useNavigate()
  return (
    <div style={{backgroundColor: "white"}}>
       <button id="button" onClick={()=>navigate(-1)}> <p id="setting_button">＜ Settings</p> </button> 
        
        <h1 style={{color:"white"}}>
            This is Display & Brightness Section
        </h1>
       
   
    </div>
  )
}

export default Display_1