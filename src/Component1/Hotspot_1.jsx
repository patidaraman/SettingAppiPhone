import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hotspot_1() {
    const navigate = useNavigate()
  return (
    <div>
       <button id="button" onClick={()=>navigate(-1)}> <p id="setting_button">＜ Settings</p> </button> 
        
          <h1>This is Personal Hotspot  Section  </h1>
         
    
    </div>

  )
}

export default Hotspot_1