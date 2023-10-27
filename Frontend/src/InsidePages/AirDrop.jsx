import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom';







function AirDrop(){

    
    const navigate=useNavigate()


    const options = ["Opening (Default)", "Apex" ,"Beacom" ,"Bulletin" , "By The Seaside" ,
    "Chimes", "Circuit","Consetellation","Cosmic" ,"Crystel","Hilside","IIuminate","Night Owl",
    "Playtime","Presto","Radar","Radiate","Ripples","Sencha","Signal","Silk","Slow Rise","Stargaze" , "Summit" , "Twinkel" , "Uplift" , "Waves" ];

    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option === selectedOption ? null : option);
      sendAirdropToServer(option);
    };

    const sendAirdropToServer = (selectedAirdropAlerts) => {
      fetch("http://localhost:8000/airdrop/airdrop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({selectedAirdropAlerts}),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Selected  Airdrop Alerts sent to the server:", data);
          setSelectedOption(selectedAirdropAlerts); 
        })
        .catch((error) => {
          console.error("Error sending data to the server:", error);
        });
    };















  return (
    <div>
        



                <div className='top'>
                      <div  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ Back </div> 
                      <div style={{color:"white" ,fontSize:"20px" }}>AirDrop</div>
                </div>


            <br/>

                    <div id="Blocks" style={{height:"35px"}} >

                            <div  className="Screen_View_Row">

                              <div className="Button_Click"  onClick={()=>navigate('/AirDrop')} >Vibration</div>
                               <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/AirDrop')}> Default</div>
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
                              <span className='paragraph'>RINGTONES</span> 
                              </div>

   
                     <div id="blocks" style={{height:"1070px",background:"#2a2929f8" , borderRadius:"8px"}}>

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

export default AirDrop