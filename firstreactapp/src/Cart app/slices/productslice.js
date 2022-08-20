import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialvalue={
    items:[],
    loading:true
}

export const ProductFetch=createAsyncThunk('product/ProductFetch',async()=>{
    try{
        const result= await axios.get('http://localhost:3001/empDetails')
        return result.data
        
    }
    catch(err)
    {
        console.log(err)
    }

}
)


const Productslice=createSlice({
   name:'product',

   initialState:initialvalue,

   reducers:{

   },
   extraReducers:{
    [ProductFetch.pending]:(state,action)=>{
        console.log("pending",action)
        state.loading=true
    },
    [ProductFetch.fulfilled]:(state,action)=>{
        console.log('fullfiled',action)
        state.loading=false
        state.items=action.payload
        
    },
    [ProductFetch.rejected]:(state,action)=>{
        console.log('rejected',action)
        state.loading=false
    }
   }

})

export default Productslice.reducer