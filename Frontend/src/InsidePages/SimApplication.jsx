import React from 'react'
import { useNavigate } from 'react-router-dom'

function SimApplication() {
    const navigate =useNavigate()
  return (
    <div>
        
        
        <div className="top" >


             <div   id="button" onClick={()=>navigate(-1)}> ＜ Back  </div> 
             <div style={{color:"white" ,fontSize:"17px"}}>SIM Applications</div>

        </div>

        <br/>

        <span className='paragraph' >VI</span>
        
              

        <div id="Blocks"  style={{height:"280px" , marginTop:"5px"}}>


        
         <span   > <a href="https://www.myvi.in/help-support/faqs/how-to-activate-deactivate-vas-value-added-services"  className='links' > FLASH! </a></span>
        <hr id="Horizontal_Line_General"/>
   
        <span  > <a href="https://www.myvi.in/value-added-services/sports-packs"  className='links'  > Cricket & Sports </a></span>
        <hr id="Horizontal_Line_General"/>

        <span  > <a href="https://www.myvi.in/value-added-services/star-talk"  className='links'  > Startalk </a></span>
        <hr id="Horizontal_Line_General"/>

        <span  > <a href="https://www.myvi.in/value-added-services/contests"  className='links'  > Plat n Win </a></span>
        <hr id="Horizontal_Line_General"/>

        <span  > <a href="https://www.myvi.in/vi-movies-and-tv"  className='links'  > Entertainment  </a></span>
        <hr id="Horizontal_Line_General"/>

        <span  > <a href="https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online"  className='links'  > Information </a></span>
        <hr id="Horizontal_Line_General"/>

        <span  > <a href="https://www.myvi.in/value-added-services/live-astrology-services"  className='links'  > Astrology </a></span>
        <hr id="Horizontal_Line_General"/>

        <span  > <a href="https://www.myvi.in/international-roaming-packs#:~:text=Simply%20log%20in%20to%20the,the%20best%20international%20roaming%20plans."  className='links'  > Roming </a></span>
        


        </div>
              
              
               
        
        
        
    </div>
  )
}

export default SimApplication