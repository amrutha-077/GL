import './body.css'
import { About,Vision,Mission} from './about'

export function Body()
{   
    const image="https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/31919571_203287316978676_4621471293957472256_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ZBbresLH-IUAX_h0TyK&_nc_ht=scontent.fblr19-1.fna&oh=00_AT86KAsIIw57vxN4A3r6oF1YUWp0YWLQs7m62n0rSOmKiw&oe=63085385"
    return(
        <div>
            <h1>MAHARAJA INSTITUTE OF TECHNOLOGY MYSORE</h1>
            <img src={image} alt="empty"></img>
            <div>
            <About></About>
            </div>
            <div>
            <Vision></Vision>
            </div>
            <div>
            <Mission></Mission>
            </div>
           
        </div>
        
    )
}