import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // íconos de hamburguesa y cerrar
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#EAE0D5] border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="h-16 w-16">
          <img src={logo} alt="Logo" />
        </div>

        {/* Botón Hamburguesa - solo visible en móviles */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Enlaces - oculto en móvil */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-black hover:text-black">SOBRE MI</a>
          <a href="#" className="text-black hover:text-black">TRABAJOS</a>
          <a href="#" className="text-black hover:text-black">REDES</a>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className="block text-black hover:text-black">SOBRE MI</a>
          <a href="#" className="block text-black hover:text-black">TRABAJOS</a>
          <a href="#" className="block text-black hover:text-black">REDES</a>
        </div>
      )}
    </nav>
  );
}
