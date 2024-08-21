import { Bruno_Ace, Bruno_Ace_SC, Bungee, DM_Sans } from "next/font/google";
const font_main = Bungee({ subsets: ["latin"], weight: ["400"] });
const font_sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const font = DM_Sans({ subsets: ["latin"] });

const useFonts = () => {
  return { font, font_main, font_sub, font_sub_cap }
}

export default useFonts
