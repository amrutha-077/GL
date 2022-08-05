import React from "react";
import data from "./data";
// import "./LeaderBoard.css"
import Header from "./header";
import Table from "./table";
class SortAge extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       const sorteddata=[...data.list].sort((a,b)=>Number(a.age)-Number(b.age))
      this.setState({data:sorteddata})
    }
    render(){
        return(
            <div>
                <Header value={2}></Header>
                <h3>Sorted Based On Age</h3>
                <Table tabledata={this.state.data}></Table>
            </div>
        )

    }
}
export default SortAge