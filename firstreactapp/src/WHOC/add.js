import React from 'react';


class Add extends React.Component 
 {
    render(){
        return(
            <div>
            
            <button type="button" onClick={handleAdd}></button>
            {
                 <ul>
                 {data.map((item) => (
                   <li key={item.id}>{item.name}</li>
                 ))}
               </ul>
            }
            
            </div>

        )
        

    }

 } 

 export default Add