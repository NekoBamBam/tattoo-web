import React from "react";
import fondo1 from "../assets/fondo1.jpeg";
import nico1 from "../assets/nico1.jpg";
import fondo2 from "../assets/fondo2.jpg"

function Home() {
  const scrollToSection = () => {
    const section = document.getElementById("sobre-mi");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#C6AC8F]">
      <div className="relative h-screen">
        <img
          className="h-full w-full object-cover opacity-65"
          src={fondo2}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl text-white font-imbue  mb-6 drop-shadow-lg">
            ¿QUIÉN SOY?
          </h1>
          <button
            onClick={scrollToSection}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300 text-base sm:text-lg mt-16"
          >
            Ver más
          </button>
          <div onClick={scrollToSection} className="mt-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="currentColor"
              className="bi bi-chevron-compact-down text-white  hover:text-gray-300 transition"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        id="sobre-mi"
        className="min-h-screen bg-[#C6AC8F] flex items-center justify-center p-8"
      >
        <div className="bg-[#C6AC8F] flex flex-col md:flex-row items-center justify-center p-8 gap-8">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-4 font-imbue" style={{ transform: "scaleY(2)" }}>
              SOBRE MI
            </h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              recusandae non neque vitae obcaecati autem nisi excepturi dolor
              aperiam explicabo at, facere voluptatum alias ipsa consequuntur
              similique magnam doloribus odit?
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img className="rounded-lg h-64 w-64" src={nico1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
