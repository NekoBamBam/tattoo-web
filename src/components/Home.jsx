import React from "react";
import fondo1 from "../assets/fondo1.jpeg";
import nico1 from "../assets/nico1.jpg"

function Home() {
  return (
    <div className="bg-[#C6AC8F]">
      <img className="h-full w-full opacity-65" src={fondo1} alt="" />
      <div className="min-h-screen bg-[#C6AC8F] flex items-center justify-center p-8 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 underline">SOBRE MI</h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            recusandae non neque vitae obcaecati autem nisi excepturi dolor
            aperiam explicabo at, facere voluptatum alias ipsa consequuntur
            similique magnam doloribus odit?
          </p>
          <img className="mx-auto mt-6 rounded-lg h-56 w-56" src={nico1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
