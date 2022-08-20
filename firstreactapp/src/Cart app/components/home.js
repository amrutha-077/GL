import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Link } from "react-router-dom";
import {addTocart} from "../slices/cartslice";
const Home = () => {
    const {items,status}=useSelector(state=>state.product)
    const dispatch=useDispatch()

    const handlecart = (product) => {
      dispatch(addTocart(product));
   
    };

    return ( 
        <div>
          <div className="product-container">
            <div className="row">
          {
            items.map((item)=>(
                <div className="card">
                        <img className="product-img" src={item.image}/>
                            <h2>{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                            <p>Delivery:{item.expectedDelivery}</p>
                            <Link to={`/cart/${item.id}`}><button onClick={()=>handlecart(item)} className="add-btn">Add to cart</button></Link>
                    </div>
                    
            ))
          }
          </div>
          </div>

        </div>
     );
}
 
export default Home;