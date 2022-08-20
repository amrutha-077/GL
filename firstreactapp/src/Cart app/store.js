import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "./slices/cartslice"
import ProductReducer from './slices/productslice'
import { ProductFetch } from "./slices/productslice"
const store=configureStore({
    reducer:{
        product:ProductReducer,
        cart:CartReducer
        
    }
})

store.dispatch(ProductFetch())
export default store