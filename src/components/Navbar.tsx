import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link to="/">Gestión de Hoteles</Link>
        </h1>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">
            🏨 Hoteles
          </Link>
          <Link to="/rooms" className="hover:underline">
            🛏️ Habitaciones
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center bg-blue-700 p-4 rounded">
          <Link to="/" className="block hover:underline">
            🏨 Hoteles
          </Link>
          <Link to="/rooms" className="block hover:underline">
            🛏️ Habitaciones
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
