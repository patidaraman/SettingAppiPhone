import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function WifiAutojoin() {
    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState(null);



    const options = ["Never", "AskToJoin", "Automatic"];


    const handleOptionClick = (option) => {
        setSelectedOption(option);
        updateAutoJoinHotspot(option);
      };

      const updateAutoJoinHotspot = (option) => {
        fetch('http://localhost:8000/autojoin/autojoin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ autoJoinHotspot: option }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Auto-Join Hotspot setting updated:', data.autoJoinHotspot);
          })
          .catch((error) => {
            console.error('Error updating Auto-Join Hotspot setting:', error);
          });
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