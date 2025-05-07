import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import { Routes, Route } from "react-router-dom";
import GetTasks from "./components/GetTasks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<CreateTask />}></Route>
          <Route path='/getTasks' element={<GetTasks />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
