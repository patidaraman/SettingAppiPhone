import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SimPin() {

             const navigate =useNavigate()


             const [isSimPinOn , setSimPinOn] = useState(false);
             const toggleSimPin = () => {
             setSimPinOn(!isSimPinOn);};

  return (

    <div>

             <div className='top' style={{ gap:"15px"}}>
             <div  id="button" onClick={()=>navigate(-1)} > ＜ Back </div> 
             <div style={{color:"white" , gap:"30px " , marginTop:"5px"}}> SIM PIN </div>
             </div>


         <div id="Blocks" style={{height:"80px",marginTop:"25px"}}>

             <div className="Screen_View_Row" >

                  <span id="Button_General" style={{marginTop:"10px"}}>
                   SIM PIN
                  </span>

                  <span style={{marginTop:"5px",marginRight:"10px"}}>
                  <label className="switch">
                  <input type="checkbox" onChange={toggleSimPin} checked={isSimPinOn} />
                  <span className="slider round"></span>
                  </label>
                  </span>

             </div >
  
                 <hr id="Horizontal_Line_General"  style={{marginTop:"10px"}}/>  



                  <span className='paragraph'> Change PIN </span>
        </div>
    </div>
  )
}

export default SimPin