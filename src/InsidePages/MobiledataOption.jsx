import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function MobiledataOption() {


   const navigate = useNavigate()


   const [isDataOptionOn , setDataOptionOn] = useState(false);
   const toggleDataOption = () => {
   setDataOptionOn(!isDataOptionOn);};




   const [isLowDataModeOn , setLowDataModeOn] = useState(false);
       const toggleLowDataMode = () => {
       setLowDataModeOn(!isLowDataModeOn);};


       const [isIPOn , setIPOn] = useState(false);
       const toggleIP = () => {
       setIPOn(!isIPOn);};



  return (
    
    <div>
        
        


        <div className='top' style={{ gap:"15px"}}>
               <div  id="button" onClick={()=>navigate(-1)} > ＜ Back </div> 
               <div style={{color:"white" , gap:"30px " , marginTop:"5px"}}> Mobile Data Option  </div>
               </div>







    <div id="Blocks" style={{height:"80px",marginTop:"25px"}}>

                     <div className="Screen_View_Row" >

                             <span id="Button_General" style={{marginTop:"10px"}}> Data Roming  </span>
                             <span style={{marginTop:"5px",marginRight:"10px"}}>
                             <label className="switch">
                             <input type="checkbox" onChange={toggleDataOption} checked={isDataOptionOn} />
                             <span className="slider round"></span>
                             </label>
                             </span>

                    </div >
  
                                  <hr id="Horizontal_Line_General"  style={{marginTop:"10px"}}/>  
  
                    <div className="Screen_View_Row" onClick={()=>navigate("/VoicsData")}>

                           <span id="Button_General"> Voice & Data </span>
                           <div style={{marginRight:"10px"}}> 4G</div>
                           <span className='Arrow_General' > {">"}</span>
    
                      </div>
    </div>


    <br/><br/>


    <div id="Blocks" style={{height:"40px",marginTop:"25px"}}>

                         <div className="Screen_View_Row" >

                                 <span id="Button_General" style={{marginTop:"10px"}}>  Low Data Mode </span>
                                 <span style={{marginTop:"5px",marginRight:"10px"}}>
                                 <label className="switch">
                                 <input type="checkbox" onChange={toggleLowDataMode} checked={isLowDataModeOn} />
                                 <span className="slider round"></span>
                                 </label>
                                 </span>

                        </div >


     </div>

     <span className='paragraph' >
     Low Data Mode helps reduce mobile data usage. When <br/> Low Data Mode is turned on , automatic updates and <br/>background tasks,
     such as Photos syncing, are<br/> paused.
      </span>

      <br/>



      <div id="Blocks" style={{height:"40px",marginTop:"25px"}}>

                         <div className="Screen_View_Row" >

                                 <span id="Button_General" style={{marginTop:"10px"}}>  Limit Tracking </span>
                                 <span style={{marginTop:"5px",marginRight:"10px"}}>
                                 <label className="switch">
                                 <input type="checkbox" onChange={toggleIP} checked={isIPOn} />
                                 <span className="slider round"></span>
                                 </label>
                                 </span>

                        </div >


     </div>
     <span className='paragraph' >
     Limit IP adddress tracking by hiding your IP address  <br/> from known trackers in Mail and Safari 
      </span>
        
       
        


























        
    </div>
  )
}

export default MobiledataOption