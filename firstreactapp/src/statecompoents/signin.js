import React from 'react';
import './signin.css'

export class Signin extends React.Component
{
    render(){
        return(
            
            <div className='container'>
                    <div className="card" >
                         <h4 className="card-title ">Sign-in</h4>
                             <form className='add'>
                                Name:<input type="text" />
                                Email:<input type="text" />
                                Phone:<input type="text" />
                                <button className='btn' onClick={this.props.toggleFun}>Login</button>
                            </form>
                     </div>
            </div>
        )
    }
}

