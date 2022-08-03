import React from "react";
import clothing from './cdata';
import FilterProductsClothing from "./cloth";
// import FilterProductsElectronic from './electronic'

function Comp(){
    const prod=<FilterProductsClothing data={clothing} storename="Clothing Store"></FilterProductsClothing>
    return(
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Welcome User </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link " href= {prod}>Cart</a>
                    
                  </div>
                </div>
              </nav>
          </div>
    )
}
export default Comp