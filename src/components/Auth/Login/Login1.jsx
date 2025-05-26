import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setMessage({ text: 'Veuillez entrer une adresse email valide', type: 'error' });
      return;
    }
    
    if (password.length < 6) {
      setMessage({ text: 'Le mot de passe doit contenir au moins 6 caractères', type: 'error' });
      return;
    }
    
    // Simulation connexion
    setTimeout(() => {
      if (email === 'test@example.com' && password === '123456') {
        setMessage({ text: 'Connexion réussie! Redirection...', type: 'success' });
        setTimeout(() => alert('Bienvenue! Vous êtes maintenant connecté.'), 2000);
      } else {
        setMessage({ text: 'Email ou mot de passe incorrect', type: 'error' });
      }
    }, 1000);
  };


  return (

    <div className="login-container">
      <div className="login-header">
        <h1>Bienvenue</h1>
        <p>Connectez-vous à votre compte</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="email">Adresse Email</label>
        </div>
        
        <div className="input-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="password">Mot de passe</label>
        </div>
        
        <div className="forgot-password">
          <Link to="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
        </div>
        
        <button type="submit" className="login-button">Se connecter</button>
        
        {message.text && (
          <div className={`${message.type}-message`} style={{ display: 'block' }}>
            {message.text}
          </div>
        )}
        
        <div className="signup-link">
          Pas de compte ? <Link to="/inscription">S'inscrire</Link>
        </div>
      </form>
    </div>

  );
};

export default Login1;