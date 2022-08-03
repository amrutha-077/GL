function Buy(props)
{
    // const BUY="https://www.amazon.in/s?k=same+day+delivery+mobile&adgrpid=62701313921&ext_vrnc=hi&gclid=Cj0KCQjwof6WBhD4ARIsAOi65ajDvz8dNErAkQ4MEsBLVWjjyrYq0lspR8j2h9WnHn8sQWXK0a5j4j4aAh36EALw_wcB&hvadid=382114465114&hvdev=c&hvlocphy=9302538&hvnetw=g&hvqmt=b&hvrand=7762693952581968489&hvtargid=kwd-311219927027&hydadcr=24538_1955324&tag=googinhydr1-21&ref=pd_sl_27ry1e7y7q_b"
    const {name,price,offer}=props
    return(
        <>
        <ul>
            <li>Product Name:{name}</li>
            <li>Product Price:{price}</li>
            <li>Product Offer:{offer}</li>
            <input type="submit"></input>
        </ul>
        {/* <input type={cart}></input> */}
        </>
        
    )
}

export default Buy