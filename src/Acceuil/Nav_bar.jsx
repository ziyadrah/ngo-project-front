import React from 'react';
import { Link } from 'react-router-dom';
import './Nav_bar.css';


const Nav_bar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-title">
        <h2>جمعية الرفق بالحيوان والمحافظة على الطبيعة</h2>
        <p>SOCIETE PROTECTRICE DES ANIMAUX ET DE LA NATURE</p>
      </div>
      
      <div className="contact-section">
        <h3>CONTACT</h3>
      </div>

      <ul className="nav-menu" >
        <li><Link to="/Register">Creer Compte</Link></li>
        <li><Link to="/Page_Acceuil">ACCUEIL</Link></li>
        <li><Link to="/about">A PROPOS</Link></li>
        <li><Link to="/activities">ACTIVITÉS</Link></li>
        <li><Link to="/adoptions">ADOPTIONS</Link></li>
        <li><Link to="/media">MÉDIATHEQUE</Link></li>
      </ul>

      <div className="info-section">
        <h3>Protection des animaux</h3>
        <p>La SPANA dispose de cinq centres...</p>
        <Link to="/read-more" className="read-more">LIRE LA SUITE</Link>
      </div>
    </nav>
  );
};


export default Nav_bar;