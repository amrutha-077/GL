import React from 'react';
import { Signin } from './signin';
import {Dash} from './dash';


export class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            login:false,uname:"amrutha"
        }
    }
   
    toggleUser=()=>{
        this.setState({login:!(this.state.login)})
    }

    render()
    {
        return(
            <div>
         {
    
            this.state.login?<>
            <Dash data={this.state.uname} toggleFun={this.toggleUser}></Dash>
            
            </>:<>
                <Signin  toggleFun={this.toggleUser}></Signin>
                </>
         } 
            </div>
        )
    }
}