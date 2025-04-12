import React from "react";
import circle from "../assets/circle.png";

const links = [
  { name: "Thanks1", img: circle },
  { name: "Thanks2", img: circle },
  { name: "Thanks3", img: circle },
  { name: "Thanks4", img: circle },
];

function Footer() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-[#5E503F] h-full flex flex-col justify-center items-center text-center">
        <div className="grid grid-cols-2 gap-4 lg:gap-32 pb-5 pt-5 lg:flex lg:pb-0 lg:pt-0 lg:h-64 items-center">
          {links.map((link) => (
            <span key={link.name}>
              <img src={link.img} alt={link.name} className="h-16 lg:h-32" />
            </span>
          ))}
        </div>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia tempora
        </span>
      </div>
      <div className="bg-[#EAE0D5] h-32 flex items-center justify-center text-sm">
        <p>© CORIA NICOLAS TATTOO 2024</p>
      </div>
    </div>
  );
}

export default Footer;
