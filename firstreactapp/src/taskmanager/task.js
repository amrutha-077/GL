import React from "react"
import Complete from "./compelete"
import Pending from "./pending"
import Bin from "./bin"
import './pending.css'

class Task extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data
        }
    }
    

    /*     to display the completed items in complete compoent*/
    getCompletedItems=()=>{
       const result= this.state.tasks.filter((item)=>item.completion===true&&item.deletion===false)
       return result
    }

    /*     to display the pending items in pending items*/
    getPendingItems=()=>{
        const result= this.state.tasks.filter((item)=>item.completion===false&&item.deletion===false)
        return result
     }

     /*     to display the deleted items in bin compoent*/
     getDeletedTask=()=>{
        const result= this.state.tasks.filter((item)=>item.deletion===true)
        return result
     }

     /*     to do not display the pushed  items */ 
     changeCompletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.completion=!obj.completion
        this.setState({tasks:temp})
        
     }

      /*     to  not display the deleted items */
     changeDeletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
     }
   
    /*     to  not display the restore items */
     changeRestoreStatus=(itemaid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
     }

    render(){
         console.log(" parent render")
        return( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Welcome User </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link " href="add.html" >Login</a> 
                  </div>
                </div>
            </nav>
        
           
            <div >
                <h1>Task Manager</h1>     
                <Pending pendingTask={this.getPendingItems()} changeCompletion={this.changeCompletionStatus} deleteTask={this.changeDeletionStatus} ></Pending>
                <Complete completedTask={this.getCompletedItems()} changeCompletion={this.changeCompletionStatus} deleteTask={this.changeDeletionStatus}></Complete>
                <Bin deletedTask={this.getDeletedTask()} restoreTask={this.changeRestoreStatus}></Bin>
            </div>  


        </div>     
        )
    }
}
export default Task