import { Bungee, Genos, Teko } from "next/font/google";
import Image from "next/image";
const font = Bungee({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="hero w-screen h-screen">
      <p
        className={`${font.className} absolute z-50 text-6xl text-white font-extrabold whitespace-nowrap`}
      >
        PERCEPTRON 3.0
      </p>
    </main>
  );
}
