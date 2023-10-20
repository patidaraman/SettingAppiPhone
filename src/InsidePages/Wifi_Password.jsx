import React from 'react'
import { useNavigate } from 'react-router-dom'

function Wifi_Password() {
  const navigate = useNavigate()
  return (
    <div>
       


       <div className='top'>
        <div  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}>Cancel</div> 
        <div style={{color:"white" ,fontSize:"20px" , marginRight:"10px" , marginTop:"2px"}}>Wi-Fi Password </div>
        <div style={{color: "rgb(49, 66, 226", fontSize:"19px"}} onClick={()=>navigate(-1)}> Done</div>
        </div>

<br/> <br/>

<div id="Blocks" style={{height:"45px"}} className='Screen_View_Row' >
        
        <span  style={{fontSize:"20px" ,marginLeft:"10px" , marginTop:"8px"}}>Password</span>
        <input  style={{marginTop:"10px" , marginBottom:"10px" , marginRight:"15px" , 
         background:"#2a2929f8", color:"white" , border:"none"}} type='text' placeholder='Set Password'></input>

        <span style={{marginTop:"15px" , marginRight:"15px"}}>╳</span>

</div>

<div >
  <span style={{color:"gray", fontSize:"13px", display:"flex" , marginTop:"10px" , marginLeft:"5px"}}> Other users will join your shared Wi-Fi network<br/> using this password.</span><br/>
  <span style={{color:"gray", fontSize:"13px", display:"flex" , marginLeft:"5px"}}> The password must contain at least 8 Characters. <br/> Changing the password will disconnect 
        any <br/>currently connected users.</span>
</div>
       
    </div>
  )
}

export default Wifi_Password