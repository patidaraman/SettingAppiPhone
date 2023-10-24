import React from "react";
import aman from "../images/aman.jpg";
import { useNavigate } from "react-router-dom";
import IC from '../images/IC.png'
import MAP from '../images/MAP.jpg'
import FM from '../images/FM.png'
import FS from '../images/FS.jpg'
import AIP from '../images/AIP.jpeg'
import MB from '../images/MB.jpg'
import { fontGrid } from "@mui/material/styles/cssUtils";

function Profile_1() {
  const navigate = useNavigate();





  return (
    <div>
      <div className="top">
        <div
          style={{ fontSize: "19px" }}
          id="button"
          onClick={() => navigate(-1)}
        >
          {" "}
          ＜ Setting{" "}
        </div>
        <div style={{ color: "white", fontSize: "17px", marginLeft: "14px" }}>
          Apple ID
        </div>
      </div>

      <div className="profileview">
        <span>
          <img
            src={aman}
            width={70}
            height={70}
            className="profile_icon"
            alt="Profile Icon"
          />
        </span>
        <div style={{ marginTop: "20px" }}>
          <span style={{ marginLeft: "50px", fontSize: "20px" }}>
            Aman Patidar
          </span>
          <br />
          <span style={{ color: "gray" }}>amanpatidar0681@gmail.com</span>
        </div>
      </div>

      <br />
      

      <div id="Blocks" style={{ height: "180px" }}>
        <div className="Screen_View_Row"  onClick={() => navigate("/NPE")} >
          <div className="Button_Click" style={{ marginTop: "10px" }}>
            Name, Phone Numbers, Email{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click" style={{ marginTop: "10px" }}>
            Password & Security{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click" style={{ marginTop: "10px" }}>
            Payment & Shipping{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click" style={{ marginTop: "10px" }}>
            Subscription{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
      </div>

      <br />

            <div id="Blocks" style={{height:"180px"}} >

                   <div  className="Screen_View_Row">
                         <div>
                             <img className="Image_Align" style={{marginTop:"10px"}} src={IC}  alt="icloud icon" />
                         </div>
                          <div  className="Button_Click"  style={{ marginTop:"10px" }} onClick={()=>navigate()} > iCloud</div>
                         <span   className="Arrow_Icon" style={{ marginTop:"10px"}}>{">"}</span>
                    </div>

                    <hr  id="Horizontal_Line"></hr>



                    <div  className="Screen_View_Row">
                          <div>
                              <img className="Image_Align"  src={MAP}    alt="Media  Icon" />
                         </div>
                         <div   className="Button_Click" onClick={()=>navigate('')} >Media & Purchases</div>
                         <span  className="Arrow_Icon"  style={{ marginTop:"5px"}}>{">"}</span>
                     </div>


                    <hr id="Horizontal_Line"  ></hr>



                   <div  className="Screen_View_Row">
                         <div>
                             <img className="Image_Align"  src={FM}   alt="Fimd my  Icon" />
                         </div>
                         <div  className="Button_Click"  onClick={()=>navigate('')} >Find My</div>
                         <span  className="Arrow_Icon"  style={{ marginTop:"5px"}}>{">"}</span>
                   </div>

                   <hr id="Horizontal_Line"  ></hr>



                   <div  className="Screen_View_Row">
                         <div>
                             <img className="Image_Align"  src={FS}   alt="Family sharing Icon" />
                         </div>
                         <div  className="Button_Click"  onClick={()=>navigate('')} >Family Sharing</div>
                         <span  className="Arrow_Icon"  style={{ marginTop:"5px"}}>{">"}</span>
                   </div>

             </div>


      <br/>

      <div id="Blocks" style={{height:"94px"}} >

                  <div  className="Screen_View_Row">
                         
                              <img  style={{marginTop:"8px" , height:"35px",width:"20px", marginLeft:"15px" , borderRadius:"2px"}} src={AIP}  alt="iPhone icon" />
                         
                           <div>
                               <div  className="Button_Click"  style={{ marginTop:"10px", marginLeft:"25px"}} onClick={()=>navigate()} > iPhone</div>
                               <div style={{color:"gray" , fontSize:"10px", marginLeft:"23px", marginBottom:"10px"}}> This iPhone 7</div>
                          </div>
                         
                        
                  </div>

           <hr  id="Horizontal_Line"></hr>



                  <div  className="Screen_View_Row">
                    
                         
                              <img  src={MB}    style={{ height:"20px",width:"30px", marginLeft:"10px" , borderRadius:"2px"}}  alt="Macbook  Icon" />
                          
                          <div>
                          <div   className="Button_Click" onClick={()=>navigate('')} >Aman's Macbook Air</div>
                          <div style={{color:"gray" , fontSize:"10px", marginLeft:"20px", marginBottom:"10px"}}> Macbook Air 13"</div>
                          </div>
                        
                         
                        
                   </div>
     </div>


           <br/>
          <div id="Blocks" style={{height:"40px"}} >

                    <div  className="Screen_View_Row">
     
                          <div  className="Button_Click"  style={{ marginTop:"10px"}} onClick={()=>navigate()} >

                              <div style={{display:"flex" , justifyContent:"center" , color:"red"}}> Sign Out</div>
                          </div>
       
                    </div>
          </div>

    
</div>
  );
}

export default Profile_1;
