import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./forms/login";
import Register from "./forms/register";
import Sinistre from "./dashboard/Sinistre";



import './App.css'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/association" element={<h1>Dashboard Association</h1>} />
        <Route path="/dashboard/volontaire" element={<h1>Dashboard Volontaire</h1>} />
        <Route path="/dashboard/sinistre" element={<Sinistre/>} />
      </Routes>
    </Router>
  )
}

export default App
