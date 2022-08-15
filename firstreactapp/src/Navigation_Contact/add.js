import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import './add_edit.css';
const Add=()=>{
    const [add,setAdd]=useState([])
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState()

     


  const handlesubmit=(e)=>{
    e.preventDefault()
    const obj={
      id:Date.now(),
      fname:name,
      email:email,
      phone:phone
  }
  axios.post("http://localhost:3001/empDetails",obj).then((res)=>setAdd(res.data),window.location.reload()).catch((err)=>console.log(err))  
  alert("Succesfully Added!")  
  }
 


    return(
        <div>
          <div className="form">
            Username<input type='text' placeholder="Enter User Name" value={name} onChange={(e)=>setName(e.target.value)} ></input>
            {console.log(setName)}
            Email  <input type='text' placeholder="Enter Email Id" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            Phone No.  <input type='text' placeholder="Enter Phone No." value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            <button onClick={(e)=>handlesubmit(e)}>Add</button>
          </div>
        </div>
    )
}

export default Add