import React from "react";
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

function Works() {
  /* Configuración de la librería slider */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const scrollToSection = () => {
    const section = document.getElementById("");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div onClick={scrollToSection} className="bg-[#5E503F] flex justify-center items-center flex-col pb-10 ">
      {/* Titulo */}
      <div className="flex items-center h-32  text-5xl text-[#EAE0D5] font-imbue">
        <h2>Trabajos</h2>
      </div>
      {/* Utilización de un slider para la reenderización de las imágenes */}
      <div className="w-full max-w-4xl lg:h-full">
        <Slider {...settings}>
          {tattoos.map(({ img }, index) => {
            return (
              <div key={index}>
                <img src={img} alt="Tatuaje ejemplo del trabajo de Nicolás Coria" className="w-full h-[500px] lg:h-[600px] object-cover lg:rounded-lg"/>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Works;
