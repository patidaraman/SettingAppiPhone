import { useNavigate } from 'react-router-dom'
import dnd from '../images/dnd.png'
import sleep from '../images/sleep.png'
import per from '../images/per.png'
import work from '../images/work.png'

import React, { useState } from 'react'

function Focus_1() {

  const navigate = useNavigate()
  const [isShareOn, setShareOn] = useState(false);
  const toggleshare = () => {
    setShareOn(!isShareOn);
    // sendDataToServer(!isBluetoothOn);

  };

  return (
    <div>
      
      

<div className="GHS">
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Settings{" "}
        </div>
        <div style={{ color: "white", fontSize: "20px" , marginLeft:"30px"}}>Focus</div>
      </div>
   
 
   <br/><br/>

<div style={{height:"180px"}} id="Blocks">


      <div  className="Screen_View_Row">
            <div>
                <img className="Image_Align" style={{marginLeft:"10px" , marginTop:"10px"}} src={dnd}   alt="Wifi Icon" />
            </div>
            <div className="Button_Click"  onClick={()=>navigate('/DND')}  style={{marginTop:"10px"}}>Do Not Disturb</div>
            <span className="Arrow_Icon" style={{ marginTop:"10px"}}>{">"}</span>
     </div>


<hr id="Horizontal_Line" ></hr>

     <div  className="Screen_View_Row">
           <div>
               <img className="Image_Align"  src={sleep}   alt="Bluetooth Icon" />
           </div>

           <div  className="Button_Click"  onClick={()=>navigate('')} >Sleep</div>
          <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{" >"}</span>
     </div>

<hr  id="Horizontal_Line"></hr>


     <div  className="Screen_View_Row">
          <div>
               <img className="Image_Align"  src={per} alt="Mobile Data Icon" />
          </div>

          <div className="Button_Click"  onClick={()=>navigate('')} >Personale</div>
          <span   className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>
     </div>

<hr  id="Horizontal_Line"></hr>

       <div  className="Screen_View_Row">
             <div>
                  <img className="Image_Align"  src={work}   alt="Hotspot  Icon" />
             </div>

             <div  className="Button_Click" onClick={()=>navigate()} >Work</div>
             <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>
      </div>       
</div>

<div className="paragraph"> Focus silences alerts and notification</div>

<br/>

<div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            Share Across Devices
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleshare}
                checked={isShareOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>
      <div className="paragraph" > Turning a Focus on for this device will also turn it <br/> on for your other devices</div>

      
      
  </div>    
      
  
  )
}

export default Focus_1