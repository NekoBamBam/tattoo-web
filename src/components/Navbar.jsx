import React from "react";
import logo from "../assets/logo.png"

export default function Navbar() {
    return (
      <nav className="bg-[#EAE0D5] border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="h-16 w-16"><img src={logo} alt="" /></div>
  
          {/* Enlaces */}
          <div className="space-x-6">
            <a href="#inicio" className="text-black hover:text-black">SOBRE MI</a>
            <a href="#servicios" className="text-black hover:text-black">TRABAJOS</a>
            <a href="#contacto" className="text-black hover:text-black">REDES</a>
          </div>
        </div>
      </nav>
    );
  }
  