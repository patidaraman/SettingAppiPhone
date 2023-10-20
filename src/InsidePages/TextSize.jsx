import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'






function TextSize() {

    const navigate = useNavigate()




    const [textSize, setTextSize] = useState(16);

  const handleTextSizeChange = (e) => {
    setTextSize(e.target.value);
  };


   


  return (
    <div>
        
        
        
    <div className='top'>
           <div  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ Back </div> 
           <div style={{color:"white" ,fontSize:"20px"}}>Text Size</div>
    </div>
        
        
        <div  className="text-container" style={{ fontSize: `${textSize}px` }}>
        <span className='whitepara'>
            Apps that support Dyanamic Type will <br/> adjust to your prefered reading size <br/>below.
        </span>
        </div>
       
          <br/><br/><br/>  <br/><br/><br/>  <br/><br/><br/>  <br/><br/>

<div id="Blocks" style={{height:"55px",marginTop:"20px"}}  >
<div className="slider-container">
      <input
        type="range"
        min={12}
        max={24}
        value={textSize}
        onChange={handleTextSizeChange}
        step={1}
        className="TextSlider"
      />
     
     
    </div>
</div>
      


    </div>
  )
}

export default TextSize