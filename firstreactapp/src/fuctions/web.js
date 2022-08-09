import React from 'react';
import { useState } from 'react';
import './web.css'


const Web=()=>
{
    const [login,setLogin]=useState("Welcome Back!")
    const [logout,setLogout]=useState("You have been Logged out!")
    const [show,setShow]=useState(true)

    
    return(
        
        <div className='card'>
           
            {
                     show?
                     <><h1>{login}</h1>
                     </>:<><h1>{logout}</h1></>
                    
            }
            <button className="btn1" onClick={()=>setShow(true)}>Login</button>
            <button  className="btn1" onClick={()=>setShow(false)}>Logout</button>
           
          
        </div>

    )
}
export default Web

