import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import SmallIcon from '../VideoAnimated/SmallIcon.mp4'
import LargeIcon from '../VideoAnimated/LargeIcon.mp4'


function View_Display() {
    const navigate = useNavigate()

    
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };
      
        
    
  return (

< div>

                  <div style={{display:"flex" , flexDirection:"row", gap:"10px"} }>
                  <div id="button" onClick={()=>navigate(-1)}> ＜ Back</div> 
                  <div style={{color:"white"}}>Display Zoom </div>
                 </div>





                <div id="Blocks" style={{height:"450px"}}>
                        
                       
                      <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-around" , marginTop:"20px"}}>

                             <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"80px"}}> 
                             <div>
                             <video autoPlay loop style={{height:"250px"}}>
                                      <source  src={SmallIcon} type="video/mp4" />
                                      </video>
                             </div>
                                      
                                      <span style={{marginTop:"5px"}}>Standard</span>
                                      

                                      <button
                                      className={`round-button ${selectedButton === 'button1' ? 'selected' : ''}`}
                                      onClick={() => handleButtonClick('button1')}
                                      >
  
                                      {selectedButton === 'button1' && <span className="tick">✓</span>}
                                      </button>
                                      </div>       
          

                                      <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"80px"}}> 
                                <div>
                                <video autoPlay  loop style={{height:"250px"}}>
                                      <source src={LargeIcon} type="video/mp4" /> 
                                      </video>
                                </div>
                                      
                                      <span style={{marginTop:"5px"}}>Zoomed</span> 
                                       
                                      <button
                                      className={`round-button ${selectedButton === 'button2' ? 'selected' : ''}`}
                                      onClick={() => handleButtonClick('button2')}
                                       >
   
                                     {selectedButton === 'button2' && <span className="tick">✓</span>}
                                     </button>
                                </div>
                        </div>
                </div>

</div>
  )
}

export default View_Display