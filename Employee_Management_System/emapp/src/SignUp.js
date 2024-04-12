
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");


    
    const email_p= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex=/^[A-Za-z]+$/;
    const hName=(event)=>{setName(event.target.value);}
    const hEmail=(event)=>{setEmail(event.target.value);}
    const hPassword=(event)=>{setPassword(event.target.value);}

    const nav=useNavigate();
    
    function login(event){nav("/login")}
    function sign(){

        if(name===""){
            alert("name cannot be empty")
          }
      
          else if(!name.match(regex)){
          alert("name can only contain characters")
          }
      
          else if(email===""){
            alert("email cannot be empty")
          }
      
          else if(!email.match(email_p)){
            alert("email didnt match criteria")
          }
      
          else if(password===""){
            alert("Password cannot be empty")
          }

          else{
        let val={name,email,password}

        axios.post("http://localhost:9000/signup",val)
        .then(nav("/login"))
        .catch(err => console.log(err));
        
    }}

    return (
      
        <div className='contaner'>
            <div className='signup'>
            <center>
            <style>{'body { background-color: #002D62; color:white}'}</style>
            <h2>Sign Up</h2>
        <form type="onSubmit">
        <input type='text' placeholder="Enter name" onChange={hName} value={name}></input><br/><br/>
        <input type='text'placeholder='Enter Email' onChange={hEmail} value={email}></input><br/><br/>
      
        <input type='password' placeholder="Enter Password" onChange={hPassword} value={password}></input><br/><br/><button onClick={sign} style={{ background: '#041E42', color:'white',borderRadius:'20px',fontSize:'40px',padding:'10px',width:'15%'}}>Sign Up</button><h3>Already have a Account <Link to="/login" style={{color:"white"}}><textbutton>Sign in</textbutton></Link></h3>        
        </form>
    </center>
            </div>
        </div>
    );
}

export default SignUp;
