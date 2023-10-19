import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'


function View_Display() {
    const navigate = useNavigate()

    
    
        const [selectedRingtone, setSelectedRingtone] = useState(''); // State to store the selected ringtone
      
        const handleRingtoneChange = (event) => {
          setSelectedRingtone(event.target.value);
        };

    
  return (

    < div>

<div style={{display:"flex" , flexDirection:"row", gap:"10px"} }>
<button id="button" onClick={()=>navigate(-1)}> ＜ Back</button> 
<div style={{color:"white"}}>Display Zoom </div>
</div>





    <div id="Blocks" style={{height:"500px"}}>
        <div>
      
        </div>
      
    
        <div className="ringtone-selector">
      <h2>Select a Ringtone</h2>
      <select value={selectedRingtone} onChange={handleRingtoneChange}>
        <option value="">Select a ringtone</option>
        <option value="Ringtone 1">Ringtone 1</option>
        <option value="Ringtone 2">Ringtone 2</option>
        <option value="Ringtone 3">Ringtone 3</option>
        {/* Add more ringtone options here */}
      </select>

      <div className="selected-ringtone">
        {selectedRingtone && (
          <p>Selected Ringtone: {selectedRingtone}</p>
        )}
      </div>
    </div>

    </div>
   

   </div>
  )
}

export default View_Display