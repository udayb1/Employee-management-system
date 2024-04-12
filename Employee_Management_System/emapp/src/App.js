import logo from './logo.svg';
import './App.css';
import Login from "./Login";import SignUp from './SignUp';
import {BrowserRouter,Routes,Route} from "react-router-dom";import Create from './Create';
import Home from "./Home"
import N from "./N";
import Delete from './Delete';
import Update from './Update';
import Updatea from './Updatea';


function App() {
  return (
    <div className="App"><center>
    <h1>Employee Management System</h1></center>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUp/>}/>
		<Route path="/login" element={<Login/>}/>
    <Route path="/create" element={<Create/>}/><Route path="/home" element={<Home/>}/><Route path="/update" element={<Update/>}/><Route path="/delete" element={<Delete/>}/><Route path="/updatea" element={<Updatea/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
