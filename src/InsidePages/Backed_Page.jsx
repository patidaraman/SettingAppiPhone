import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../App.css'

function Backed_Page() {
   const  navigate = useNavigate()
  return (
    <div>
         <div style={{display:"flex" , flexDirection:"row", gap:"10px" } }>
        <button  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ Setting  </button> 
        <div style={{color:"white" ,fontSize:"17px"}}>Apple ID Backed Up</div>
        
    </div>
    </div>
  )
}

export default Backed_Page