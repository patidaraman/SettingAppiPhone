import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NightShift() {

         const navigate = useNavigate()


       const [isScheduledOn , setScheduledOn] = useState(false);
       const toggleScheduled = () => {
       setScheduledOn(!isScheduledOn);};



       const [isManuallyOn , setManuallyOn] = useState(false);
       const toggleManually = () => {
       setManuallyOn(!isManuallyOn);};




    //    slider for sound 
            const [sliderValue, setSliderValue] = useState(50); // Initial slider value
            const handleSliderChange = (event) => {
            setSliderValue(event.target.value); };


  return (
<div>
        
        

    <div className='top'>
           <div  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ Back </div> 
           <div style={{color:"white" ,fontSize:"20px"}}>Night Shift</div>
    </div>


<br/><br/>


        
    <span  style={{color:"gray" , fontSize:"12px " , display:"flex ", marginLeft:"10px"}}>
             Night Shift automatically shifts the colours of your <br/> display to the warmer end of the colours
             spectrum after <br/> dark. This may help you get a better night's sleep.

    </span>

 <br/>


    <div id="Blocks" className='C2'>

                <div className="Screen_View_Row" >

                           <span id="Button_General" style={{marginTop:"10px"}}>Scheduled </span>

                           <span style={{marginTop:"5px",marginRight:"10px"}}>
                           <label className="switch">
                           <input type="checkbox" onChange={toggleScheduled} checked={isScheduledOn} />
                           <span className="slider round"></span>
                           </label>
                           </span>

                </div >

    </div>
        
<br/>

    
     <div id="Blocks" className='C2'>

                <div className="Screen_View_Row" >

                        <span id="Button_General" style={{marginTop:"10px"}}>Manually Enable </span>
                        <span style={{marginTop:"5px",marginRight:"10px"}}>
                        <label className="switch">
                        <input type="checkbox" onChange={toggleManually} checked={isManuallyOn} />
                        <span className="slider round"></span>
                        </label>
                        </span>

                </div >


    </div>      
        
<br/><br/>


    <span  style={{color:"gray" , fontSize:"12px " , display:"flex ", marginLeft:"10px" , marginBottom:"5px"}}>
           COLOUR TEMPERATURE

    </span>



    <div id="Blocks" style={{height:"100px"}}>

               <div className="Screen_View_Row" >

                       <span id="Button_General" style={{marginTop:"15px" , marginLeft:"60px"}}>Less Warm </span>
                       <span id="Button_General" style={{marginTop:"10px" , marginLeft:"20px"}}>More Warm </span>

                       
                </div>

                 <div>
                          <div className="Warm-slider">
                          <input type="range" min="0"  max="100"  value={sliderValue}  onChange={handleSliderChange}className="Warm" />
                          </div> 
                </div>

    </div>

     


        
</div>
  )
}

export default NightShift