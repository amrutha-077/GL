import React from "react";
import data from "./data";
// import "./LeaderBoard.css"
import Header from "./header";
class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.setState({data:data.list})
    }
    render(){
        return(
            <div>
                <Header></Header>
                <h2>Data in no specific order</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item)=>(
                                    <tr>
                                        <td>{item.rank}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
export default Board