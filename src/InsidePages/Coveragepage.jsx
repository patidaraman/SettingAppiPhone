import React from 'react'
import { useNavigate } from 'react-router-dom'

function Coveragepage() {
    const navigate = useNavigate()
  return (
    <div>
        <div className='top'>
        <div  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ About  </div> 
        <div style={{color:"white" ,fontSize:"20px"}}>Coverage</div>
        </div>
        <br/><br/>

        <div
         style={{color:"white",
         background:"#2a2929f8" ,
         height:"45px",
         borderRadius:"8px"}}>

   <div
        style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{fontSize:"20px"  , marginTop:"10px" ,  marginLeft:"15px", width:"320px" , 
        textAlign:"left",color:"white" ,  background:"#2a2929f8" }}>Coverage Expired </div>
       
   </div>

<div style={{marginTop:"50px"}}>
<span style={{color:"gray",fontSize:"15px",marginLeft:"10px" }}>SERVICE OPTION</span>
</div>
  
<div
         style={{color:"white",
         background:"#2a2929f8" ,
         height:"85px",
         borderRadius:"8px" , marginTop:"7px"}}>

   <div
        style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{fontSize:"17px"  , marginTop:"10px" ,  marginLeft:"15px", width:"320px" , 
        textAlign:"left",color:"white" ,  background:"#2a2929f8"}} > Paid Repairs & Service </div>
        <span style={{marginRight:"15px " , marginTop:"10px",color:"gray",fontSize:"18px"}}>Available</span>
   </div>

       <hr style={{borderBottom:"1px solid rgb(98,95,95)" , marginLeft:"18px" ,marginRight:"1px"}}></hr>

   <div
        style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{fontSize:"17px"   ,  marginLeft:"15px", width:"320px" , 
        textAlign:"left",color:"white" ,  background:"#2a2929f8" }}> Phone Support </div>
        <span style={{marginRight:"15px " ,color:"gray",fontSize:"18px"}}>Available</span>
   </div>

   <div style={{marginTop:"25px" , display:'flex', flexDirection:'column',alignItems:"flex-start"}}>
<span style={{color:"gray",fontSize:"15px",marginLeft:"10px" }}>Our records indicate that your product is not covered 
under Apple's Limited warranty or an AppleCare product for hardware repairs and service based on the estimate expriation 
date. </span><a href="https://support.apple.com/en-in" style={{textDecoration:"none",color:"#007FFF",marginLeft:"10px"}}>Learn more about your support options...</a>
</div>
       
    </div>
    </div>
    </div>
  )
}

export default Coveragepage