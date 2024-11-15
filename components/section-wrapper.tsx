import useFonts from "@/hooks/useFonts";
import { cn } from "@/lib/utils";
import React from "react";

const SectionWrapper = ({
  name,
  children,
  className,
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
}) => {

  const {sub} = useFonts();

  return (
    <section id={name} className={cn("w-screen min-h-screen bg-slate-950 p-6", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
