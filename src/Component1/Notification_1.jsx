import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notification_1() {
    const navigate = useNavigate()
  return (
    <div>
       <button id="button" onClick={()=>navigate(-1)}> <p id="setting_button">＜ Settings</p> </button> 
        
         <h1>
            This is Notification Section
        </h1>
       
   
    </div>
  )
}

export default Notification_1