import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './home';
import Add from './add';
import Edit from './edit';
import User from "./user";

const App=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='user/:id' element={<User></User>}></Route>
                <Route path='add' element={<Add></Add>}></Route>
                <Route path='edit/:id' element={<Edit></Edit>}></Route>
            </Routes>
        </div>
    )
}

export default App