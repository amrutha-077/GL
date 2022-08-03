import React from 'react';
class Phase2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name:"Amrutha"}
    }
    static getDerivedStateFromProps(props)
    {
            console.log("inside ds")
            return null
           
    }
    shouldComponentUpdate() 
    {
        console.log("inside scu")
        return true;
    }
    componentDidUpdate()
    {
       console.log("inside cdu")

    }
    render()
     {
        console.log("renered")
      return (

        <>
        <h1>Hi ,this is {this.state.name}</h1>
        </>
      )
    }


}
export default Phase2