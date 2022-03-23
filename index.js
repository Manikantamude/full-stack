const express= require("express");
const cors=require("cors");
const mysql=require("mysql")
const app=express();
const port= 4000;

//quries
const SELECT="select * from students"

//connection
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mani1803",
    database:"ram"
})

connection.connect((err)=>{
    if(err){
        console.log("error occured",err);
    }
    else
    console.log("connected");
})

//cors middleware
app.use(cors())

app.get("/",(req,res)=>{
    res.send("go to /get route")
})

app.get("/retreive",(req,res)=>{
    connection.query(SELECT,(err,result)=>{
        if(err)
        return res.send(err)
        else{
            return res.json(result)
        }
    })
})

app.get("/add",(req,res)=>{
    const{name,address,phonenumber}=req.query;
    console.log(name,address,phonenumber);
    const INSERT=`insert into students(name,address,phonenumber) values("${name}","${address}","${phonenumber}")`
    connection.query(INSERT,(err,result)=>{
        if(err)
        console.log(err)
        else
        res.send("data added successfully")
    })
})

app.listen(port,()=>{console.log("server is started")})



//alter user 'root'@'localhost' identified with mysql_native_password by using 'your current password;

//next we will enter this comment also (flush privileges)