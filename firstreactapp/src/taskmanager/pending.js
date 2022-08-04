import React from "react";
import _isEqual from 'lodash/isEqual'
import './pending.css'
class Pending extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(" pending render")
        const {pendingTask,changeCompletion,deleteTask}=this.props
        return(
            <div>
                <div className="container">
                    <div className="row">
                <h2>Pending Tasks</h2>
                {
                    
                    pendingTask.map((item)=>(
                        <div className="card">
                            <div className="card-body">
                            <h3>{item.taskname}</h3>
                            <p>{item.taskdesc}</p>
                            <button className='btn1' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                            <button className='btn1'onClick={()=>deleteTask(item.id)}>move to trash</button>
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
export default Pending