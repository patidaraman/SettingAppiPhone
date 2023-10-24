import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function WifiAutojoin() {
    const navigate = useNavigate()



    const options = ["Never", "Ask to Join ", "Automatic"];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
      };
  return (
    <div>
        
        
        <div className='top' style={{ gap:"15px"}}>
               <div  id="button" onClick={()=>navigate(-1)} > ＜ Wi-Fi</div> 
               <div style={{color:"white" , gap:"10px"}}>Auto-Join Hotspot</div>
               </div>
               
               
               
               
               <div id="blocks" style={{height:"110px",background:"#2a2929f8" , borderRadius:"8px"}}>

<div className="option-list">

     <ul>
          {options.map((option, index) => (
          <li
          key={index}
          onClick={() => handleOptionClick(option)}
          className={selectedOption === option ? "selected" : ""}
           >

         {option}
         {selectedOption === option && <span className="checkmark">✓</span>}
         </li>

         ))}
  </ul>
               



         </div>
    </div>      
 </div>







  )
}

export default WifiAutojoin