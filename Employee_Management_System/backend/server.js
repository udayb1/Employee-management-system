const express=require("express");
const mysql=require('mysql2');
const cors=require('cors');

const app=express();
app.use(cors(
    {
        origin: ["https://empappnew.web.app/"],
        methods: ["POST","GET"],
        crediantials:true
    }
));
app.use(express.json());

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });

const db=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"BagwanRam1@",
    database:"employee"
});

app.post("/signup",(req,res)=>{
    let sql="INSERT INTO login1 VALUES (?,?,?)";

    db.query(sql,[req.body.name,req.body.email,req.body.password], (err, data)=>{
        if(err){
        console.log(err);
        return res.json(res);
        }else{
          return res.json(data);
        }
    })
})


app.post("/login",(req, res)=>{
    let sql="SELECT * FROM login1 WHERE email = ? AND password = ? ";
   
    db.query(sql,[req.body.email,req.body.password], (err, data)=>{
        if(err){
            console.log(err)
        }
        else if(data.length > 0){
            return res.json("success");
        }else{
            return res.json("no")
        }
    })
})


app.post("/save",(req,res)=>{
    let data=[req.body.eno,req.body.name,req.body.salary]
    let sql="insert into em values(?,?,?)";
    db.query(sql,data,(err,result)=>{
    if(err)res.send(err);
    else       res.send(result);
    })
    
})

app.get("/getdata",(req,res)=>{
    let sql = "select * from em";
    db.query(sql,(err,result)=>{
         if(err)  res.send(err);
         else          res.send(result);
    })
    
})

app.delete("/remove",(req,res)=>{
    let data=[req.body.eno]
    console.log(data);
    let sql="delete from em where eno=?";
    db.query(sql,data,(err,result)=>{
    if(err) res.send(err);
    else res.send(result);
    })
    })

app.put("/modify",(req,res)=>{
    let data=[req.body.name,req.body.salary,req.body.eno]
    let sql="update em set name=?, salary=? where eno=?";
    db.query(sql,data,(err,result)=>{
        if(err) res.send(err);
        else      res.send(result);
    })
})

app.listen(9000,()=>{console.log("ready @ 9000")})