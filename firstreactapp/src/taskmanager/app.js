import React from "react"
import  Task from './task';
import data from "./data";
class App extends React.Component{
    render(){
        return(
            <div>
<Task data={data}></Task>
            </div>
        )
    }
}
export default App