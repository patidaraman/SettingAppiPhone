import React from 'react'
import { useNavigate } from 'react-router-dom'

function Bluetooth_1() {
    const navigate = useNavigate()
  return (
    <div>
         <button id="button" onClick={()=>navigate(-1)}> <p id="setting_button">＜ Settings</p> </button> 
        <div id="bluetooth_page">
                    Bluetooth 
                   
                   <br/>
                    <div className='blue_tooth'>
                        Bluetooth 
                    </div>
                    <p className='text'> New discoverable as "iPhone"</p>
                    <p className='text'>MY DEVICES</p>
                  
                    <div className='bluetooth_network'>
                          <button className='bluetooth_button'> Noise Pro 3 Alpha...          Not Connected ⓘ</button>
                          <button className='bluetooth_button'> Noise Pro 3   Not Connected ⓘ</button>
                          <button className='bluetooth_button'> Stone 190       Not Connected ⓘ</button>
                          <button className='bluetooth_button'> OnePlus Bullets...    Not Connected ⓘ</button>
                    </div>
        </div>
            
       

       
        </div>
  )
}

export default Bluetooth_1