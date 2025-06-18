import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./forms/login";
import Register from "./forms/register";
import './App.css';
import MotDePasseOublie from "./forms/MotDePasseOublie";
import Header from './Acceuil/Header';
import Nav_bar from './Acceuil/Nav_bar';
import Page_Acceuil from './Acceuil/Page_Acceuil';
import Footer from './Acceuil/Footer';
import Sinistre from "./dashboard/sinistre";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <div className="content-wrapper">
          <Nav_bar />
          <main className="main-content">
            <Routes>
             <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/index" />
            <Route path="/MotDePasseOublie" element={<MotDePasseOublie />} />
            <Route path="/dashboard/association" element={<h1>Dashboard Association</h1>} />
            <Route path="/dashboard/volontaire" element={<h1>Dashboard Volontaire</h1>} />
            <Route path="/dashboard/sinistre" element={<Sinistre/>} />
            <Route path="/header" element={<Header />} />
            <Route path="/Nav_bar" element={<Nav_bar />} />
            <Route path="/Page_Acceuil" element={<Page_Acceuil />} />
            <Route path="/Footer" element={<Footer />} />
         </Routes>
        {/* <Route path="/dashboard/sinistre" element={<h1>Dashboard Sinistré</h1>} /> */}
        
            
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;