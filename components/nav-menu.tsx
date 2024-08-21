"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { docsConfig } from "@/config/docs";
import Link from "next/link";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "@/styles/menu.css"
import useFonts from "@/hooks/useFonts";

const NavMenu = () => {

  const {font_sub} = useFonts();

  const container = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({paused: true})
    .to('.menu-overlay', {
      duration: 0.25,
      height: '600px',
      maxWidth: '400px',
      width: 'calc(100vw - 24px)',
    })
    .set('.nav-menu-links', {y: 20})
    .to('.nav-menu-links', {
      duration: 0.1,
      y: 0,
      opacity: 1,
      stagger: 0.05,
    })
  }, {scope: container})

  useEffect(() => {
      if(isMenuOpen) {
        tl.current?.play();
      } else {
        tl.current?.reverse();
      }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="" ref={container}>
      <Button onClick={toggleMenu} variant={"ghostNoHover"} className={`${font_sub.className} xl:hidden fixed top-5 right-3 z-[100] text-background/50 text-xl`}>{isMenuOpen ? `Close` : `Menu`}</Button>
      <div className="menu-overlay xl:hidden menu-bg-glassmorphic border border-background/20 fixed top-4 right-3 h-12 w-[100px] rounded-2xl z-[90]" />
      <div className={`${font_sub.className} xl:hidden fixed top-0 right-0 translate-x-[calc(-50vw+50%)] min-[425px]:translate-x-[-110px] translate-y-[15%] flex flex-col gap-4 items-center justify-center p-6 text-2xl text-gray-300 z-[95]`}>
        {docsConfig.navbarItems.map((item) => (
          <Link className={`nav-menu-links opacity-0`} href={item.href} key={item.title}>{item.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default NavMenu
