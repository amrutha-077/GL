import React from "react"
import High from "./high"
import Low from "./low"
import Close from './close'

import './whole.css'

class Comp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comp:this.props.data,
            
        }
    }

       /*to display high priority */
    gethigh=()=>{
        const result= this.state.comp.filter((item)=>item.priority>=3&&item.status===true)
        return result
     }

     /*to display low priority */
     getlow=()=>{
        const result= this.state.comp.filter((item)=>item.priority<3&&item.status===true)
        return result
     }

     /*it will display the items which status is false */
     getclose=()=>{
        const result= this.state.comp.filter((item)=>item.status===false)
        return result
     } 

    /*if we click on close it will move to close ticket */
     donetask=(itemid)=>{
        const temp=[...this.state.comp]
        const obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({comp:temp})
     }

    


    /*if we click on cre-open it will move to open ticket */
    closetask=(itemid)=>{
        const temp=[...this.state.comp]
        const obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({comp:temp})
     }

     

     render(){
        console.log(this.state.comp.id)
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
                <High hightask={this.gethigh()} donetask={this.donetask}></High>
                <Low lowtask={this.getlow()} donetask={this.donetask}></Low>
                <Close donetask={this.getclose()} closetask={this.closetask}></Close>
            </div>
        )
     }
}

export default Comp