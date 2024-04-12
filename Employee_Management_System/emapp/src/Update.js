import {useState,useEffect} from "react";
import axios from "axios";
import {useLocation}from "react-router-dom";


const Update = () => {
const loc=useLocation();


const [eno,setEno]=useState("");
const [name,setName]=useState("");
const [salary,setSalary]=useState("");

const hEno=(event)=>{setEno(event.target.value);}
const hName=(event)=>{setName(event.target.value);}
const hSalary=(event)=>{setSalary(event.target.value);}

useEffect(()=>{
setEno(loc.state.i);
setName(loc.state.n);
setSalary(loc.state.m);
},[]);

const save=(event)=>{
event.preventDefault();
let data={eno,name,salary};
let urladd="http://localhost:9000/modify";
axios.put(urladd,data)
.then(res=>{
alert("record updated");
setEno("");
setName("");
setSalary("");

})
.catch(err=>alert(err));
}

return(
<>
<style>{'body { background-color: #002D62; color:white}'}</style>
<center>

<form onSubmit={save}>
<h1>Update Page</h1>
<input type="number" placeholder="enter rno" onChange={hEno} value={eno} disabled={true}/><br/><br/>
<input type="text" placeholder="enter name" onChange={hName} value={name}/><br/><br/>
<input type="text" placeholder="enter marks" onChange={hSalary} value={salary}/><br/>
<br/>
<input type="submit" value="save"/>
</form>
</center>
</>

);

}

export default Update;
