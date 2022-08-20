import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart_items:[],
    cart_quantity:0
   
}

const Cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            state.cart_quantity+=1
        },
        Decrement:(state,action)=>{
        
        if (state.cart_quantity > 1) 
        {
            state.cart_quantity -= 1;

        }
        else if (state.cart_quantity === 1)
         {
            state.cart_items=state.cart_items.filter((item)=>item.id!==action.payload.id)
             state.cart_items=[]
        }
    },
        
    }
})
export const {addTocart,Decrement}=Cartslice.actions
export default Cartslice.reducer