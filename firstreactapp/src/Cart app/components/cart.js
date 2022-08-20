import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router";
import { addTocart,Decrement } from "../slices/cartslice";
import axios from 'axios'

const Cart = () => {
    // const cartitem=useSelector(state=>state.cart_items)
    const [cart,setCart]=useState([])
    const {id}=useParams()

    const dispatch=useDispatch()

    useEffect(()=>{
        axios.get(`http://localhost:3001/empDetails/${id}`).then((res)=>setCart(res.data)).catch((err)=>console.log(err))
        
    },[]);

   

    return ( 
        <div>
          <div className="product-container">
            <div className="row">
          {
            
                <div className="card">
                        <img className="product-img" src={cart.image}/>
                            <h2>{cart.pName}</h2>
                            <p>Price:{cart.price}</p>
                            <p>Manufacturer:{cart.manufacturer}</p>
                            <p>Delivery:{cart.expectedDelivery}</p>
                            <button onClick={() => dispatch(addTocart())}>+</button>
                            <button  onClick={() => dispatch(Decrement())}>-</button>
                           
                            
                            
                            
                </div>
                    
        
          }
          </div>
          </div>
        </div>
     );
}
 
export default Cart;