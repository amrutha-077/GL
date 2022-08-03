import React from "react";
import clothing from './cdata'
import electronic from './edata'
import FilterProductsClothing from "./cloth"
import FilterProductsElectronic from './electronic'

function App(){
    return(
        <div>
          <FilterProductsClothing data={clothing} storename="Clothing Store"></FilterProductsClothing>
          {/* <FilterProductsElectronic data={electronic} storename='Electronic Store'></FilterProductsElectronic> */}
        </div>
    )
}
export default App