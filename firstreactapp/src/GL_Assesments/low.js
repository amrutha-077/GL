import React from "react";

class Low extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {lowtask,donetask}=this.props
        return(
            <div>
            <div className="container">
                <div className="row">
                    {/* <h1>low</h1> */}
           
            {
             /*this will diplay all the lower priority ticket data */   
                lowtask.map((item)=>(
                    /*here  used inline style to give different different colors for every priority */
                    <div className="card" style={ item.priority===1 ? {backgroundColor: "yellow"}:item.priority===2 ? {backgroundColor: "orange"}:{}}>
                        <div className="card-body">
                        <h5>{item.timestamp}</h5>
                        <p>{item.priority}</p>
                        <p>{item. descryption}</p>
                        <p>{item. status}</p>
                        <p>{item.summary}</p>
                        <button className='btn1'onClick={()=>donetask(item.id)}>close ticket</button> 
                        {/* <button className='btn1' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                        <button className='btn1'onClick={()=>deleteTask(item.id)}>move to trash</button> */}
                    </div>
                    </div>
                ))
               
            }
            </div>
            </div>
        </div>
        )
    }
}

export default Low