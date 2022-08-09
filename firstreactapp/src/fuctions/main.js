import  { useState } from 'react';
const Main=(props)=>{
    const [count,setCount]=useState(0)
    return(
        <div>
           <button onClick={() => setCount(count + 1)}>plus</button> 
            {count}
           <button onClick={() => setCount(count - 1)}>minus</button>
        </div>
    )
}

export default Main