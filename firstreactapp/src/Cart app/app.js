import React from "react";
import './app.css'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Notfound from "./components/notfound";
const App = () => {
    return (  
        <div>
            <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path ='cart/:id' element={<Cart></Cart>}></Route>
                <Route path='*' element={<Notfound></Notfound>}></Route>
            </Routes>
            </BrowserRouter>

        </div>
    );
}
export default App;