import React from 'react'
import { useNavigate } from 'react-router-dom'

function Batterypage() {
    const navigate = useNavigate()
  return (
    <div>

    

<div className='top'>
<button  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ About </button> 
<div style={{color:"white" ,fontSize:"20px"}}>Battery</div>
</div>
<br/><br/>


<div
 style={{color:"white",
 background:"#2a2929f8" ,
 height:"135px",
 borderRadius:"8px"}}>

<div
style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
<div style={{fontSize:"18px"  , marginTop:"10px" ,  marginLeft:"15px", width:"320px" , 
textAlign:"left",color:"white" ,  background:"#2a2929f8" }} >Service </div>
<span style={{ fontSize:"13px" , marginLeft:"15px", marginTop:'8px'}}>There's an issue with your iPhone Battery.
 For Apple-certified repairs, visit an Apple Store or an Apple Authorised Service Provider </span>
</div>
<hr style={{borderBottom:"1px solid rgb(98,95,95)" , marginLeft:"14px" ,marginRight:"1px"}}></hr>
<div style={{marginLeft:"15px"}}>
   <a href="https://support.apple.com/en-in/HT209143" style={{textDecoration:"none",color:"#007FFF",fontSize:"15px"}}>Learn More </a>

   </div>
</div>


       </div>
  )
}

export default Batterypage