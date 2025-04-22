import React from "react";
import circle from "../assets/circle.png";
import Carousel from "./Carousel";

const links = [
  { name: "Thanks1", img: circle },
  { name: "Thanks2", img: circle },
  { name: "Thanks3", img: circle },
  { name: "Thanks4", img: circle },
];

function Footer() {
  return (
    <div className="bg-[#5E503F]">
      {/* Carousel social links */}
      <section className="bg-[#EAE0D5] h-32 w-full flex items-center justify-center">
        <Carousel />
      </section>
      <section className="h-64 flex flex-col items-center justify-center gap-8">
        <span className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-8 lg:gap-16">
          {links.map((link) => (
            <span key={link.name}>
              <img src={link.img} alt={link.name} className="h-16 lg:h-28" />
            </span>
          ))}
        </span>
      </section>
      {/* Footer copyright div */}
      <section className="bg-[#EAE0D5] h-32 flex items-center justify-center text-sm">
        <p>© CORIA NICOLAS TATTOO 2024</p>
      </section>
    </div>
  );
}

export default Footer;
