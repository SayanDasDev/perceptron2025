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
    <div className="text-slate-200 h-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper_slide">
              <Image fill  src={item.href} alt={item.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex px-2 flex-col gap-4 md:items-end md:flex-row">
        <p className={` font-size-lg`}>Gallery {activeIndex}</p>
        <p className={`${sub.className} md:pb-3 text-primary/80 font-size-xs`}>{galleryData[activeIndex].description} </p>
      </div>
    </div>
  );
};

export default Gallery;
