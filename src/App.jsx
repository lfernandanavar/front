import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Reservas from './pages/Reservas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  );
}

export default App;
