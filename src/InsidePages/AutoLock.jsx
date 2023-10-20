import { collapseClasses, colors } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function AutoLock() {

    const navigate = useNavigate()
  return (


    <div >

    <div className='top'>
<div id="button" onClick={()=>navigate(-1)}> ＜ Settings </div> 
<div style={{color:"white"}}>Auto-Lock</div>
</div>


<div>
    
</div>

    <div >

<form action="#">

      <select name="languages" id="lang">
        <option value="javascript">30 Second</option>
       
        <option value="java">1 minute</option>
        <option value="golang">2 minute</option>
        <option value="python">3 minute</option>
        <option value="c#">4 minute</option>
        <option value="C++">5 minute</option>
        <option value="erlang">Never</option>
      </select>
      
</form>

       
    </div>
    </div>
  )
}

export default AutoLock