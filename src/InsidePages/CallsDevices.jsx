import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

function CallsDevices() {

    const navigate = useNavigate()


    const [isCallsDevicesOn , setCallsDevicesOn] = useState(false);
       const toggleCallsDevices = () => {
       setCallsDevicesOn(!isCallsDevicesOn);};



       const [isMacOn , setMacOn] = useState(false);
       const toggleMac = () => {
       setMacOn(!isMacOn);};



  return (
    <div>
        
        
        <div className='top' style={{ gap:"15px"}}>
               <button  id="button" onClick={()=>navigate(-1)} > ＜ Back </button> 
               <div style={{color:"white" , gap:"10px"}}>Calls on Other Devices</div>
               </div>

           
     
        <div id="Blocks" style={{height:"40px",marginTop:"25px"}}>

                 <div className="Screen_View_Row" >

                         <span id="Button_General" style={{marginTop:"10px"}}>Allow Calls</span>

                        <span style={{marginTop:"5px",marginRight:"10px"}}>
                        <label className="switch">
                         <input type="checkbox" onChange={toggleCallsDevices} checked={isCallsDevicesOn} />
                        <span className="slider round"></span>
                        </label>
                         </span>

                </div >
         </div>

        <span className='paragraph'>Use your iPhone mobile account to make and receive <br/> calls on devices signed in to your iCloud account when 
        <br/> they are nearby and on Wi-Fi.</span>
        <br/>




        <span className='paragraph'>ALLOW CALLS ON</span>



        

        <div id="Blocks" style={{height:"40px", marginTop:"5px"}}>

        <div className="Screen_View_Row" >

        <span id="Button_General" style={{marginTop:"10px"}}>Aman's Macbook Air</span>

         <span style={{marginTop:"5px",marginRight:"10px"}}>
        <label className="switch">
        <input type="checkbox" onChange={toggleMac} checked={isMacOn} />
         <span className="slider round"></span>
        </label>
        </span>

</div >
</div> 

    
        
        
    </div>
  )
}

export default CallsDevices