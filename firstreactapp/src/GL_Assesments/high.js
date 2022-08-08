import React from "react";

class High extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       
        const {hightask,donetask}=this.props
        return(
            <div>
            <div className="container">
                <div className="row">
                    <h2>Opened tickets</h2>
           
            {
                /*this will diplay all the higer priority ticket data */
                hightask.map((item)=>(
                    /*here  used inline style to give different different colors for every priority */
                    <div className="card"  style={ item.priority===5 ? {backgroundColor: "blue"}:item.priority===4 ? {backgroundColor: "red"}:item.priority===3 ? {backgroundColor: "green"}:{}}>
                        <div className="card-body">
                        <h5>{item.timestamp}</h5>
                        <p>{item.priority}</p>
                        <p>{item. descryption}</p>
                        <p>{item. status}</p>
                        <p>{item.summary}</p>
                        {/* {/* <button className='btn1' onClick={()=>changeCompletion(item.id)}>mark completed</button> */}
                        <button className='btn1'onClick={()=>donetask(item.id)}>close ticket</button> 
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

export default High