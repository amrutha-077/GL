
import Welcome from './welcome';
import { About,Vision,Mission } from './about';
import Contact from './about';
function Comp()
{
    const image="https://scontent.fblr19-1.fna.fbcdn.net/v/t1.6435-9/31919571_203287316978676_4621471293957472256_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ZBbresLH-IUAX_h0TyK&_nc_ht=scontent.fblr19-1.fna&oh=00_AT86KAsIIw57vxN4A3r6oF1YUWp0YWLQs7m62n0rSOmKiw&oe=63085385"
    // // <>
    //     <HeadProvider>
    //     <div className="Home">
    //     <Title>Title of page</Title>
    //     <Link rel="canonical" content="http://jeremygayed.com/" />
    //     <Meta name="example" content="whatever" />
    //     </div>
    // </HeadProvider>
    // // </>
  
return(
        <>
        <h1>Welcome all!</h1>
        <img src={image}></img>
        <Welcome></Welcome>
        <About></About>
        <Vision></Vision>
        <Mission></Mission>
        <Contact></Contact>
        </>

    )
    
}
export default Comp