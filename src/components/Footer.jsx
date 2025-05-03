import React from "react";
import Carousel from "./Carousel";
import billy from "../assets/billy.jpg";
import ana from "../assets/ana.jpg";
import omar from "../assets/omar.jpg";
import mari from "../assets/mari.jpg";

const links = [
  { name: "Carabajal A. V.", img: ana },
  { name: "Coria F. O.", img: omar },
  { name: "Carabajal M. R.", img: mari },
  { name: "Negrete O. C.", img: billy },
];

function Footer() {
  return (
    <div className="bg-[#5E503F]">
      {/* Carousel social links */}
      <section className="bg-[#EAE0D5] h-32 w-full flex items-center justify-center">
        <Carousel />
      </section>
      <section className="h-auto flex flex-col items-center justify-center gap-8 py-12">
        <h2 className="text-white text-3xl font-imbue underline">
          Agradecimientos
        </h2>
        <p className="text-white text-center text-base max-w-md">
          Gracias a quienes confiaron en mi y mi trabajo, y me permitieron
          seguir adelante.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-8 lg:gap-16 opacity-75 mt-8">
          {links.map((link) => (
            <div key={link.name} className="flex flex-col items-center gap-2">
              <img
                src={link.img}
                alt={link.name}
                className="h-24 w-24 lg:h-28 lg:w-28 rounded-full object-cover transition duration-300 hover:scale-110"
              />
              <span className="text-white text-sm">{link.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer copyright div */}
      <section className="bg-[#EAE0D5] h-32 flex items-center justify-center text-sm">
        <p className="text-black">© CORIA BLACK TATTOO 2025</p>
      </section>
      <section className="bg-[#22333B] h-12 flex items-center justify-between px-6 text-sm">
        <a
          href="https://github.com/NekoBamBam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Coria Franco Nicolas
        </a>
        <a
          href="https://lawcito.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Negrete Emir Alejo
        </a>
      </section>
    </div>
  );
}

export default Footer;
