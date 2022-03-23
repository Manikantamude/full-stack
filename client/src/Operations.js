import React from 'react'
import axios from 'axios'
class operations extends React.Component{
    constructor(){
        super();
        this.state={
            students:[],
            name:'',
            address:'',
            phonenumber:''
        }
    }  
    componentDidMount(){
        this.getdata();
    }
    getdata=()=>{
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
    handledata=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    senddata=()=>{
        console.log(this.state.name,this.state.address,this.state.phonenumber)
        const newStudent={
            name:this.state.name,
            address:this.state.address,
            phonenumber:this.state.phonenumber
        }
        axios.post("http://localhost:4000/add",newStudent)
        .then((res)=>{console.log(res);this.getdata();})
        .catch((err)=>{console.log(err)})
        this.setState({
            name:'',
            address:'',
            phonenumber:''
        })
    }
   render(){
    //    console.log(this.state.students)
       return(
           <div style={{display:"flex",justifyContent:"space-between"}}>
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
               <div>
                    <p><input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handledata} /></p>
                    <p><input type="text" name="address" placeholder="Enter address" value={this.state.address} onChange={this.handledata} /></p>
                    <p><input type="text" name="phonenumber" placeholder="Enter phonenumber" value={this.state.phonenumber} onChange={this.handledata} /></p>
                    <button onClick={this.senddata}>Send</button>
               </div>
           </div>
       )
   }
}

export default operations;