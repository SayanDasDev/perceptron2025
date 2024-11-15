import React from "react";
import SectionWrapper from "./section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/config/faqs";

const FAQs = () => {
  return (
    <SectionWrapper name="FAQs" className="w-full py-40 flex flex-col items-center justify-center gap-4">
      <div className="text-xl tracking-[1rem] text-center text-primary-foreground">
        FAQ
      </div>
      <div className="text-6xl text-center text-primary">
        Frequently Asked Questions
      </div>
      <Accordion type="single" collapsible className="max-w-[800px] w-[75vw] text-primary-foreground pt-10 text-left">
        {faqData.map((faq, i) => (
          <AccordionItem key={i} value={`item ${i}`}>
            <AccordionTrigger className="hover:text-primary [&[data-state=open]]:text-primary text-xl text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal text-primary-foreground/70">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FAQs;
