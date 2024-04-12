import React from 'react';
import N from "./N"
import {useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Updatea = () => {
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
    const updateStu=(eno,name,salary)=>{
        nav("/update",{state:{i:eno, n:name,m:salary}});
        }


    return (
        <>
        
        
        <style>{'body { background-color: #002D62; color:white}'}</style><N></N><div className='card'>
         <center>
    <h1>Update page</h1>
  
    <table border="5" style={{"width":"80%"}}>
<tr>
<th style={{padding:"10px"}}>Employee ID</th>

<th style={{}}>Name</th>
<th>Salary</th>
<th>Update</th>

</tr>
{

info.map((e)=>(
<tr style={{"text-align":"center"}}>
<td>{e.eno}</td>
<td>{e.name}</td>
<td>{e.salary}</td>
<td><button onClick={()=>{
updateStu(e.eno,e.name,e.salary);}} style={{ background: '#041E42', color:'white',borderRadius:'20px',fontSize:'40px',padding:'10px',width:'90%'}}>Update</button></td>


</tr>
))
}

</table>

    <input type="submit" onClick={()=>{if(window.confirm("Confirm Logout"))logout()}} value="Logout" style={{ background: '#041E42', color:'white',borderRadius:'20px',fontSize:'40px',padding:'10px',width:'12%'}}/>
</center>
</div>
        </>
        
        
        
        
    
    );
}

export default Updatea;
