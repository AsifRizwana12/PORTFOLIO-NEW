import React from "react";
import { Route,Link,Routes } from "react-router-dom";
import {About} from "./Components/About";
import {Blogs} from "./Components/Blogs";
import {SignUp} from "./Components/SignUp";
import {Navbar} from "./Components/Navbar";
import {Contact} from "./Components/Contact";
import {Welcome} from "./Components/Welcome";
import ProjectDisplay from "./Components/ProjectDisplay";


<img src='/assets/Image.jpeg' alt="" />
const App = () => {
  return (
    <>

    <Navbar/>
  
   
     
    <Routes>


    <Route path="/" Component={Welcome} /> 
    <Route path="/about" Component={About}/>
      <Route path="/contact"Component={Contact}/>
      <Route path="/blog" Component={Blogs}/>
      <Route path="/project/:id" element={<ProjectDisplay />} />
      <Route path="/signup" Component={SignUp}/>
      </Routes>
  
   
    </>
  );
};

export default App;
