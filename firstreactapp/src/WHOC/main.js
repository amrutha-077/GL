import React from "react";
import './whoc.css';
class Eproducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
            search:'',
            result:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data}
    }
    handleChange=(event)=>{
        // console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        let data=this.state.productDetails.filter((item)=>item.pName===this.state.search)
        this.setState({result:data}) 
    }
    render(){
        
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Welcome User </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link " href="add.html" >Login</a>
                    <a class="nav-item nav-link " href="add.html" >Cart</a>
                    
                  </div>
                </div>
              </nav>




                <form className="let">
               
                    <input type='text' placeholder="Search here..." onChange={(e)=>this.handleChange(e)}></input>
                    <button onClick={(e)=>this.handleSearch(e)}>search</button><br></br>
                    <div className="container">
                      <div className="row">
                         <img src="https://cdn.vectorstock.com/i/preview-2x/25/03/special-offer-grey-sale-tag-simple-realistic-vector-37352503.webp" />  
                      </div>
                      </div>     
                </form>

                <div className="container">
                      <div className="row">
               {
                         this.state.result.map((item)=>(
                                <div className="card hover-shadow cursor">
                                    <div class="card-body ">
                                        <img className="im" src={item.image}/>
                                        <h2>{item.pName}</h2>
                                        <p>Price:{item.price}</p>
                                        <p>Manufacturer:{item.manufacturer}</p>
                                        <p>Delivery:{item.expectedDelivery}</p>
                                        <a href="https://www.amazon.in/s?k=earbuds&crid=26P3L83A2FMZL&sprefix=earbuds%2Caps%2C221&ref=nb_sb_noss_1" target="_blank"><button className="btn">Buy</button></a>
                                    </div>
                              </div>
                         ))
        
                    
                }
                </div>
                </div>

               <div className=" bg-dark">
               <div class=" ig col-md-4">
                    <h6 className="head">Keep in touch </h6>
                        
                         <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Ce%7Cfacebook%7C&placement=&creative=550525804791&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1001394929%26loc_physical_ms%3D1007773%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwz96WBhC8ARIsAATR2504jsNTpBN_G1nJbut-CnVoTdAg5HNhBq677mzytTY1MRTFTH_9uLUaAlOVEALw_wcB" class="fa fa-facebook"></a>
                        <a href="https://twitter.com/i/flow/login" class="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/" class="fa fa-instagram"></a>

                        
                     </div>

               </div>
   
            </div>
        )
    }
}
export default Eproducts