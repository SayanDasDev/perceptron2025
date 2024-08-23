import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@/styles/gallery.css';

import { EffectCoverflow } from 'swiper/modules';
import { galleryData } from "@/config/gallery";
import Image from "next/image";
import useFonts from "@/hooks/useFonts";


const Gallery = () => {

  const { sub, } = useFonts();

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="text-slate-200 h-full space-y-4 sm:space-y-1">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper_slide">
              <Image fill  src={item.href} alt={item.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex px-2 flex-col md:items-end md:flex-row">
        <p className={` font-size-lg`}>Gallery </p>
        <div className={`bg-white h-2 flex-1 max-sm:hidden skew-x-[-45deg] relative`}>
          <div className="absolute right-0 bottom-0 h-20 flex">
            <div className={`bg-white w-2 h-full`}></div>
            <div className={`bg-slate-950 w-8 h-full`}></div>
            <div className={`bg-white w-8 h-full`}></div>
            <div className={`bg-slate-950 w-8 h-full`}></div>
            <div className={`bg-white w-8 h-full`}></div>
            <div className={`bg-slate-950 w-8 h-full`}></div>
            <div className={`bg-white w-8 h-full`}></div>
            <div className={`bg-slate-950 w-8 h-full`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
