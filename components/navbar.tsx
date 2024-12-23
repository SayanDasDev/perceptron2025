import React from "react";
import { docsConfig } from "@/config/docs";
import Link from "next/link";
import useFonts from "@/hooks/useFonts";

const Navbar = () => {

  const { sub } = useFonts()

  return (
    <nav className="max-xl:hidden z-10">
      <ul className={`${sub.className} flex justify-around px-32 py-8 text-gray-50 text-lg`}>
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
