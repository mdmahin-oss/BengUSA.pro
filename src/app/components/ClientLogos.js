"use client"; // for Next.js App Router if using animation

import { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";

const logos = [
  "/logos/babiesrus.png",
  "/logos/xerox.png",
  "/logos/sony.png",
  "/logos/pg.png",
  "/logos/nyu.png",
  "/logos/nfl.png",
  "/logos/hp.png",
  "/logos/miami.png",
  "/logos/grenco.png",
  "/logos/logo10.png",
  "/logos/enchant.png",
];

export default function ClientLogos() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="logos bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="logos-slide">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="inline-block min-w-[140px] max-w-[140] min-h-[35px] max-h-[35px] ">
            <Image
              src={logo}
              alt={`Logo ${i}`}
              width={60}
              height={60}
              className=" animate-infinite-scroll object-contain grayscalhoe ver:grayscale-0 transition"
            />
          </div>
        ))}
    </div>


      <div className="logos-slide">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="inline-block min-w-[140px] max-w-[140] min-h-[35px] max-h-[35px]">
            <Image
              src={logo}
              alt={`Logo ${i}`}
              width={60}
              height={60}
              className=" animate-infinite-scroll object-contain grayscalhoe ver:grayscale-0 transition"
            />
          </div>
        ))}
   
    </div>
  </div>
  );
}
