import React from "react"
import  Comp from './comp';
import data from "./data";
class App extends React.Component{
    render(){
        return(
            <div>
             <Comp data={data}></Comp>
            </div>
        )
    }
}
export default App