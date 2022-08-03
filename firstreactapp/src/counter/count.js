
import React from 'react';
import './count.css';

export class Count extends React.Component 
 {
    
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }

    add = () => {
        this.setState({ count : this.state.count + 1})
    }

    sub = () => {
        this.setState({count : this.state.count - 1 })
    }

    render() { 
        return ( 
            
            <div className='container'>
                <div className='row'>
                <div className='card' style={{width: "35%"}}>
                    <div className='card-title'>Counter App</div>
                <span className="counter">
                    {this.state.count}
                </span>
                <button className="counter-button" onClick={this.add}>+</button>
                <button className="counter-button" onClick={this.sub}> - </button>
                </div>
                </div>
                
            </div>
         )
    }
}
 

