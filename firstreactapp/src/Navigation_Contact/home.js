import React from "react";
import axios from "axios";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './home.css'
const Home=()=>{
    const [contact,setContact]=useState([])
   

    useEffect(()=>{
        axios.get(`http://localhost:3001/empDetails/`).then((res)=>setContact(res.data.reverse())).catch((err)=>console.log(err))
        
    },[])


    const handledelete=(e,itemid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>this.setContact(res.data),window.location.reload()).catch((err)=>console.log(err))
        axios.get('http://localhost:3001/empDetails').then((res)=>this.setContact(res.data)).catch((err)=>console.log(err))
        alert("Are you Sure, You Want to Delete this Permanently")
    }


    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                {
                    contact.map((item)=>(
                        <div className="card">
                            <h2>{item.fname}</h2>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <button className="btn1" onClick={(e)=>handledelete(e,item.id)}>Delete</button>
                            <Link to={`/edit/${item.id}`}><button className="btn1">Edit</button></Link>
                            <Link to={`/user/${item.id}`}><button className="btn1">View</button></Link>
                        </div>
                    ))
                }
                </div>
             </div>

        </div>
    )
}

export default Home