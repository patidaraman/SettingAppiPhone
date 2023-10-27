

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SimPin() {
  const navigate = useNavigate();
  // const [isHeadphoneNotificationOn, setHeadphoneNotificationOn] = useState(false);
  // const toggleHeadphoneNotification = () => {
  // }





  return (
  
<div>
      <div className="top">
            <div
                style={{ fontSize: "19px" }}
               id="button"
               onClick={() => navigate(-1)}
            >
          {" "}
          ＜ Back{" "}
        </div>
        <div style={{ color: "white", fontSize: "17px"}}>
         Headphone Safety
        </div>
      </div>

      <br />

      <div id="Blocks" style={{ height: "80px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Headphone Notifi.{" "}
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                // onChange={toggleHeadphoneNotification}
                // checked={isHeadphoneNotificationOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>

        <hr id="Horizontal_Line_General" style={{ marginTop: "10px" }} />

        <div
          className="Screen_View_Row"
         
        >
          <span
            className="Button_Click"
            onClick={() => navigate("/MobiledataOption")}
          >
            {" "}
            Last 6 Months{" "}
          </span>
          <div style={{ marginRight: "15px" , color:"gray"}}> 0</div>
          
        </div>

       
      </div>

      <span className="Screen_View_Row" style={{ marginTop: "5px" }}>
        <div>
        <span className="paragraph">
           To protect your hearing , your iPhone will measure 
            <br /> headphone audio levels. If you exceed the <br/> recommended 7-day limit, a notification is sent and <br/>
            the volume is turned down.
          </span>
        </div>
          
        </span>

<br/>






</div>
      

         
        
      
   
  );
}

export default SimPin;

     







 