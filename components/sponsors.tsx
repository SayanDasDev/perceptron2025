import { cn } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import useFonts from "@/hooks/useFonts";

const Sponsors = () => {

  const {mono} = useFonts();

  return (
    <SectionWrapper
      name="sponsors"
      className="flex flex-col justify-center items-center gap-4"
    >
      <div className={cn("text-8xl uppercase tracking-widest text-center text-primary", mono.className)}>
        Sponsors
      </div>
      <div className="text-xl text-center text-primary-foreground">
        Supporting Our Ventures
      </div>
      <div className="grid md:grid-cols-4 gap-8 w-full pt-8 xl:px-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="text-xl text-primary-foreground hover:text-primary flex items-center justify-center min-h-40 rounded-md relative border border-primary/10 bg-gradient-to-b from-primary from-[5%] to-[5%] transition-all duration-500 ease-in-out  bg-[length:200%_95%] bg-top hover:bg-bottom"
          >
            Microsoft
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Sponsors;
