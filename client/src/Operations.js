import React from 'react'

class operations extends React.Component{
    constructor(){
        super();
        this.state={
            students:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:4000/retreive")
        .then((res)=>{
            return res.json();
        })
        .then((jsonRes)=>{
            this.setState({
                students:jsonRes
            })
        })
    }
   render(){
       console.log(this.state.students)
       return(
           <div>
               <h2>Students Details</h2>
               {
                   this.state.students.map((std)=>(
                       <div key={std.id}>
                           <p>{std.id}</p>
                           <p>{std.name}</p>
                           <p>{std.address}</p>
                           <p>{std.phonenumber}</p>
                       </div>
                   ))
               }
           </div>
       )
   }
}

export default operations;