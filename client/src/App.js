import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./containers/auth/login"
import Register from "./containers/auth/register"
import Home from "../src/containers/auth/home";
import ChatContent from '../src/components/chatContents'


  const App=()=>{ 
  return(
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/> }/>
      <Route path="/home" element={<Home/> }/>
      <Route path="/chatContent" element={<ChatContent/> }/>

    
      

    </Routes>
  );
};



export default App;