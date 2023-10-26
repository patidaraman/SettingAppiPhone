import React, { useEffect, useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'






function TextSize() {

    const navigate = useNavigate()

    const [TextSize, setTextSize] = useState(20);

  const handleTextSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setTextSize(newSize);
    updateTextSize(newSize);
  };


  const updateTextSize = (newSize) => {
    fetch('http://localhost:8000/textsize/textsize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ size: newSize }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Text size updated:', data.size);
        
      })
      .catch((error) => {
        console.error('Error updating text size:', error);
      });
  };


  useEffect(() => {
    fetch('http://localhost:8000/textsize/textsize',{
      method:"GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTextSize(data.size);
      })
      .catch((error) => {
        console.error('Error fetching text size:', error);
      });
  }, []);



 





   


  return (
    <div>
        
        
        
    <div className='top'>
           <div  id="button" onClick={()=>navigate(-1)}> ＜ Back </div> 
           <div style={{color:"white" ,fontSize:"20px"}}>Text Size</div>
    </div>
        
        
        <div  className="text-container" style={{ fontSize: `${TextSize}px` }}>
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
        max={50}
        value={TextSize}
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