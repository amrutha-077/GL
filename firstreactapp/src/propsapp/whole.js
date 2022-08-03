import Greet from './greet';
import Buy from './buy';
import Footer from './footer';
function Whole()
{
    return(
        <>
        <Greet></Greet>
  <Buy name="Xiaomi Mi 10 5G" price="20K" offer="30%"></Buy>
  <Buy name="OnePlus 9 Pro 5G" price="40K" offer="40%"></Buy>
  <Buy name="Realme X50 Pro 5G" price="20K" offer="35%"></Buy>
  <Footer></Footer>
        </>
    )
}

export default Whole