import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Data_1() {
    const navigate = useNavigate()


    const [isMobileDataOn , setMobileDataOn ] = useState(false);
            const togglMobileData =() =>{
            setMobileDataOn(!isMobileDataOn);};
  return (
    <div>
      
         
        <div className="top" >


                <button button  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ Setting  </button> 
                 <div style={{color:"white" ,fontSize:"17px" , marginLeft:"4px"}}>Mobile Data</div>

        </div> 

<br/><br/>
      

<div id="Blocks" style={{height:"120px",marginTop:"25px"}}>

             <div className="Screen_View_Row" >

                        <span id="Button_General" style={{marginTop:"10px"}}> Mobile Data </span>

                        <span style={{marginTop:"5px",marginRight:"10px"}}>
                        <label className="switch">
                        <input type="checkbox" onChange={togglMobileData} checked={isMobileDataOn} />
                         <span className="slider round"></span>
                        </label>
                        </span>
       
              </div >
  
   <hr id="Horizontal_Line_General"  style={{marginTop:"10px"}}/>  

                 <div className="Screen_View_Row" onClick={()=>navigate("/MobiledataOption")}>

                        <span id="Button_General" onClick={()=>navigate("/MobiledataOption")}> Mobile Data Option  </span>
                        <div style={{marginRight:"10px"}}> Roming </div>
                        <span className='Arrow_General' > {">"}</span>
    
              </div>



   <hr id="Horizontal_Line_General"  style={{marginTop:"10px"}}/>  


             

                       <div className="Screen_View_Row" onClick={()=>navigate("/Hotspot_1")}>

                        <span id="Button_General"> Personal Hotspot   </span>
                        <div style={{marginRight:"10px"}}> On  </div>
                        <span className='Arrow_General' > {">"}</span>
    
              </div>


</div>


      <span className='paragraph' >
        Turn off mobile data to restrict all data to Wi-Fi, <br/> including email, web browsing and push notifications.
      </span>
      <br/>
      <span className='paragraph'>
        IDEA
      </span>





  <div id="Blocks"  style={{marginTop:"5px" , height:"230px"}}> 

      <div className='Screen_View_Row'>
             <div className="Button_Click"  style={{marginTop:"12px"}} onClick={()=>navigate('/NetworkSelection')} >Network Selection </div>
            <div className=" ThreeInRow" onClick={()=>navigate('/NetworkSelection')}> Vi</div>
            <span  className=" ThreeInRow">{">"}</span>
           
          </div>


            <hr id="Horizontal_Line_General"/>


           

                 <div className="Screen_View_Row" onClick={()=>navigate("/CallingWifi")}>

                        <span id="Button_General"> Wi-Fi Calling   </span>
                        <div  style={{marginRight:"10px"}} onClick={()=>navigate('/CallingWifi')}> Off </div>
                        <span className='Arrow_General' > {">"}</span>
    
              </div>
            
           
       <hr id="Horizontal_Line_General"/>




              <div className="Screen_View_Row" onClick={()=>navigate("/CallsDevices")}>

                        <span id="Button_General"> Calls on other Devices   </span>
                        <div  style={{marginRight:"10px"}} onClick={()=>navigate("/CallsDevices")}>  Nearby </div>
                        <span className='Arrow_General' > {">"}</span>

              </div>


      <hr id="Horizontal_Line_General"/>


                 <span> <a href="https://www.myvi.in/"  style={{textDecoration:"none",color:"#007FFF" , fontSize:"15px" , marginLeft:"18px"}}  > Network Provider Services </a></span>


      <hr id="Horizontal_Line_General"/>
            
        
               <div className="Screen_View_Row" onClick={()=>navigate("")}>

                          <span id="Button_General"> SIM PIN   </span>
                          <span className='Arrow_General' > {">"}</span>     

                </div>


       <hr id="Horizontal_Line_General"/>



                <div className="Screen_View_Row" onClick={()=>navigate("/SimApplication")}>

                         <span id="Button_General"  onClick={()=>navigate("/SimApplication")}> SIM Applications  </span>
                         <span className='Arrow_General' > {">"}</span>



                </div>




          

  </div>
  
        
 
   
</div>
     
  )
}

export default Data_1
    