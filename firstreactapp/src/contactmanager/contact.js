import React from "react"
import axios from 'axios'
import './contact.css';
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            update:false,
            uid:-1,
            results:[],
            statusText:''
        }
    }

    componentDidMount=()=>{
        axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
      }
    


    handleContact=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/empDetails',{
                id:Date.now(),
                fname:this.state.ipUser,
                phone:this.state.ipPhone,
                email:this.state.ipEmail,
                
            
        }).then((res)=>{return res.json()}).then((res)=>this.setState({results:res}),window.location.reload()).catch((err)=>console.log(err))
        
        
    }

    deleteUser=(e,itemid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>this.setState({statusText:"deleted"})).catch((err)=>console.log(err))
        axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }


   handleChange=(e,key)=>{
    if(key==='uname')
    this.setState({ipUser:e.target.value})
    if(key==='phone')
    this.setState({ipPhone:e.target.value})
    if(key==='email')
    this.setState({ipEmail:e.target.value})
      
   }
//    toggleUpdate=()=>{
//     this.setState({update:!this.state.update})
//    }
//     setUpdateMsg=(e,itemid)=>{
//         e.preventDefault()
//         this.toggleUpdate()   
//         this.setState({uid:itemid})
//     }
//     handleUpdate=(e)=>{
//         e.preventDefault()
//         let temp=[...this.state.contactinfo]
//         let obj=temp.find((item)=>item.id===this.state.uid)
//         obj.fname=this.state.ipUser
//         this.setState({contactinfo:temp})
//         this.setState({uid:-1})
//         this.toggleUpdate()
//     }
setUpdateMsg=(e,itemid)=>{
    e.preventDefault()
    // this.toggleUpdate()  
    
    // this.setState({update:!this.state.update})
    this.setState({update:true})
    this.setState({uid:itemid})
    let temp=[...this.state.contactinfo] 
    let obj=temp.find((item)=>item.id===itemid)
    console.log("itemid",itemid,obj);
    this.setState({ipUser:obj.fname})
    this.setState({ipPhone:obj.phone})
    this.setState({ipEmail:obj.email})
    this.setState({ipCity:obj.city})
    // this.setState({ipAddress:obj.address})
    
    // console.log(this.state.uid);
}
// handleUpdate=(e)=>{
//     e.preventDefault()
//     axios.put(`http://localhost:3001/empDetails/${itemid}`,{
//         fname:this.state.ipUser,
//         phone:this.state.ipPhone,
//         email:this.state.ipEmail,
        
//     })
//     .then((res)=>{ console.log(res);}).catch((err)=>{console.log(err) })
//     this.setState({update:false});
//     this.setState({ipUser:""})
//     this.setState({ipPhone:""})
//     this.setState({ipEmail:""})
    
// }
    
    render(){
        return(
            <div className="container-fluid">
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
              


                {
                this.state.update?<h1>Enter your new values</h1>:<h1></h1>
                }
                     
                <form className="form">
                    <h5><u>Fill the details!</u></h5>
                Username:<input type='text'  onChange={(e)=>this.handleChange(e,'uname')} 
                    value={this.state.ipUser}></input>
                Phone:<input type='text' onChange={(e)=>this.handleChange(e,'phone')}
                    value={this.state.ipPhone}></input>
                Email:<input type='text'  onChange={(e)=>this.handleChange(e,'email')}
                    value={this.state.ipEmail}></input>
                
                {
                   this.state.update?<button onClick={(e)=>this.handleUpdate(e)}>update contact</button>:<button onClick={(e)=>this.handleContact(e)}>add contact</button>
                }
                </form>
                <br></br>
                
             &nbsp;
    
             <hr></hr>
             <h3>Contact Details</h3>
            <div className="container">
            <div className="row">

            {
                this.state.results.map((item)=>(
                    <div className="card hover-shadow cursor">
                    <div class="card-body ">
                        <h2>{item.fname}</h2>
                        <p>{item.phone}<p>
                        </p>{item.email}</p>
                        <button onClick={(e)=>this.deleteUser(e,item.id)}>delete</button>
                        <button onClick={(e)=>this.setUpdateMsg(e,item.id)}>update</button>
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
export default Contact 