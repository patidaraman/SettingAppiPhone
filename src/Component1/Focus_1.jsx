import React from 'react'
import { useNavigate } from 'react-router-dom'

function Focus_1() {
    const navigate = useNavigate()
  return (
    <div>
        <div id="button" onClick={()=>navigate(-1)}> <p id="setting_button">＜ Settings</p> </div> 
        
         <h1>
            this is focus  Section 
        </h1>
       
   
    </div>
  )
}

export default Focus_1