import React from "react";
import { docsConfig } from "@/config/docs";
import { Bruno_Ace } from "next/font/google";
import Link from "next/link";
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });


const Navbar = () => {
  return (
    <nav className="max-xl:hidden">
      <ul className={`${font_sub.className} flex justify-around px-32 py-8 text-gray-50 text-lg`}>
        {docsConfig.navbarItems.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
