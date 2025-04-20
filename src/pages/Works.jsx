import React, { useEffect, useRef, useState } from "react";
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
  /* Conditions for the arrows */
  const containerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);

  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    setAtStart(scrollLeft <= 0);
  };

  /* Scroll function */
  const scroll = (direction) => {
    const container = containerRef.current;
    const width = container.offsetWidth;
    container.scrollBy({
      left: direction === "next" ? width : -width,
      behavior: "smooth",
    });
  };

  /* Event listener */
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-center h-32 bg-[#5E503F] text-5xl text-[#EAE0D5] font-imbue">
        <h2>Trabajos</h2>
      </div>
      <div className="scrollbar-none">
        <ul ref={containerRef} className="overflow-x-scroll sm:scroll-snap-x flex">
          {tattoos.map(({ img }, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-full snap-start lg:w-1/4 "
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover brightness-50"
              />
            </li>
          ))}
        </ul>
        {/* Flechas with scroll-snap and states*/}
        {!atStart && (
          <button
            onClick={() => scroll("prev")}
            className="absolute left-2 top-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="#C6AC8F"
              className="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>
          </button>
        )}
        <button
          onClick={() => scroll("next")}
          className="absolute right-2 top-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="#C6AC8F"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Works;
