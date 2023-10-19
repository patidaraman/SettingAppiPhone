import React from 'react'
import { navigate, useNavigate } from 'react-router-dom'


function View_Display() {
    const navigate = useNavigate()
  return (

    < div>

<div style={{display:"flex" , flexDirection:"row", gap:"10px"} }>
<button id="button" onClick={()=>navigate(-1)}> ＜ Back</button> 
<div style={{color:"white"}}>Display Zoom </div>
</div>





    <div id="Blocks" style={{height:"500px"}}>
        <div>
      
        </div>
      
    </div>
   

   </div>
  )
}

export default View_Display