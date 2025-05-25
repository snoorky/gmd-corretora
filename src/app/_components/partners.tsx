"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const topLogos = [
  "/images/allianz.png",
  "/images/berkley.png",
  "/images/coris.png",
  "/images/fairfax.png",
  "/images/hdi.png",
  "/images/mapfre.png",
  "/images/odontoprev.png",
  "/images/porto.png",
  "/images/sul-america.png",
  "/images/tokio.png",
  "/images/yelum.png",
];

const bottomLogos = [
  "/images/amil.png",
  "/images/bradesco.png",
  "/images/essor.png",
  "/images/fator.png",
  "/images/junto.png",
  "/images/metlife.png",
  "/images/omint.png",
  "/images/suhai.png",
  "/images/swiss.png",
  "/images/unimed.png",
  "/images/zurich.png",
];

export default function Partners() {
  const topLine = useRef(null);
  const bottomLine = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (topLine.current) {
        gsap.fromTo(
          topLine.current,
          { x: "0%" },
          {
            x: "-50%",
            duration: 50,
            ease: "linear",
            repeat: -1,
          }
        );
      }

      if (bottomLine.current) {
        gsap.fromTo(
          bottomLine.current,
          { x: "-50%" },
          {
            x: "0%",
            duration: 50,
            ease: "linear",
            repeat: -1,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <aside className="w-full bg-white py-10 overflow-hidden">
      <div className="overflow-hidden">
        <div ref={topLine} className="flex w-max">
          {[...topLogos, ...topLogos].map((logo, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center mx-4 transition relative w-32 h-16"
            >
              <Image
                alt={`Logo ${index}`}
                className="absolute object-contain"
                src={logo}
                sizes="(max-width: 768px) 128px"
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden mt-4">
        <div ref={bottomLine} className="flex w-max h-20">
          {[...bottomLogos, ...bottomLogos].map((logo, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center mx-4 transition relative w-32 h-16"
            >
              <Image
                alt={`Logo ${index}`}
                className="absolute object-contain"
                src={logo}
                sizes="(max-width: 768px) 128px"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
