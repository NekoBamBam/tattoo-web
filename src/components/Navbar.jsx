import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // íconos del menú

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // cerrar menú en mobile
  };
  

  return (
    <nav className="bg-[#EAE0D5] border-b border-gray-200 px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        {/* Logo */}
        <div className="h-16 w-16">
          <img src={logo} alt="Logo" />
        </div>

        {/* Enlaces en desktop */}
        <div
          onClick={scrollToSection}
          className="hidden md:flex space-x-6 justify-center w-full"
        >
          <a
            href="#sobre-mi"
            className="text-black hover:text-red-500 font-serif"
          >
            SOBRE MI
          </a>
          <div onClick={scrollToSection}>
            <a
              href="#trabajos"
              className="text-black hover:text-red-500 font-serif"
            >
              TRABAJOS
            </a>
          </div>
          <div>
            <a
              href="#contacto"
              className="text-black hover:text-red-500 font-serif"
            >
              REDES
            </a>
          </div>
        </div>

        {/* Botón menú hamburguesa celular */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú abierto celular */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#EAE0D5] shadow-md flex flex-col items-center space-y-4 py-4">
          <a
            href="#sobre-mi"
            className="text-black"
            onClick={() => setOpen(false)}
          >
            SOBRE MI
          </a>
          <a
            href="#trabajos"
            className="text-black"
            onClick={() => setOpen(false)}
          >
            TRABAJOS
          </a>
          <a
            href="#contacto"
            className="text-black"
            onClick={() => setOpen(false)}
          >
            REDES
          </a>
        </div>
      )}
    </nav>
  );
}
