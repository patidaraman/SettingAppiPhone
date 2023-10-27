import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dnd from '../images/dnd.png'
import aman from '../images/aman.jpg'

function DND() {
    const navigate=useNavigate()
    const [isDNDOn, setDNDOn] = useState(false);
    const toggleDND = () => {
             setDNDOn(!isDNDOn);  
            //  sendAirplaneToServer(!isAirplaneModeOn);          
             };




  return (
    <div>
         <div className='top'>
        <div  id="button" onClick={()=>navigate(-1)}> ＜ Fouus  </div> 
        <div style={{color:"white" ,fontSize:"18px"}}>Do Not Disturb</div>
        </div>
        
        <br/>


        <div style={{height:"48px"}} id="Blocks">

                <div  className="Screen_View_Row" >
 
                     <div style={{marginTop:"10px"}}>
                     <img className="Image_Align" src={dnd} width={30} height={30}  alt="Airplane Mode Icon" />
                     </div>
                   
                     <div style={{marginTop:"10px"}}>
                     <span  className='Name'> Do Not Disturb </span>
                     </div>
                    

                    <div style={{marginTop:"10px", marginRight:"5px"}}>
                    <label className="switch">
                         <input type="checkbox" onChange={toggleDND} checked={isDNDOn} />
                         <span className="slider round"></span>
                    </label>
                    </div>
                   
          </div>
        
        </div>
   <br/>

   <div className='paragraph'> ALLOWED NOTIFICATION</div>



      <div  style={{height:"90px" , marginTop:"5px"}} id="Blocks">
            <div className='Screen_View_Row' >

                 <div style={{display:"flex" , flexDirection:"column",alignItems:"flex-start"}}>
                      <div   
                              style={{color:"gray" , marginTop:"10px", marginLeft:"35px"}}>People {">"}
                      </div>
                      <div> 
                        <img  src={aman} width={40} height={40} style={{borderRadius:"20px",marginLeft:"45px" , marginTop:"5px"}}></img>
                      </div>

            </div>
                  <hr style={{marginRight:"40px" , color:"gray"}}></hr>


                <div style={{display:"flex" , flexDirection:"column",alignItems:"flex-start"}}>
                <div
                     style={{ marginTop:"10px" , marginRight:"100px"}}>Apps{">"}
                </div>
                     <div  style={{color:"gray",marginTop:"10px"}}>None Allowed
                </div>

           </div>
       </div>
   </div>

<div className='paragraph'> Allow calls and notification from people , apps and <br/> those marked as 
Time Sensitive when this Focus is <br/>on.</div>

<br/>
<div className='paragraph'> OPTIONS</div>




<div style={{height:"135px"}} id="Blocks">


<div  className="Screen_View_Row">
      <div  style={{marginLeft:"10px" , marginTop:"10px"}}>
      🌙 
          
      </div>
      <div className="Button_Click"  onClick={()=>navigate('/DND')}  style={{marginTop:"10px"}}> Focus Status</div>
      <span className="Arrow_Icon" style={{ marginTop:"10px"}}>{">"}</span>
</div>


<hr ></hr>

<div  className="Screen_View_Row">
     <div  style={{marginLeft:"10px" , marginTop:"10px"}}>
        📱
        
     </div>

     <div  className="Button_Click"  onClick={()=>navigate('/Bluetooth_1')} >Home Screen </div>
    <span className="Arrow_Icon" style={{ marginTop:"5px"}}>{" >"}</span>
</div>

<hr ></hr>


<div  className="Screen_View_Row">
    <div  style={{marginLeft:"10px" , marginTop:"10px" }}>
        📲
        
    </div>

    <div className="Button_Click"  onClick={()=>navigate('/Data_1')} >Lock Screen</div>
    <span   className="Arrow_Icon" style={{ marginTop:"5px"}}>{">"}</span>
</div>



      



</div>




  </div>
  )
}

export default DND