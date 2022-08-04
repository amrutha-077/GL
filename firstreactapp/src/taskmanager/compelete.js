import React from "react";
import _isEqual from 'lodash/isEqual'
import './pending.css';
class Complete extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(_isEqual(nextProps.deletedTask,this.props.completedTask)){
            return false
        }
        else{
            return true
        }
    }
    render(){
        console.log(" complete render")
        const {completedTask,changeCompletion,deleteTask}=this.props
        return(
            <div>
                <div className="container">
                    <div className="row">
                <h2>Completed Tasks</h2>
                {
                    completedTask.map((item)=>(
                        <div className="card">
                             <div className="card-body">
                            <h3>{item.taskname}</h3>
                            <p>{item.taskdesc}</p>
                            <button  className='btn1' onClick={()=>changeCompletion(item.id)}>mark incomplete</button>
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
export default Complete