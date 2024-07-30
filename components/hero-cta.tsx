import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Bruno_Ace } from "next/font/google";
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });

const HeroCTA = () => {
  return (
    <div className="hero-cta flex flex-col-reverse xl:flex-col gap-6 items-center justify-center">
      <Button
        className={`${font_sub.className} xl:translate-y-[-150%]`}
        variant={"heroCTA"}
        size={"xl"}
      >
        Register
      </Button>
      <Button
        className={`${font_sub.className} rounded-full w-28 h-28 px-0`}
        variant={"heroCTA"}
        size={"xl"}
      >
        <Play size={48} />
      </Button>
    </div>
  );
};

export default HeroCTA;
