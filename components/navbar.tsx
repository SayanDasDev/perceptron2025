import React from "react";
import { docsConfig } from "@/config/docs";
import Link from "next/link";
import useFonts from "@/hooks/useFonts";

const Navbar = () => {

  const { font_sub } = useFonts()

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
