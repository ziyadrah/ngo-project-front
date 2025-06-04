import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Register() {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", password: "", role: "association",association_nom: "",
  latitude: null,
  longitude: null });
  const navigate = useNavigate();
const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", form);
      await API.post("/users/register", form);
      alert("Compte cree avec succes !");
      navigate("/login");
    } catch (error) {
      console.error("Erreur:", error.response?.data || error.message);
      alert("Erreur d'inscription");

    if (!validateEmail(formData.email)) {
      setMessage({ text: 'Veuillez entrer une adresse email valide', type: 'error' });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ text: 'Le mot de passe doit contenir au moins 6 caractères', type: 'error' });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: 'Les mots de passe ne correspondent pas', type: 'error' });
      return;
    }

    setTimeout(() => {
      setMessage({ text: 'Inscription réussie! Redirection...', type: 'success' });
      setTimeout(() => {
        alert('Compte créé avec succès!');
      }, 2000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <input name="nom" placeholder="Nom" onChange={handleChange} required />
      <input name="prenom" placeholder="Prénom" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="association">Association</option>
        <option value="volontaire">Volontaire</option>
        <option value="sinistre">Sinistré</option>
      </select>
         {form.role === "association" && (
        <input name="association_nom" placeholder="Nom de l'association" onChange={handleChange} />
      )}
      <button type="submit">S'inscrire</button>
    </form>
    <div className="login-container">
      <div className="login-header">
        <h1>Créer un compte</h1>
        <p>Rejoignez notre communauté</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="nom">Nom complet</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="email">Adresse Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="password">Mot de passe</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        </div>

                    <div className='Type_inscription'> <select required>
                      <option value="" disabled selected>Que vous etes vous ?</option>
                <option value="donneur">Donneur</option>
                <option value="beneficiaire">Bénéficiaire</option>
              </select>
                    </div>

        <button type="submit" className="login-button">S'inscrire</button>

        {message.text && (
          <div className={`${message.type}-message`}>
            {message.text}
          </div>
        )}

        <div className="signup-link">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </div>
      </form>
    </div>
  );
};

export default Inscription;