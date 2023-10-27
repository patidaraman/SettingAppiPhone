import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom';







function NewVoicemail(){

    
    const navigate=useNavigate()


    const options = ["Note", "Aurora" ,"Bamboo" ,"Chord" , "Circles" ,
                      "Complete", "Hello","Input","Keys" ,"Popcorn","Pulse","Synth"]

    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option === selectedOption ? null : option);
      sendSelectedVoicemailToServer(option);
    };


    const sendSelectedVoicemailToServer = (selectedNewVoicemail) => {
      fetch("http://localhost:8000/voicemail/voicemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedNewVoicemail }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Selected New Voice mail sent to the server:", data);
          setSelectedOption(selectedNewVoicemail); // Update the local state
        })
        .catch((error) => {
          console.error("Error sending data to the server:", error);
        });
    };






  return (
    <div>
        



                <div className='top'>
                      <div  id="button" onClick={()=>navigate(-1)}> ＜ Back </div> 
                      <div style={{color:"white" ,fontSize:"20px" }}>New Voicemail</div>
                </div>


            <br/>

                    <div id="Blocks" style={{height:"35px"}} >

                            <div  className="Screen_View_Row">

                              <div className="Button_Click"  onClick={()=>navigate('/NewVoicemail')} >Vibration</div>
                               <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/NewVoicemail')}> Default</div>
                               <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>

                           </div>

                     </div>

                     <br/>

                     <div style={{marginBottom:"-21px"}}>
                              <span className='paragraph'>STORE</span> 
                              </div>

                     <div id="Blocks" style={{height:"40px",marginTop:"25px"}}>

                             <div className="Screen_View_Row" >
                             <div  style={{marginTop:"10px"}}>
                             <span> <a href="https://apps.apple.com/il/app/ringtones-for-iphone-music/id380908399"  style={{textDecoration:"none",color:"#007FFF" , fontSize:"17px" , marginLeft:"18px"}}  > Tone Store</a></span>
                             </div>
                            
                             </div>

                    </div >

                          <br/>  
                    <div style={{marginBottom:"-12px"}}>
                              <span className='paragraph'>ALERT TONES</span> 
                              </div>

   
                     <div id="blocks" style={{height:"474px",background:"#2a2929f8" , borderRadius:"8px"}}>

                            <div className="option-list">

                                        <ul style={{marginLeft:"40px"}}>
                                               {options.map((option, index) => (
                                            <li
                                                 key={index}
                                                 onClick={() => handleOptionClick(option)}
                                                 className={selectedOption === option ? "selected" : ""}
                                                 style={{
                                                  borderBottom: "1px solid gray", // Add a border between options
                                                  padding: "10px 0",
                                                  display: "flex",
                                                  justifyContent: "space-between",
                                                }}
                                            >

                                                 {option}
                                                  {selectedOption === option && <span className="checkmark">✓</span>}
                                            </li>

                                              ))}
                                        </ul>

                            </div>
                    </div>

             <br/>  
        
    </div>
  )
}

export default NewVoicemail