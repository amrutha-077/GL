import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Board from "./board";
import SortAge from "./sortage";
import SortName from "./sortname";
import SortRank from "./sortrank";
import SortScore from "./sortscore";
function App(){
    console.log("hi")
  return(
   
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Board></Board>}></Route>
          <Route path='/name'element={<SortName></SortName>}></Route>
          <Route path='/age' element={<SortAge></SortAge>}></Route>
          <Route path='/rank' element={<SortRank></SortRank>}></Route>
          <Route path='/score' element={<SortScore></SortScore>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
