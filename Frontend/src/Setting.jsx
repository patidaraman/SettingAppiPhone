import aman from './images/aman.jpg'
import Airplane from './images/Airplane.jpg'
import wifi from './images/wifi.jpg'
import notification from './images/notification.jpg'
import data from './images/data.jpg'
import hotspot from './images/hotspot.jpg'
import sound from './images/sound.jpg'
import focus from './images/focus.jpeg'
import general from './images/general.png'
import displayB from './images/displayB.jpg'
import bluetooth from './images/bluetooth.jpg'
 import { useNavigate } from 'react-router-dom'
import  { useEffect, useState } from 'react'


import './App.css'
import SearchBar from './Component1/searchbar'




function Setting() {
     const navigate = useNavigate()
      // You can add search functionality here

    // const [searchText, setSearchText] = useState('');
    // const handleInputChange = (e) => 
    //    setSearchText(e.target.value);


       //AirplaneMode SliderButton
       const [isAirplaneModeOn, setAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
                setAirplaneModeOn(!isAirplaneModeOn);  
                sendAirplaneToServer(!isAirplaneModeOn);          
                };


                const sendAirplaneToServer = async (data) => {
                    fetch("http://localhost:8000/airplanemode", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ isAirplaneModeOn: data }),
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log("Data sent to the server:", data);
                      })
                      .catch((error) => {
                        console.error("Error sending data:", error);
                      });
                  };



                  useEffect(() => {
                    // Fetch the Scheduled setting from the server when the component mounts
                    fetch("http://localhost:8000/airplanemode", {
                      method: "GET",
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        // Set the initial state based on the response
                        setAirplaneModeOn(data.isAirplaneModeOn);
                      })
                      .catch((error) => {
                        console.error("Error fetching Airplane Mode:", error);
                      });
                  }, []);

   
      

   


  return (


<div id="Main">
   
              <div id="setting">
              <h1> Settings</h1></div>
    

             <br/>

             <SearchBar></SearchBar>
             <br/>



{/* 2nd block */}

         <div className="Second_Block" id='Blocks'>

                    <div id="Screen_View_Col">

                           <div>
                           <img src={aman} width={60} height={60}  className="profile_icon" alt="Profile Icon" />  
                           </div>
        
                           <span className='Profile_View' onClick={()=>navigate("/Profile_1")}> Aman Patidar 
                           <div className="Info_Small_Text" >Apple ID, iCloud, Media</div>
                           <div style={{fontSize:"10px",marginBottom:"55px"}}>
                           & purchases</div> </span> 

                          <div className='Arrow_Icon' style={{marginTop:"30px"}} >  {">"}  </div>
            
         
                     </div>
          
         
                 <hr id="Horizontal_Line" style={{marginTop:"7px"}}></hr>

               
                     <div className="Screen_View_Row">
                           <div style={{marginLeft:"20px",marginTop:"5px"}}  onClick={()=>navigate("/Backed_page")}>iPhone Not Backed Up</div>
                           <div className='Arrow_Icon'  >  {">"}  </div>
                     </div> 
         </div> 
        
    
                 <br/>   
    

  {/* 3rd block */}

        <div className="Third_Block" id="Blocks">

                <div  className="Screen_View_Row" >
 
                     <div style={{marginTop:"10px"}}>
                     <img className="Image_Align" src={Airplane} width={30} height={30}  alt="Airplane Mode Icon" />
                     </div>
                   
                     <div style={{marginTop:"10px"}}>
                     <span  className='Name'> Airplane Mode </span>
                     </div>
                    

                    <div style={{marginTop:"10px", marginRight:"5px"}}>
                    <label className="switch">
                         <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
                         <span className="slider round"></span>
                    </label>
                    </div>
                   
          </div>




          <hr id="Horizontal_Line" ></hr>


                 <div  className="Screen_View_Row">
                       <div>
                           <img className="Image_Align" style={{marginLeft:"10px"}} src={wifi}   alt="Wifi Icon" />
                       </div>

                       <div className="Button_Click"  onClick={()=>navigate('/Wifi_1')} >Wi-Fi</div>
                       <div style={{marginRight:"10px" , marginTop:"5px", color:"gray"}} onClick={()=>navigate('/WiFi_1')}> Airtel_8965992254_5G</div>
                       <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>
                </div>

      
         <hr id="Horizontal_Line" ></hr>

                <div  className="Screen_View_Row">
                      <div>
                          <img className="Image_Align"  src={bluetooth}   alt="Bluetooth Icon" />
                      </div>

                      <div  className="Button_Click"  onClick={()=>navigate('/Bluetooth_1')} >Bluetooth</div>
                     <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{" >"}</span>
                </div>

         <hr  id="Horizontal_Line"></hr>


                <div  className="Screen_View_Row">
                     <div>
                          <img className="Image_Align"  src={data} alt="Mobile Data Icon" />
                     </div>

                     <div className="Button_Click"  onClick={()=>navigate('/Data_1')} >Mobile Date</div>
                     <span   className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>
                </div>

         <hr  id="Horizontal_Line"></hr>

                  <div  className="Screen_View_Row">
                        <div>
                             <img className="Image_Align"  src={hotspot}   alt="Hotspot  Icon" />
                        </div>

                        <div  className="Button_Click" onClick={()=>navigate('/Hotspot_1')} >Personal Hotspot</div>
                        <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>
                 </div>       
        </div>



    <br/>


  {/* 4th block */}

    <div className="Fourth_Block" id="Blocks">
                 <div  className="Screen_View_Row">
                         <div>
                             <img className="Image_Align" style={{marginTop:"10px"}} src={notification}  alt="Notification Icon" />
                         </div>
                          <div  className="Button_Click"  style={{ marginTop:"10px" }} onClick={()=>navigate('/Notification_1')} >Notification</div>
                         <span   className="Arrow_Icon" style={{ marginTop:"10px"}}>{">"}</span>
                 </div>

            <hr  id="Horizontal_Line"></hr>



                 <div  className="Screen_View_Row">
                          <div>
                              <img className="Image_Align"  src={sound}    alt="Hotspot  Icon" />
                         </div>
                         <div   className="Button_Click" onClick={()=>navigate('/Sound_1')} >Sound & Haptics</div>
                         <span  className="Arrow_Icon"  style={{ marginTop:"5px"}}>{">"}</span>
                 </div>


            <hr id="Horizontal_Line"  ></hr>



                   <div  className="Screen_View_Row">
                         <div>
                             <img className="Image_Align"  src={focus}   alt="Hotspot  Icon" />
                         </div>
                         <div  className="Button_Click"  onClick={()=>navigate('/Focus_1')} >Focus</div>
                         <span  className="Arrow_Icon"  style={{ marginTop:"5px"}}>{">"}</span>
                 </div>
     </div>

        <br/>


  {/* 5th block */}

    <div className="Fifth_Block" id="Blocks">


                    <div  className="Screen_View_Row">
                             <div>
                                  <img className="Image_Align"  style={{marginTop:"10px"}} src={general}  alt="General Icon" />
                             </div>
                              <div  className="Button_Click" style={{ marginTop:"10px" }} onClick={()=>navigate('/General_1')} >General</div>
                              <span   className="Arrow_Icon" style={{marginTop:"10px"}}>{">"}</span>
                     </div>


             <hr id="Horizontal_Line" ></hr>


                     <div  className="Screen_View_Row">
                          <div>
                                <img className="Image_Align" src={displayB} alt="Display  Icon" />
                          </div>
                           <div className="Button_Click"  onClick={()=>navigate('/Display_1')} >Display & Brightness</div>
                           <span  className="Arrow_Icon" style={{marginTop:"5px"}}>{">"}</span>
                     </div>
     </div> 

        <br></br> 

</div>
  )
}

export default Setting