import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Bruno_Ace } from "next/font/google";
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });

const HeroCTA = () => {
  return (
    <div className="hero-cta flex flex-col-reverse col-span-1 md:col-span-2 xl:col-span-1 xl:flex-col gap-6 items-center justify-center">
      <Button
        className={`${font_sub.className} xl:translate-y-[-150%]`}
        variant={"heroCTA"}
        size={"responsiveXL"}
      >
        Register
      </Button>
      <Button
        className={`${font_sub.className} rounded-full w-20 h-20 xl:w-28 xl:h-28 px-0`}
        variant={"heroCTA"}
        size={"responsiveXL"}
      >
        <Play className="w-8 h-8 xl:w-12 xl:h-12" />
      </Button>
    </div>
  );
};

export default HeroCTA;
