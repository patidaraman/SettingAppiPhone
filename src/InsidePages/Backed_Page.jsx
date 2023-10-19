import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../App.css'
import { navigate } from 'react-router-dom'

function Backed_Page() {
   const  navigate = useNavigate()
  return (
    <div>
         <div style={{display:"flex" , flexDirection:"row", gap:"10px" } }>


        <button  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ Setting  </button> 
        <div style={{color:"white" ,fontSize:"17px"}}>Apple ID Backed Up</div>
        
    </div>


<br/><br/>
       <div id="Blocks" style={{height:"155px"}}>
            <div style={{display:"flex" , flexDirection:"row" , marginLeft:"15px" }} >
                 <span style={{marginTop:"10px"}} >iPhone Not Backed Up<br/><br/>
                 <span style={{fontSize:"13px" , display:"flex"}}>
                 It's been 99 weeks since the last backup for this <br/>  iPhone (amanpatidar0681@gmail.com).
                <br/> Backsup happens when this iPhone is connected <br/> to power , locked and on Wi-Fi.
                 </span>
                </span>
  
</div>
<hr  id="Horizontal_Line_General" />
<span style={{ color:" rgb(49, 66, 226)", marginLeft:"20px"}} onClick={()=>navigate("/")} >OK</span>

    </div>
    </div>
  )
}

export default Backed_Page