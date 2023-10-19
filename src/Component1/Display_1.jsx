import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LM from "../images/LM.jpeg"
import DM from "../images/DM.jpeg"




function Display_1() {

    const navigate = useNavigate()



              const [isAutomaticOn , setAutomatictOn ] = useState(false);
              const toggAutomatic =() =>{
              setAutomatictOn(!isAutomaticOn);};

    const [sliderValue, setSliderValue] = useState(50); // Initial slider value
            const handleSliderChange = (event) => {
            setSliderValue(event.target.value); };

            const [isRaisetoWakeOn, setRaisetoWakeOn ] = useState(false);
            const toggleRaisetoWake = () => {
            setRaisetoWakeOn(!isRaisetoWakeOn);}


            const [isChangeWithButtonOn , setChangeWithButtontOn ] = useState(false);
            const toggleChangeWithButton =() =>{
            setChangeWithButtontOn(!isChangeWithButtonOn);};
  


            const [isBoldTextOn , setBoldTextOn ] = useState(false);
            const togglBoldText =() =>{
            setBoldTextOn(!isBoldTextOn);};
  


  return (

<div >

             <div  style={{display:"flex" , flexDirection:"row" ,alignItems:"center"} }>
             <button id="button" onClick={()=>navigate(-1)}> ＜ Settings </button> 
             <div style={{marginTop:"8px"}} >Display & Brightness</div>
             </div>

<br/><br/>


           <span className='graySmall'>APPEARANCE</span>

           <div id="Blocks" style={{height:"210px"}}>
                   <div className="Screen_View_Row" >

                           <div className="colView">
                           <img  className='displayimg' src={LM}   height={"85px"}  width={"40px" }   alt="Light mode icon"></img>
                           <span>Light</span> 
                           </div>
               


                           <div className='colView'>
                           <img  className='displayimg'  src={DM}   height={"85px"}  width={"40px"}   alt="Dark mode icon"></img>
                           <span>Dark</span> 
                           </div>
                   </div>


<hr id="Horizontal_Line_General" style={{marginTop:"35px"}}/> 



                    <div className="Screen_View_Row" >

                            <span id="Button_General" style={{marginTop:"5px"}}>  Automatic</span>
                            <span style={{marginRight:"10px" , marginBottom:"-10px"}}>
                            <label className="switch">
                            <input type="checkbox" onChange={toggAutomatic} checked={isAutomaticOn} />
                            <span className="slider round"></span>
                            </label>
                            </span>

                    </div >

          </div>

<br/>



          <span  className='graySmall' > BRIGHTNESS</span>


          <div id="Blocks" style={{height:"40px",marginTop:"5px"}}>

                <div className="Screen_View_Row" >

                     <div className='SliderRow'>
                     <span id="Button_General"  onClick={()=>navigate("")} style={{marginTop:"10px" , marginRight:"-310px"}}>
                      ☀︎
                      </span>

                    <div className="Sound-slider">
                    <input type="range" min="0"  max="100"  value={sliderValue}  onChange={handleSliderChange}className="sound" />
                    </div>
                    <span style={{marginTop:"8px" , marginRight:"12px" ,marginLeft:"110px"}}>🔆</span>


         </div>
</div>
        



<br/><br/>



<div id="Blocks" style={{height:"45px"}}  className="Screen_View_Row" >
  
          <div className="Button_Click"  style={{marginTop:"12px"}} onClick={()=>navigate('/NightShift')} >Night Shift </div>
            <div  className=" ThreeInRow"  onClick={()=>navigate('/NightShift')}> Off</div>
            <span className=" ThreeInRow" >{">"}</span>

          </div>


<br/><br/>



<div id="Blocks" style={{height:"83px"}}   >


  <div className='Screen_View_Row'>
  <div className="Button_Click"  style={{marginTop:"12px"}} onClick={()=>navigate('/AutoLock')} >Auto-Lock </div>
            <div className=" ThreeInRow" onClick={()=>navigate('/AutoLock')}> Never</div>
            <span  className=" ThreeInRow">{">"}</span>
           
          </div>


            <hr id="Horizontal_Line_General"/>
      
  <div className="Screen_View_Row" >

          <span id="Button_General" style={{marginTop:"5px"}}>  Raise to Wake </span>
           <span style={{marginRight:"10px" , marginBottom:"13px"}}>
                 <label className="switch">
                 <input type="checkbox" onChange={toggleChangeWithButton} checked={isChangeWithButtonOn} />
                 <span className="slider round"></span>
                 </label>
          </span>

  </div >



  

  </div>
 
      <br/><br/>
         
        <div id="Blocks" style={{height:"83px"}}   >


<div className='Screen_View_Row'>
<div className="Button_Click"  style={{marginTop:"12px"}} onClick={()=>navigate('/TextSize')} >Text Size </div>
          <div  className=" ThreeInRow" onClick={()=>navigate('/TextSize')}> Never</div>
          <span  className=" ThreeInRow">{">"}</span>
         
        </div>


          <hr id="Horizontal_Line_General"/>
    
<div className="Screen_View_Row" >

        <span id="Button_General" style={{marginTop:"5px"}}> Bold Text</span>
         <span style={{marginRight:"10px" , marginBottom:"13px"}}>
               <label className="switch">
               <input type="checkbox" onChange={togglBoldText} checked={isBoldTextOn} />
               <span className="slider round"></span>
               </label>
        </span>

</div >

<br/>
<span  style={{color:"gray" , fontSize:"13px " , marginLeft:"10px" }}> DISPLAY ZOOM</span>

<div id="Blocks" style={{height:"40px"}}   >


  <div className='Screen_View_Row' style={{marginTop:"5px"}}>
  <div className="Button_Click"  style={{marginTop:"12px"}} onClick={()=>navigate('/View_Display')} >View </div>
            <div  className=" ThreeInRow"  onClick={()=>navigate('/View_Display')}> Standard </div>
            <span className=" ThreeInRow" >{">"}</span>
           
          </div>

        
          </div>
          <span  className='paragraph' > Choose a view for iPhone. Zoomed shows larger <br/>
          controls. Standard shows more content. </span>  

          <br/><br/>  
</div>
          
 
       
</div>     
       

       
   
   
</div>
  )
}

export default Display_1