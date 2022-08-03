import React from 'react';
import productDetails from './edata';
import Eproducts from './main';
// import './app.css';

class App extends React.Component 
 {
    render(){
        console.log("inside")
        return(
            
            
        <Eproducts data={productDetails}></Eproducts>
                
        )

    }

 } 

 export default App