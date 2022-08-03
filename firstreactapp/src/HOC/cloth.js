import React from "react";
import hoc from "./hoc";
class FilterProductsClothing extends React.Component{
    render(){
       const {result,handleChange,handleSearch,storename}=this.props
        return(
            <div>
            
           <form>
            <input type='text' placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
        </form>
        {
                    result.map((item)=>(
                        <div>
                            <h2>{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                        </div>
                    ))
                }
        </div>
        )

    }
}
export default hoc(FilterProductsClothing)