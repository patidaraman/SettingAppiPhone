import React from 'react'
import aman from '../images/aman.jpg'
import { useNavigate } from 'react-router-dom'

function Profile_1() {
    const navigate = useNavigate()


return (
  <div>



       <div className="top" >


                <button  style={{fontSize:"19px"}} id="button" onClick={()=>navigate(-1)}> ＜ Setting  </button> 
                <div style={{color:"white" ,fontSize:"17px" , marginLeft:"14px"}}>Apple ID</div>
       
      </div>

      <div className='profileview'>
       
       <span >
       <img src={aman} width={70} height={70}  className="profile_icon" alt="Profile Icon" />  
       </span>
       <div style={{marginTop:"20px"}}>
       <span style={{marginLeft:"50px" , fontSize:"20px"}}>Aman Patidar</span><br/>
       <span style={{color:"gray"}}>amanpatidar0681@gmail.com</span>
       </div>
       
    
       
      </div>

<br/><br/>

    <div id="Blocks" style={{height:"180px"}}>

    <div className="Screen_View_Row">
        <div className="Button_About_Page"  style={{ marginTop:"10px"  }}>Name, Phone Numbers, Email </div>
        <span className='About_Arrow' style={{marginTop:"10px"}}>{">"}</span>
   </div>

   <hr  id="Horizontal_Line_General" />

   <div className="Screen_View_Row">
        <div className="Button_About_Page"  style={{ marginTop:"10px"  }}>Password & Security  </div>
        <span className='About_Arrow' style={{marginTop:"10px"}}>{">"}</span>
   </div>

   <hr  id="Horizontal_Line_General" />

   <div className="Screen_View_Row">
        <div className="Button_About_Page"  style={{ marginTop:"10px"  }}>Payment & Shipping </div>
        <span className='About_Arrow' style={{marginTop:"10px"}}>{">"}</span>
   </div>
   <hr  id="Horizontal_Line_General" />


   <div className="Screen_View_Row">
        <div className="Button_About_Page"  style={{ marginTop:"10px"  }}>Subscription </div>
        <span className='About_Arrow' style={{marginTop:"10px"}}>{">"}</span>
   </div>


   




    </div>



    <br/>

    <div id="Blocks" className='b5'>

    </div>

    
</div>
  )
}

export default Profile_1