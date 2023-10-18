import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Bluetooth_1() {
    const navigate = useNavigate()

    
       const [isBluetoothOn , setBluetoothOn] = useState(false);
       const toggleBluetooth = () => {
       setBluetoothOn(!isBluetoothOn);};

  return (
    <div>

          <div style={{display:"flex" , flexDirection:"row", marginTop:"35px" , alignItems:"flex-start" ,justifyContent:"flex-start" , gap:"25px" } }>
        <button  id="button" onClick={()=>navigate(-1)}> ＜ Settings </button> 
        <div style={{color:"white" ,fontSize:"20px"}}>Bluetooth</div>
        </div>

{/* 
  <div id="Blocks" >
       <div>
             <span>Bluetooth </span>
             <span style={{marginTop:"5px",marginRight:""}}>
                     <label className="switch">
                     <input type="checkbox" onChange={toggleBluetooth} checked={isBluetoothOn} />
                     <span className="slider round"></span>
                     </label>
              </span>

    </div>
   

  </div> */}
        

 <div id="Blocks" style={{height:"40px",marginTop:"25px"}}>

           <div className="Screen_View_Row" >

             <span id="Button_General" style={{marginTop:"10px"}}>
               Bluetooth
             </span>

          <span style={{marginTop:"5px",marginRight:"10px"}}>
         <label className="switch">
         <input type="checkbox" onChange={toggleBluetooth} checked={isBluetoothOn} />
         <span className="slider round"></span>
         </label>
    </span>

  </div >
  

</div>


  <span style={{color:"gray",fontSize:"12px",marginLeft:"15px"}}>Now discoverable as " Aman iPhone"</span>


  <br/><br/>
  <span style={{color:"gray",fontSize:"12px",marginLeft:"15px" }}>MY DEVICES</span>

  <div>

    <div id="Blocks"  className='b2' >

            <div  className="Screen_View_Row">
                    <div  id="Button_General" style={{ marginTop:"10px"}} onClick={()=>navigate('')} >Aman's Airpods  </div>
                      <span   className='Arrow_General' style={{marginTop:"10px"}}>Connected </span>
                
            </div>
            <hr id="Horizontal_Line_General"/>

            <div  className="Screen_View_Row">
             <div   id="Button_General"  onClick={()=>navigate('')} >OnePlus Bullets... </div>
               <span className='Arrow_General' >Not_Connected </span>

            </div>
            <hr id="Horizontal_Line_General"/>

            <div className="Screen_View_Row">
             <div   id="Button_General" onClick={()=>navigate('')} > Aman's Macbook Air </div>
               <span  className='Arrow_General' >Not_Connected</span>

            </div>
            <hr id="Horizontal_Line_General"/>

            <div  className="Screen_View_Row">
             <div  id="Button_General" onClick={()=>navigate('')} >Apple TV  </div>
               <span  className='Arrow_General'>Not_Connected</span>

            </div>
        </div> 

  </div>


       <br/>

       <span style={{color:"gray",fontSize:"12px",marginLeft:"15px" }}>OTHER DEVICES ⊙</span>


  <div id="Blocks"  className='b1' >

      <div  className="Screen_View_Row">
                  <div  id="Button_General" style={{ marginTop:"10px"}} onClick={()=>navigate('')} >Aman's Airpods  </div>
      </div>

    <hr id="Horizontal_Line_General"/>

      <div  className="Screen_View_Row">
                  <div   id="Button_General"  onClick={()=>navigate('')} >OnePlus Bullets... </div>        
      </div> 
  </div> 
  <br></br>

<div className='Screen_View_Row'  >
       <span style={{color:"gray",fontSize:"12px",marginLeft:"15px" }}>To pair an Apple Watch with your iPhone ,
             go to the<br/><a href=" https://support.apple.com/en-in/HT204784" style={{textDecoration:"none",color:"#007FFF"}}  >Apple Watch app.</a>
       </span>
</div>
  

                   
</div>
  )
}

export default Bluetooth_1