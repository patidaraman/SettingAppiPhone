import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function WifiAskother() {
    const navigate =  useNavigate()




    const options = ["Off", "Notify", "Ask"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };
  return (
    <div>
        
                <div className='top' style={{ gap:"15px"}}>
                        <div  id="button" onClick={()=>navigate(-1)} > ＜ Wi-Fi </div> 
                        <div style={{color:"white" , gap:"10px"}}>Ask to Join Networks</div>
                       </div>

                        <br/>

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

                        <div >
  
                                <span className='paragraph'> Known networks will be joined automatically. If no <br/> known networks are available,
                                 you will be notified of <br/> available networks.</span>

                </div>
 </div>
</div>
               
                  
               </div>






  )
}

export default WifiAskother