import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import N from "./N";import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [eno,setEno]=useState("");
    const [name,setName]=useState("");
    const [salary,setSalary]=useState("");
    const regex=/^[A-Za-z]+$/;
    
    const hEno=(event)=>{setEno(event.target.value);}
    const hName=(event)=>{setName(event.target.value);}
    const hSalary=(event)=>{setSalary(event.target.value);}

    
    
    
    function save(event){
    event.preventDefault();
    if(eno===""){
        alert("Employee ID cannot be empty")
      }
  
      else if(eno.match(regex)){
      alert("Employee ID can only contain Numbers")
      }
  
      else if(name===""){
        alert("Name cannot be empty")
      }
  
      else if(!name.match(regex)){
        alert("Name can only contain alphabets")
      }
  
      else if(salary===""){
        alert("Enter Employee Salary")
      }

      else if(salary.match(name)){
        alert("Enter Salary only in Numbers")
      }
  

      else{
    let data={eno,name,salary};
    let urladd="http://localhost:9000/save";
    axios.post(urladd,data)
    .then(res=>{alert("Data Recorded")})
    .catch(err=>{console.log(err)})
      }
     }
    return (
      
        <>
        <style>{'body { background-color: #002D62; color:white}'}</style>
        <N></N><div className='card'>
        <center>
        
        <form onSubmit={save}>
        <h1>Create Page</h1>
        <input type="text" placeholder="enter eno" onChange={hEno} value={eno}/><br/><br/>
        <input type="text" placeholder="enter name" onChange={hName} value={name}/><br/><br/>
        <input type="text" placeholder="enter salary" onChange={hSalary} value={salary}/><br/>
        <br/>
        <input type="submit" value="save" style={{ background: '#041E42', color:'white',borderRadius:'20px',fontSize:'40px',padding:'10px',width:'10%'}}/><br/><br/>

        </form>
        </center>
        </div></>
        
    );
}

export default Create;
