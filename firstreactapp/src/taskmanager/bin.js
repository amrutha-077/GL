import React from "react";
import _isEqual from 'lodash/isEqual'
import './pending.css';
class Bin extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(_isEqual(nextProps.deletedTask,this.props.deletedTask)){
            return false
        }
        else{
            return true
        }
    }
    render(){
        console.log(" bin render")
        const {deletedTask,restoreTask}=this.props
        return(
            <div>
                <div className="container">
                    <div className="row">
                <h2>Deleted Tasks</h2>
                {
                    deletedTask.map((item)=>(
                        <div className="card">
                             <div className="card-body">
                            <h3>{item.taskname}</h3>
                            <p>{item.taskdesc}</p>
                            <button className='btn1' onClick={()=>restoreTask(item.id)}>restore</button>
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
export default Bin