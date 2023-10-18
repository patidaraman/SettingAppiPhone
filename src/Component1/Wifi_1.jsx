import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { useState } from 'react';
import lock from '../images/lock.jpg'
import wifisym from '../images/wifisym.jpg'
import isys from '../images/isys.png'

function Wifi_1() {
const navigate = useNavigate()

// You can add search functionality here
const [searchText, setSearchText] = useState('');
const handleInputChange = (e) => 
 setSearchText(e.target.value);
 //AirplaneMode SliderButton

 const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
 const toggleAirplaneMode = () => {
 setIsAirplaneModeOn(!isAirplaneModeOn);}


  return (


    <div>

<div style={{display:"flex" , flexDirection:"row", marginTop:"30px" , alignItems:"flex-start" ,justifyContent:"flex-start" , gap:"50px"} }>
<button id="button" onClick={()=>navigate(-1)}> ＜ Settings </button> 
<div style={{color:"white"}}>Wi-Fi</div>
</div>
         <br/>
         <br/>
       
         <div style={{color:"white",
                    background:"#2a2929f8" ,
                     height:"90px",
                     borderRadius:"8px"}}>

            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <span style={{fontSize:"22px" , marginTop:"10px" , marginLeft:"35px"}}>Wi-Fi</span>
                <label  style={{marginRight:"15px" , marginTop:"10px"}} className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
                  
            </div>  
        
                <hr style={{borderBottom:"1px solid rgb(98,95,95)" , marginLeft:"30px" ,marginRight:"1px"}}></hr>


            <div style={{display:"flex" , flexDirection:"row" ,justifyContent:"space-between"}}>

                 <div style={{ marginLeft:"10px"}}>
                  ✓  Airtel_8965992254_5G 
                 </div>
                 
                 <div style={{ marginRight:"12px" , display:"flex" ,gap:"8px" }}>
                < img style={{background:"black"}} src={lock} width={20} height={20} loading="lazy"  className="icon" alt="sound Icon" />
                < img style={{background:"black"}} src={wifisym} width={20} height={20} loading="lazy"  className="icon" alt="sound Icon" />
                < img style={{background:"black"}} src={isys} width={20} height={20} loading="lazy"  className="icon" alt="sound Icon" />
                 </div>

            </div>         
        </div>


      
        

        <h6  style={{color:"white"}}>NETWORKS</h6>
        <div  style={{color:"white",
                    background:"#2a2929f8" ,
                     height:"95px",
                     borderRadius:"8px"}}>

                        

           
              
            </div>

           
      
       
 
    </div>
  );
 }


export default Wifi_1