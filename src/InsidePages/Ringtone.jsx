import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom';







function Ringtone(){

    
    const navigate=useNavigate()


    const options = ["Opening (Default)", "Apex" ,"Beacom" ,"Bulletin" , "By The Seaside" ,
                      "Chimes", "Circuit","Silk","Slow Rise","Ripples","Sencha","Stargaze" , "Summit" , "Twinkel" , "Uplift" , "Waves" , "Classic"];


    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
      setSelectedOption(option === selectedOption ? null : option);
    };



    


  return (
    <div>
        



                <div className='top'>
                      <div   id="button" onClick={()=>navigate(-1)}> ＜ Back </div> 
                      <div style={{color:"white" ,fontSize:"20px" }}>Ringtone</div>
                </div>


            <br/>

                    <div id="Blocks" style={{height:"35px"}} >

                            <div  className="Screen_View_Row">

                              <div className="Button_Click"  onClick={()=>navigate('/Ringtone')} >Vibration</div>
                               <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/Ringtone')}> Default</div>
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

   
                     <div id="blocks" style={{height:"600px",background:"#2a2929f8" , borderRadius:"8px"}}>

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

             <br/>  
        
    </div>
  )
}

export default Ringtone