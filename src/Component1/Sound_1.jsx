import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Sound_1() {


  const navigate = useNavigate()


     // 1. vibrate on ring slider 
           const [isVibrateRingOn , setVibrateRingOn] = useState(false);
           const toggleVibrateRing = () => {
           setVibrateRingOn(!isVibrateRingOn);}


      // 2. vibrate on silent slider 
            const [isVibrateSilent , setVibrateSilentOn ] = useState(false);
            const toggleVibrateSilent =() =>{
            setVibrateSilentOn(!isVibrateSilent);};



      // 3. slider for sound 
            const [sliderValue, setSliderValue] = useState(50); // Initial slider value
            const handleSliderChange = (event) => {
            setSliderValue(event.target.value); };


      // 4. change with button slider 
            const [isChangeWithButtonOn , setChangeWithButtontOn ] = useState(false);
            const toggleChangeWithButton =() =>{
            setChangeWithButtontOn(!isChangeWithButtonOn);};



     // 5. keyboard clicks slider 
           const [isKeyboardClicks , setKeyboardClicksOn ] = useState(false);
           const toggleKeyboardClicks =() =>{
           setKeyboardClicksOn(!isKeyboardClicks);};


    // 6. lock sound slider 
          const [isLockSound , setLockSoundOn ] = useState(false);
          const toggleLockSound =() =>{
          setLockSoundOn(!isLockSound);};


    // 7. System hapticsslider   
          const [isSystemHaptics , setSystemHapticstOn ] = useState(false);
          const toggleSystemHaptics =() =>{
          setSystemHapticstOn (!isSystemHaptics);};



      
      
      

  return (


<div >


      {/* Sound Page Heading  */}
  
    <div  style={{display:"flex", flexDirection:"row",  gap:"10px"  } }>
                    
           <div id="button" onClick={()=>navigate(-1)}> ＜ Settings </div> 
           <div style={{fontSize:"18px",marginTop:"5px"}}>Sound & Haptics</div>

    </div>

       
    <span style={{color:"gray",fontSize:"12px",marginLeft:"15px", marginTop:"20px" }}>VIBRATAE</span>





  {/* Block 1 Vibrate on ring and silent */}

 <div id="Blocks" style={{height:"83px",marginTop:"5px"}}>

       <div className="Screen_View_Row" >

                 <span id="Button_General" style={{marginTop:"10px"}}> Vibrate on Rink</span>
                 <span style={{marginTop:"5px",marginRight:"10px"}}>
                 <label className="switch">
                 <input type="checkbox" onChange={toggleVibrateRing} checked={isVibrateRingOn} />
                 <span className="slider round"></span>
                 </label>
                 </span>
       </div >

<hr id="Horizontal_Line_General"/>


      <div className="Screen_View_Row" >

                 <span id="Button_General" style={{marginTop:"5px"}}> Vibrate on Silent </span>
                 <span style={{marginRight:"10px"}}>
                 <label className="switch">
                 <input type="checkbox" onChange={toggleVibrateSilent} checked={isVibrateSilent} />
                 <span className="slider round"></span>
                 </label>
                 </span>
       </div >
</div>
      
<br/>


<span style={{color:"gray",fontSize:"12px",marginLeft:"15px" }}>HEADPHONE AUDIO</span>


{/* Block 2 Headphone saftey  */}

<div id="Blocks" style={{height:"40px",marginTop:"5px"}}>

      <div className="Screen_View_Row" >

         
                 <span id="Button_General"  onClick={()=>navigate("/HeadphoneSafety")} style={{marginTop:"10px"}}> HeadPhone Seafty</span>
                 <span style={{marginTop:"8px" , marginRight:"12px"}}>{">"}</span>                  
      </div >
</div>



<br/>



<span style={{color:"gray",fontSize:"12px",marginLeft:"15px" }}>RINGER AND ALEARTS</span>

<div id="Blocks" style={{height:"83px",marginTop:"5px"}}>

          <div className="Screen_View_Row" >

         <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-evenly"}}>
         <span id="Button_General"  onClick={()=>navigate("")} style={{marginTop:"10px" , marginRight:"-310px"}}>
                 🔕
             </span>

             <div className="Sound-slider">
      
      <input type="range" min="0"  max="100"  value={sliderValue}  onChange={handleSliderChange}className="sound" />
    
     </div>
             <span style={{marginTop:"8px" , marginRight:"12px" ,marginLeft:"110px"}}>🔊</span>


         </div>

        
          
     </div>     
            
   <hr id="Horizontal_Line_General"/>


     <div className="Screen_View_Row" >

          <span id="Button_General">
               Change with Buttons
          </span>

          <span style={{marginRight:"10px" , marginBottom:"8px"}}>
                 <label className="switch">
                 <input type="checkbox" onChange={toggleChangeWithButton} checked={isChangeWithButtonOn} />
                 <span className="slider round"></span>
                 </label>
        </span>

    </div >

    <span className="Screen_View_Row" style={{marginTop:"5px"}} >
      <span className='paragraph' >
      The  volume of the ringer and alerts will  not  be<br/> affected by the volume buttons</span>
      </span>
   
      

      <br/>

<div style={{marginBottom:"5px"}}>
<span className='paragraph'>SOUND AND VIBRATION PATTERNS</span>
</div>
      



<div id="Blocks" style={{height:"245px"}} >

       <div  className="Screen_View_Row">

            <div className="Button_Click"  onClick={()=>navigate('/Ringtone')} >Ringtone</div>
            <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/Ringtone')}> Opening</div>
            <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>

        </div>

    <hr id="Horizontal_Line_General"/>

        <div  className="Screen_View_Row">

            <div className="Button_Click"  onClick={()=>navigate('/TextTone')} >Text Tone</div>
            <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/TextTone')}>Note</div>
            <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>

        </div>
        <hr id="Horizontal_Line_General"/>

        <div  className="Screen_View_Row">

            <div className="Button_Click"  onClick={()=>navigate('/NewVoicemail')} >New Voicemail</div>
            <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/NewVoicemail')}> Apex</div>
            <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>

        </div>

    <hr id="Horizontal_Line_General"/>

        <div  className="Screen_View_Row">

            <div className="Button_Click"  onClick={()=>navigate('/CalenderAlerts')} >Calendar Alerts</div>
            <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/CalenderAlerts')}> Chord</div>
            <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>

        </div>


        <hr id="Horizontal_Line_General"/>

        <div  className="Screen_View_Row">

            <div className="Button_Click"  onClick={()=>navigate('/ReminderAlerts')} >Reminder Alrets</div>
            <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/ReminderAlerts')}> Chord</div>
            <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>

        </div>

        <hr id="Horizontal_Line_General"/>

        <div  className="Screen_View_Row">

            <div className="Button_Click"  onClick={()=>navigate('/AirDrop')} >Airdrop</div>
            <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/AirDrop')}> Pulse</div>
            <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>

        </div>

  </div>
      


<br/>



<div id="Blocks" style={{height:"83px",marginTop:"5px"}}>

     <div className="Screen_View_Row" >

          <span id="Button_General" style={{marginTop:"10px"}}>
               KeyBoards Clicks
          </span>

          <span style={{marginTop:"5px",marginRight:"10px"}}>
                 <label className="switch">
                 <input type="checkbox" onChange={toggleKeyboardClicks} checked={isKeyboardClicks} />
                 <span className="slider round"></span>
                 </label>
        </span>

    </div >

  
<hr id="Horizontal_Line_General"/>


    <div className="Screen_View_Row" >

             <span id="Button_General" style={{marginTop:"5px"}}>
                  Lock Sound
             </span>

             <span style={{marginRight:"10px"}}>
                    <label className="switch">
                    <input type="checkbox" onChange={toggleLockSound} checked={isLockSound} />
                    <span className="slider round"></span>
                    </label>
             </span>

    </div >




  </div>
      

<br/>



<div id="Blocks" style={{height:"45px",marginTop:"5px"}}>

     <div className="Screen_View_Row" >

          <span id="Button_General" style={{marginTop:"10px"}}>
               System Haptics
          </span>

          <span style={{marginTop:"5px",marginRight:"10px"}}>
                 <label className="switch">
                 <input type="checkbox" onChange={toggleSystemHaptics} checked={isSystemHaptics} />
                 <span className="slider round"></span>
                 </label>
        </span>

    </div >


    
    </div>
    <span className='paragraph' >Play haptics for system controls and interactions.</span>
    
   
    <br/><br/><br/>
    

   
</div>











</div>
  )
}

export default Sound_1