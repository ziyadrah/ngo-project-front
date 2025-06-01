import React, { useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", password: "", role: "association" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", form);
      alert("Compte créé avec succès !");
      navigate("/login");
    } catch (error) {
      alert("Erreur d'inscription");
    }
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
      <button type="submit">S'inscrire</button>
    </form>
  );
}
