import useFonts from "@/hooks/useFonts";
import React from "react";

const HeroTitle = () => {

  const { font_sub_cap, font_main } = useFonts();

  return (
    <div className="hero-title-text flex flex-col text-center">
      <p
        className={`${font_sub_cap.className} font-size-sm leading-snug text-gray-50 font-extrabold whitespace-nowrap`}
      >
        The techfest at RKMVERI
      </p>
      <p
        className={`${font_main.className} hero-text font-size-lg text-gray-50 font-extrabold leading-snug`}
      >
        PERCEPTRON 2025
      </p>
    </div>
  );
};

export default HeroTitle;
