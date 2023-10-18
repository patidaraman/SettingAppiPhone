import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sound_1() {
    const navigate = useNavigate()
  return (
    <div>
       <button id="button" onClick={()=>navigate(-1)}> <p id="setting_button">＜ Settings</p> </button> 
        
         <h1>
            This is sound Section 
        </h1>
       
   
    </div>
  )
}

export default Sound_1