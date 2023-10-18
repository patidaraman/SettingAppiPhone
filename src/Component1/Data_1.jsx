import React from 'react'
import { useNavigate } from 'react-router-dom'

function Data_1() {
    const navigate = useNavigate()
  return (
    <div>
        <button id="button" onClick={()=>navigate(-1)}> <p id="setting_button">＜ Settings</p> </button> 
        
 <h1>This is Data  Section </h1>
   
    </div>
     
  )
}

export default Data_1
    