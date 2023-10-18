import React from 'react'
import { useNavigate } from 'react-router-dom'


function General_1() {
    const navigate = useNavigate()
  return (

<div>
        
        <div style={{display:"flex" , flexDirection:"row", marginTop:"35px" , alignItems:"flex-start" ,justifyContent:"flex-start" , gap:"25px" } }>
        <button id="button" onClick={()=>navigate(-1)}> ＜ Settings </button> 
        <div style={{color:"white" ,fontSize:"20px"}}>General</div>
        </div>

<br/>
<br/>
        <div id="Blocks" className='b1'>

                <div  id="Screen_View_Row">
                    <div  id="Button_General" style={{marginTop:"10px"  }} onClick={()=>navigate('/AboutPage')} >About</div>
                      <span className='Arrow_General' style={{marginTop:"10px"}}>{">"}</span>
                </div>
              

                    <hr id="Horizontal_Line_General"/>
                    


                <div id="Screen_View_Row">
                      <div  id="Button_General"  onClick={()=>navigate("/SoftwarePage")} >Software Update   </div>
                      <span  className='Arrow_General'>{">"}</span>
                     
                </div>
        </div>

    <br/>
    <br/>
        <div id="Blocks"  className='b2' >

            <div  id="Screen_View_Row">
                    <div  id="Button_General" style={{ marginTop:"10px"}} onClick={()=>navigate('')} >AirDrop   </div>
                      <span   className='Arrow_General' style={{marginTop:"10px"}}>{">"}</span>
                
            </div>
            <hr id="Horizontal_Line_General"/>

            <div  id="Screen_View_Row">
             <div   id="Button_General"  onClick={()=>navigate('')} >Airplay & Handoff  </div>
               <span  className='Arrow_General' >{">"}</span>

            </div>
            <hr id="Horizontal_Line_General"/>

            <div id="Screen_View_Row">
             <div   id="Button_General" onClick={()=>navigate('')} >Picture in Picture   </div>
               <span  className='Arrow_General' >{">"}</span>

            </div>
            <hr id="Horizontal_Line_General"/>

            <div  id="Screen_View_Row">
             <div  id="Button_General" onClick={()=>navigate('')} >CarPlay  </div>
               <span  className='Arrow_General'>{">"}</span>

            </div>
        </div>

        <br/>
        <br/>
        
<div id="Blocks" className='b3'>
        <div id="Screen_View_Row">
         <div   id="Button_General" style={{  marginTop:"5px", }} onClick={()=>navigate('')} >Home Button </div>
           <span  className='Arrow_General'  style={{marginTop:"5px" }}>{">"}</span>

        </div>
</div>

<br/>
<br/>

     <div  id="Blocks" className='b4'>

        <div id="Screen_View_Row">

             <div  id="Button_General"  style={{ marginTop:"5px"}} onClick={()=>navigate('')} >iPhone Storage </div>
             <span  className='Arrow_General'  style={{marginTop:"5px" }}>{">"}</span>
        </div>

      <hr id="Horizontal_Line_General"/>

        <div id="Screen_View_Row">

            <div   id="Button_General"  onClick={()=>navigate('')} >Background App Refresh </div>
            <span   className='Arrow_General'>{">"}</span>
        </div>

    </div>

<br/><br/>

     <div id="Blocks"  className='b5'>


        <div id="Screen_View_Row">
             <div  id="Button_General"  style={{ marginTop:"10px" }} onClick={()=>navigate('')} >Date & Time </div>
             <span   className='Arrow_General' style={{marginTop:"10px" }}>{">"}</span>
        </div>

     <hr id="Horizontal_Line_General"/>
       
        <div id="Screen_View_Row">
             <div  id="Button_General" onClick={()=>navigate('')} >Keyboard  </div>
             <span   className='Arrow_General'>{">"}</span>

        </div>

     <hr id="Horizontal_Line_General"/>

        <div id="Screen_View_Row">
             <div   id="Button_General"  onClick={()=>navigate('')} >Fonts  </div>
             <span   className='Arrow_General'>{">"}</span>

        </div>

     <hr id="Horizontal_Line_General"/>

            <div id="Screen_View_Row">
            <div   id="Button_General" onClick={()=>navigate('')} >Language & Region  </div>
           <span  className='Arrow_General'> {">"}</span>

        </div>

     <hr id="Horizontal_Line_General"/>

           <div id="Screen_View_Row">
           <div  id="Button_General" onClick={()=>navigate('')} >Dictionary </div>
           <span className='Arrow_General'>{">"}</span>

        </div>
        
     </div>   
       <br/>
</div>



  )
}

export default General_1