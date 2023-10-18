import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { useState } from 'react';
import L from '../images/L.jpg'
import WI from '../images/WI.png'
import A from '../images/A.png'

function Wifi_1() {
const navigate = useNavigate()


 const [isWiFiOn, setWiFiOn ] = useState(false);
 const toggleWiFi = () => {
 setWiFiOn(!isWiFiOn);}


  return (


    <div>

<div style={{display:"flex" , flexDirection:"row", marginTop:"30px" , alignItems:"flex-start" ,justifyContent:"flex-start" , gap:"50px"} }>
<button id="button" onClick={()=>navigate(-1)}> ＜ Settings </button> 
<div style={{color:"white"}}>Wi-Fi</div>
</div>
         <br/>
         <br/>
       
         <div  id="Blocks" className='b1'>

             <div className='Screen_View_Row'>

                <span   style={{fontSize:"17px" , marginTop:"10px" , marginLeft:"35px"}}>Wi-Fi</span>
                <label  style={{marginRight:"15px" , marginTop:"10px"}} className="switch">
              <input type="checkbox" onChange={toggleWiFi} checked={isWiFiOn} />
              <span className="slider round"></span>
              </label>


                  
            </div>  
        
                <hr id="Horizontal_Line_General"></hr>


            <div className='Screen_View_Row'>

                 <div style={{ marginLeft:"10px"}} onClick={()=>navigate('')}>
                  ✓  Airtel_8965992254_5G 
                 </div>
                 
                 <div style={{ marginRight:"12px" , display:"flex" ,gap:"8px" }}>
                  
                < img    src={L} width={20} height={20} loading="lazy"  alt="sound Icon" />
                < img  src={WI} width={20} height={20} loading="lazy"   alt="sound Icon" />
                < img  style={{marginTop:"-5px"}} src={A} width={32} height={32} loading="lazy"   alt="sound Icon" />
                 </div>

            </div>         
        </div>
                        
<br /><br />
        <span  style={{color:"gray",fontSize:"12px",marginLeft:"15px"}}>NETWORKS</span>



        <div  id="Blocks" className='b1'>
             <div className='Screen_View_Row'>
                <span style={{fontSize:"17px" , marginTop:"10px" , marginLeft:"35px"}} onClick={()=>navigate('')}>Chotu's iPhone </span>
                
                <div style={{ marginRight:"12px" , display:"flex" ,gap:"8px" }}>
                < img    style={{marginTop:"5px"}}   src={L} width={20} height={20} loading="lazy"  alt="sound Icon" />
                < img   style={{marginTop:"5px"}}  src={WI} width={20} height={20} loading="lazy"   alt="sound Icon" />
                < img  style={{marginTop:""}} src={A} width={32} height={32} loading="lazy"   alt="sound Icon" />
                 </div>

                  
            </div>  
        
                <hr  id="Horizontal_Line_General" />


            <div className='Screen_View_Row'>

                 <div style={{ marginLeft:"35px"}} onClick={()=>navigate('')}>
                  8965992254 
                 </div>
                 
                 <div style={{ marginRight:"12px" , display:"flex" ,gap:"8px" }}>
                < img    src={L} width={20} height={20} loading="lazy"  alt="sound Icon" />
                < img  src={WI} width={20} height={20} loading="lazy"   alt="sound Icon" />
                < img  style={{marginTop:"-5px"}} src={A} width={32} height={32} loading="lazy"   alt="sound Icon" />
                 </div>

            </div>         
        </div>
                        
           
      <br/>

      <div id="Blocks"  className='C3' >

<div className="Screen_View_Row">
     
      <div  className="Button_About_Page" style={{ marginTop:"10px" }} onClick={()=>navigate('')} >Ask to Jion Networks </div>
      <div style={{marginRight:"10px" , marginTop:"10px", color:"gray"}} onClick={()=>navigate('')}> Notify</div>
      <span  className='About_Arrow' style={{ marginTop:"10px"}}>{">"}</span>

</div>

</div>

< span style={{color:"gray",fontSize:"12px",marginLeft:"15px" , display:"flex",flexDirection:'column' , marginTop:"5px"}}> Known networks will be joined automatically. If no  <br/>
known network are available , you will be notified 
          <br/>of available networks</span>


          <br/>

 
          <div id="Blocks"  className='C3' >

<div className="Screen_View_Row">
     
      <div  className="Button_About_Page" style={{ marginTop:"10px" }} onClick={()=>navigate('')} > Auto-Join Hotspot  </div>
    
      <span  className='About_Arrow' style={{ marginTop:"10px"}}>{">"}</span>

</div>

</div>

< span style={{color:"gray",fontSize:"12px",marginLeft:"15px" , display:"flex",flexDirection:'column' , marginTop:"5px"}}> 
Allow this device to automatically discover nearby  <br/> personal hotspot when no Wi-Fi network is 
known network are available , you will be notified 
          <br/>available </span>

    </div>
  );
 }


export default Wifi_1