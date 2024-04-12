import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const hEmail=(event)=>{setEmail(event.target.value);}
    const hPassword=(event)=>{setPassword(event.target.value);}
    
    function abc(event){
        event.preventDefault();
        let val={email,password};
         axios.post("http://localhost:9000/login",val)
        .then(res => {
        if(res.data === "success"){
            Navigate("/home");
        }else{
            alert('Invalid Username And Password')
        }})
        .catch(err => console.log(err));
        

    }





    return (
   <div className='conatiner'>

    <div className='loginform'>
    
    <center><style>{'body { background-color: #002D62; color:white}'}</style>

    <h2>Sign In</h2>
        <form type="onSubmit">
        <input type='text' placeholder="Enter Email"onChange={hEmail} value={email}></input><br/><br/>
      
        <input type='password' placeholder="Enter password"onChange={hPassword} value={password}></input><br/><br/><button onClick={abc} style={{ background: '#041E42', color:'white',borderRadius:'20px',fontSize:'40px',padding:'10px',width:'18%'}}>Sign In</button>
        </form>
    </center>
    </div>
   </div>
    );
}

export default Login;
