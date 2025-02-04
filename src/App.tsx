import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hotels from './pages/Hotels';
import Rooms from './pages/Rooms';

function App() {
  return (
    <Router>
      <Navbar /> {/* 🔹 Agregar Navbar arriba */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
