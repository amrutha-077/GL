import React from "react";
import data from "./data";
// import "./LeaderBoard.css"
import Header from "./header";
import Table from "./table";
class SortName extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log("did mount")
       const sorteddata=[...data.list].sort((a,b)=>a.name.localeCompare(b.name))
       this.setState({data:sorteddata})
    }
    render(){
        return(
            <div>
                <Header value={1}></Header>
                <h3>Sorted Based On Names</h3>
                <Table tabledata={this.state.data}></Table>
            </div>
        )

    }
}
export default SortName