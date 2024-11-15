import SectionWrapper from "./section-wrapper";

const Sponsors = () => {
  return (
    <SectionWrapper
      name="sponsors"
      className="flex flex-col justify-center items-center gap-4"
    >
      <div className="w-full text-primary-foreground/80 text-xl tracking-widest font-bold">
        SPONSORS
      </div>
      <div className="w-full text-primary text-4xl tracking-wide">
        Supporting our venture
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
