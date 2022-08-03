import React from "react";
import hoc from "./hoc";
class FilterProductsElectronic extends React.Component{
render(){
    const {result,handleChange,handleSearch}=this.props
    return(
        <div>
            
            <h1>Electronic store</h1>
            <form>
           <input type='text' placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
        </form>
        {
                    result.map((item)=>(
                            <div className="card hover-shadow cursor">
                                <div class="card-body ">
                                    <img className="im" src={item.image}/>
                                    <h2>{item.pName}</h2>
                                    <p>Price:{item.price}</p>
                                    <p>Manufacturer:{item.manufacturer}</p>
                                    <p>Delivery:{item.expectedDelivery}</p>
                                    <a href="https://www.amazon.in/s?k=earbuds&crid=26P3L83A2FMZL&sprefix=earbuds%2Caps%2C221&ref=nb_sb_noss_1" target="_blank"><button className="btn">Buy</button></a>
                                </div>
                          </div>
                     ))
                    
                }
        </div>
      
    )
}
}

export default hoc(FilterProductsElectronic)