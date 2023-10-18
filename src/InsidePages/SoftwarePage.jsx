import React from 'react'

import { useNavigate } from 'react-router-dom'
function SoftwarePage() {
  const navigate = useNavigate()
  return (
    <div>
<div
 style={{display:"flex" , flexDirection:"row", marginTop:"35px" , alignItems:"flex-start" ,justifyContent:"flex-start" , gap:"10px"} }>
 <button  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ General </button> 
 <div style={{color:"white" ,fontSize:"18px"}}>Software Update</div> 
 </div>

 <br/>
<br/> 

<div
 style={{color:"white",
 background:"#2a2929f8" ,
  height:"40px",
  borderRadius:"8px"}}>

    <div className='Screen_View_Row'>
     <button style={{fontSize:"17px"  , marginTop:"10px" ,  marginLeft:"15px", width:"320px" , 
     textAlign:"left",color:"white" ,  background:"#2a2929f8" , borderTop:"none" , 
     borderLeft:"none" , borderBottom:"none" , borderRight:"none"}} onClick={()=>navigate('')} >Automatic Updates  </button>
       <span style={{marginRight:"15px " , marginTop:"10px"}}>{">"}</span>

    </div>

</div>
<br/>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


<div style={{color:"gray",display:"flex" , flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
  <span>iOS 15.7.9</span>
  <span>iOS is up to date</span>
  </div>


    
 </div>
   
  )
}

export default SoftwarePage