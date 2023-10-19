import React from 'react'
import { useNavigate } from 'react-router-dom'

function Certificatepage() {
    const navigate = useNavigate()
  return (
    <div>
         <div style={{display:"flex" , flexDirection:"row" } }>
        <button  style={{fontSize:"19px" ,width:"90px"}} id="button" onClick={()=>navigate(-1)}> ＜ About </button> 
        <div style={{color:"white" ,fontSize:"18px",marginTop:"5px" }}>Certificate Trust Settings</div>
       
    </div>
<br/><br/>
    <div
         style={{color:"white",
         background:"#2a2929f8" ,
         height:"80px",
         borderRadius:"8px"}}>

   <div
        style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{fontSize:"17px"  , marginTop:"10px" ,  marginLeft:"15px", width:"320px" , 
        textAlign:"left",color:"white" ,  background:"#2a2929f8" }}>  Trust Store Version </div>
        <span style={{marginRight:"15px " , marginTop:"10px",color:"gray",fontSize:"15px"}}>2022031500</span>
   </div>

       <hr style={{borderBottom:"1px solid rgb(98,95,95)" , marginLeft:"18px" ,marginRight:"1px"}}></hr>

   <div
        style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{fontSize:"17px"   ,  marginLeft:"15px", width:"320px" , 
        textAlign:"left",color:"white" ,  background:"#2a2929f8" }}>Trust Asset Version </div>
        <span style={{marginRight:"15px " ,color:"gray",fontSize:"15px"}}>1002</span>
   </div>
   <div style={{marginTop:"15px",marginLeft:"13px"}}>
   <a href="https://support.apple.com/en-in/HT209143" style={{textDecoration:"none",color:"#007FFF",fontSize:"12px"}}>Learn more about trusted certificates</a>

   </div>
 
</div>
    </div>
  )
}

export default Certificatepage