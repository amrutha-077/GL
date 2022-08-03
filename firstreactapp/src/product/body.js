import './body.css'
import {data} from './object.js'

const product=""
export function Body()
{
    return(
        <div className='Body'>
            { data.map((items)=>{
                return(
                    <div className='Container'>
                        <h1></h1>
                        <h1>{items.Title}</h1>
                        <h1>{items.price}</h1>
                        <h1>{items.kg}</h1>
                    </div>
         )})} 
        </div>
    )
}
    