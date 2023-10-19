import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'


function AboutPage() {
  const navigate = useNavigate()
  return (
    <div>

        <div className='top'>
        <button  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ General </button> 
        <div className='About_Arrow' style={{color:"white" ,fontSize:"20px"}}>About</div>
        </div>
<br/><br/>



<div id="Blocks"  className='C1'>

   <div className="Screen_View_Row">
        <div className="Button_About_Page"  style={{ marginTop:"10px"  }}>Name  </div>
        <span className='About_Arrow' style={{marginTop:"10px"}}>iPhone</span>
   </div>

   <hr id="Horizontal_Line_General"/>

   <div className="Screen_View_Row">
       
        <div  className="Button_About_Page"  >Software Version  </div>
        <span  className='About_Arrow'>15.7.9</span>
   </div>

   <hr id="Horizontal_Line_General"/>

  <div className="Screen_View_Row">
      
        <div className="Button_About_Page"  >Model Name  </div>
        <span  className='About_Arrow' >iPhone7 </span>
  </div>

  <hr id="Horizontal_Line_General"/>

  <div className="Screen_View_Row">
      
        <div className="Button_About_Page"  >Model Number   </div>
        <span  className='About_Arrow'>MN8Y2HN/A</span>
  </div>

  <hr id="Horizontal_Line_General"/>
  <div className="Screen_View_Row">
       
        <div className="Button_About_Page">Serial Number </div>
        <span className='About_Arrow' >F17SX1A6HG&G</span>
  </div>

</div>

<br/><br/>

<div id="Blocks" className='C2' >

   <div className="Screen_View_Row">
       
        <div  className="Button_About_Page" style={{ marginTop:"10px" }} onClick={()=>navigate('/Coveragepage')} >Coverage Expired </div>
        <span className='About_Arrow'  style={{ marginTop:"10px"}}>{">"}</span>
   </div>

</div>

        <br/>
        <span  style={{color:"gray",fontSize:"12px",marginLeft:"15px"}}>PARTS AND SERVICE HISTORY</span>

  <div id="Blocks"  className='C3' >

    <div className="Screen_View_Row">
         
          <div  className="Button_About_Page" style={{ marginTop:"10px" }} onClick={()=>navigate('/Batterypage')} >Battery </div>
          <span  className='About_Arrow' style={{ marginTop:"10px"}}>{">"}</span>

    </div>

  </div>
  
  <span style={{display:"flex",flexDirection:'column'}}>
  < span style={{color:"gray",fontSize:"12px",marginLeft:"15px"}}>Parts and service history is collected by Apple and <br/>
         shows information on the status and repair details <br/>for your iPhone.<a href="https://support.apple.com/en-in/HT212878?cid=iOS_SettingsUI_iphone_article_HT212878" style={{textDecoration:"none",color:"#007FFF"}}>Learn more...</a></span>
  </span>


  <br/>


  <div id="Blocks" className='C4'>

   <div className="Screen_View_Row">
       

        <div className="Button_About_Page" style={{ marginTop:"5px"  }}  >Network  </div>
        <span className='About_Arrow'  style={{ marginTop:"10px"}}>Vi_India</span>
   </div>

   <hr id="Horizontal_Line_General"/>

   <div className="Screen_View_Row">
       
        <div className="Button_About_Page"  >Songs  </div>
        <span className='About_Arrow'>0</span>
   </div>

   <hr id="Horizontal_Line_General"/>

  <div className="Screen_View_Row">
       
        <div className="Button_About_Page" >Videos  </div>
        <span className='About_Arrow'>63 </span>
  </div>

  <hr id="Horizontal_Line_General"/>

  <div className="Screen_View_Row">
       
        <div className="Button_About_Page" > Photos   </div>
        <span className='About_Arrow'>592</span>
  </div>

  <hr id="Horizontal_Line_General"/>

  <div className="Screen_View_Row">
       
        <div  className="Button_About_Page"  >Applications </div>
        <span  className='About_Arrow'>34</span>
  </div>
  <hr id="Horizontal_Line_General"/>
  <div className="Screen_View_Row">
       
        <div className="Button_About_Page"  >Capacity  </div>
        <span className='About_Arrow' >32GB</span>
  </div>
  <hr id="Horizontal_Line_General"/>
 

  <div className="Screen_View_Row">
       
        <div  className="Button_About_Page">Available </div>
        <span className='About_Arrow'>1.61GB</span>
  </div>

</div>


<br/>



<div id="Blocks" className='C5'>

   <div className="Screen_View_Row">
       
        <div className="Button_About_Page" style={{ marginTop:"5px"  }} >Network Provider </div>
        <span  className='About_Arrow' style={{ marginTop:"10px"}}>Idea50.0</span>
   </div>
 
   <hr id="Horizontal_Line_General"/>

   <div className="Screen_View_Row">
       
        <div className="Button_About_Page"> Wi-Fi Address </div>
        <span className='About_Arrow' >40:4D:7F:B3:E6:45</span>
   </div>

   <hr id="Horizontal_Line_General"/>

  <div className="Screen_View_Row">
        <div className="Button_About_Page"  >Bluetooth  </div>
        <span className='About_Arrow'>40:4D:7F:B3:E6:46</span>
  </div>

  <hr id="Horizontal_Line_General"/>

  <div className="Screen_View_Row">
       
        <div className="Button_About_Page"  >IMEI  </div>
        <span className='About_Arrow' >353778087754524</span>
  </div>

  <hr id="Horizontal_Line_General"/>
  <div className="Screen_View_Row">
        <div className="Button_About_Page" >ICCID</div>
        <span className='About_Arrow' >89910275115008463588</span>
  </div>
  <hr id="Horizontal_Line_General"/>
  <div className="Screen_View_Row">
       
        <div  className="Button_About_Page">Modern Firmware</div>
        <span className='About_Arrow' >6.03.01</span>
  </div>
  <hr id="Horizontal_Line_General"/>
  <div className="Screen_View_Row">
        <div  className="Button_About_Page">SEID</div>
        <span  className='About_Arrow' >00023456040568757</span>
  </div>

  <hr id="Horizontal_Line_General"/>
  <div className="Screen_View_Row">
        <div className="Button_About_Page">Network Provider Lock </div>
        <span className='About_Arrow'>No_SIM_restricti...</span>
  </div>

</div>

  <br/>
       
  <div id="Blocks" className='C6'>

   <div className="Screen_View_Row">

     <div  className="Button_About_Page" style={{ marginTop:"10px" }} onClick={()=>navigate('/Certificatepage')} >Certificate Trust Settings </div>
     <span  className='About_Arrow' style={{ marginTop:"10px"}}>{">"}</span>
      
   </div>    

  </div>
  <br/>
</div>
  )
}

export default AboutPage