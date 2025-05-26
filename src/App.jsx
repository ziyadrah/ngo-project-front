import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login1 from './components/Auth/Login/Login1';
import MotDePasseOublie from './components/Auth/PasswordReset/MotDePasseOublie';
import Inscription from './components/Auth/Inscription/Inscription';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login1 />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/mot-de-passe-oublie" element={<MotDePasseOublie />} />
      </Routes>
    </Router>
  );
}

export default App;