import React from "react";
import data from "./data";
// import "./LeaderBoard.css"
import Header from "./header";
import Table from "./table";
class SortScore extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log('did mount of component')
       const sorteddata=[...data.list].sort((a,b)=>Number(a.points)-Number(b.points))
      this.setState({data:sorteddata})
    }
    render(){
        console.log("render of comp")
        return(
            <div>
                <Header value={4}></Header>
                <h3>Sorted Based On Score</h3>
                <Table tabledata={this.state.data}></Table>
               
            </div>
        )

    }
}
export default SortScore