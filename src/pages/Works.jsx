import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tattoo1 from "../assets/tattoo1.webp";
import tattoo2 from "../assets/tattoo2.webp";
import tattoo3 from "../assets/tattoo3.webp";
import tattoo4 from "../assets/tattoo4.webp";

const tattoos = [
  { img: tattoo1 },
  { img: tattoo2 },
  { img: tattoo3 },
  { img: tattoo4 },
];

const NextArrow = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      className="absolute -right-14 top-1/2 -translate-y-1/2 bg-[#EAE0D5] p-3 rounded-full cursor-pointer z-10 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#5E503F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </motion.div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      className="absolute -left-14 top-1/2 -translate-y-1/2 bg-[#EAE0D5] p-3 rounded-full cursor-pointer z-10 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#5E503F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </motion.div>
  );
};
function Works() {
  /* Configuración de la librería slider */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const scrollToSection = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToSection}
      className="bg-[#5E503F] flex justify-center items-center flex-col pb-10 "
    >
      {/* Titulo */}
      <div
        id="trabajos"
        className="flex items-center h-32  text-5xl text-[#EAE0D5] font-imbue"
      >
        <h2>Trabajos</h2>
      </div>
      {/* Utilización de un slider para la reenderización de las imágenes */}
      <div className="relative w-full max-w-4xl lg:h-full">
        <Slider {...settings}>
          {tattoos.map(({ img }, index) => (
            <div key={index}>
              <img
                src={img}
                alt="Tatuaje ejemplo"
                className="w-full h-[500px] lg:h-[600px] object-cover lg:rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Works;
