import { useState } from "react"
const Name=(props)=>{
    const [uname, setUname]=useState("Amrutha")

    const handlechange=(e)=>{
        setUname("react")

 
    }
    
    return(
        <div>
            <h1>{uname}</h1>
            {/* <input type="text" onChange={(e)=>handlechange(e)}/> */}
            <button onClick={(e)=>handlechange(e)}>change</button>
        </div>
    )
}
export default Name