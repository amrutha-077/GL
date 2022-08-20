import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const User=()=>{
    const [user,setUser]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3001/empDetails/${id}`).then((res)=>setUser(res.data)).catch((err)=>console.log(err))
        
    },[]);

    return(
        <div>
        <div className="container-fluid">
            <div className="row">
            {
                
                    <div className="card">
                        <h2>{user.fname}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                
            }
            </div>
         </div>

    </div>
    )
}

export default User