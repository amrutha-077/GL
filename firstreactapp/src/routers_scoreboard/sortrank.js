import React from "react";
import data from "./data";
// import "./LeaderBoard.css"
import Header from "./header";
import Table from "./table";
class SortRank extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       const sorteddata=[...data.list].sort((a,b)=>Number(a.rank)-Number(b.rank))
      this.setState({data:sorteddata})
    }
    render(){
        return(
            <div>
                <Header value={3}></Header>
                <h3>Sorted Based On Rank</h3>
                <Table tabledata={this.state.data}></Table>
            </div>
        )

    }
}
export default SortRank