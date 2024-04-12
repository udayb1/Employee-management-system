import React from 'react';
import N from "./N"
import {useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Delete = () => {
    const [info,setInfo]=useState([]);const nav=useNavigate();

    useEffect(()=>{
    let urladd = "http://localhost:9000/getdata";
    axios.get(urladd)
    .then(res=>{setInfo(res.data);
                 console.log(info);})
    .catch(err=>console.log(err));
    
    },[]);
    const logout=()=>{
        window.localStorage.clear();
        nav('/login');
    }

    const delStu=(eno)=>{
        let urladd="http://localhost:9000/remove";
        let data={data:{eno}}
        axios.delete(urladd,data)
        .then(res=>{
        alert ("record deleted");
        window.location.reload();
        })
        .catch (err=>alert("issue"+err));
        }
    return (
        <>
        
        <style>{'body { background-color: #002D62; color:white}'}</style><N></N><div className='card'>
         <center>
    <h1>Delete Page</h1>
  
    <table border="5" style={{"width":"80%"}}>
<tr>
<th style={{padding:"10px"}}>Employee ID</th>

<th style={{}}>Name</th>
<th>Salary</th><th>Delete</th>

</tr>
{

info.map((e)=>(
<tr style={{"text-align":"center"}}>
<td>{e.eno}</td>
<td>{e.name}</td>
<td>{e.salary}</td>
<td><button onClick={()=>{
if(window.confirm("r u sure"))delStu(e.eno)}} style={{ background: '#041E42', color:'white',borderRadius:'20px',fontSize:'40px',padding:'10px',width:'80%'}}>Delete</button></td>


</tr>
))
}

</table>

    <input type="submit" onClick={()=>{if(window.confirm("Confirm Logout"))logout()}} value="Logout" style={{ background: '#041E42', color:'white',borderRadius:'20px',fontSize:'40px',padding:'10px',width:'12%'}}/>
</center></div>
        </>
        
        
        
        
    
    );
}

export default Delete;
