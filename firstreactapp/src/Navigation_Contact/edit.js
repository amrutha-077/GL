import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit=()=>{
    const [edit,setEdit]=useState([])
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState()
    const {id}=useParams()

   

    useEffect(()=>{
        axios.get(`http://localhost:3001/empDetails/${id}`).then((res)=>setEdit(res.data)).catch((err)=>console.log(err))
        console.log(edit)
        setName(edit.fname)
        setEmail(edit.email)
        setPhone(edit.phone)
        
        
    },[edit.fname,edit.email,edit.phone]);

    const handleupdate=(e)=>{
        e.preventDefault()
        const obj={
        id:Date.now(),
        fname:name,
        email:email,
        phone:phone
        }
     axios.put(`http://localhost:3001/empDetails/${id}`,obj).then((res)=>setEdit(res.data),window.location.reload()).catch((err)=>console.log(err))
     alert("Succesfully Updated!") 
     
    }

   
    

    return(
        <div>
           
            <div className="form">
                Username<input type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input>
                {/* {console.log(name)} */}
                Email  <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                Phone No.  <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                <button onClick={(e)=>handleupdate(e)}>Update</button>
          </div>

        </div>
    )
}

export default Edit