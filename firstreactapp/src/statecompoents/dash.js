import React from 'react';
import './dash.css'



export class Dash extends React.Component
{
    render(){
        return(
            <div >
                
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Welcome </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link " href="add.html" style={{marginLeft:"60%"}}>About</a>
                    
                  </div>
                </div>
              </nav>

              
              <button onClick={this.props.toggleFun}>Logout</button>
                   
          </div>
        )
    }
}

