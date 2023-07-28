const express=require("express");
const app=express();
const cors=require("cors");
const mysql=require("mysql2");
const bodyparser=require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded(extended=true));
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"wl"
});
app.get("/get",(err,res)=>{
    const selectq="SELECT * FROM student;";
    db.query(selectq,(err,result)=>{
        if(err){
            console.log("err");
        }
        else{
            return res.send(result);
        }
    })
})
app.post('/data',(req,res)=>{
        const q="INSERT INTO student(name,mail,mob,gender,dob,dateofjoining,qualification,back) VALUES (?,?,?,?,?,?,?,?);";
        db.query(q,[req.body.name,req.body.mail,req.body.num,req.body.gender,req.body.dob,req.body.dateofjoining,req.body.qualification,req.body.back],(res,err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
            }
        })
    
})
app.listen(3000,(req,res)=>{
    console.log("listening to port 3000");
})

