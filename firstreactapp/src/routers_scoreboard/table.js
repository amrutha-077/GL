import React from "react";
import './table.css'
class Table extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){
        console.log('render of table')
        return(
        <div>
        

        <table className="table table-hover table-bordered">
        <thead >
            <tr className="table-success">
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Score</th>
            </tr>
        </thead>
        <tbody>
             {
                    this.props.tabledata.map((item)=>(
                        <tr class="table-danger">
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.points}</td>
                        </tr>
                    ))
                }
            </tbody>
 
      </table>
    </div>
        )
    }
}
export default Table