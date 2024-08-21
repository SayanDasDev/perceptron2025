import useFonts from "@/hooks/useFonts";
import { useState } from "react";
import { Button } from "./ui/button";

const About = () => {
  const { font_main, font, font_sub, font_sub_cap } = useFonts();

  const [about, setAbout] = useState<"RKMVERI" | "PERCEPTRON">("RKMVERI");

  const aboutRKMVERI =
    "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI) is a Deemed-to-be-University as declared by Govt. of India under Section 3 of UGC Act, 1956. The Institute is inspired by the teachings of Swami Vivekananda who believed that education is the manifestation of perfection already. The Institute is a leading educational institution in the country with a strong commitment to excellence in education and research. The Institute offers a wide range of programs in the field of arts, science, engineering, management, and law. The Institute is known for its high-quality education, research, and innovation. The Institute is committed to providing a conducive environment for the holistic development of students and faculty. The Institute is dedicated to the promotion of knowledge, wisdom, and service to society.";

  const aboutPERCEPTRON =
    "PERCEPTRON is the annual technical fest of the Department of Computer Science, Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI). The fest is organized by the students and faculty of the Department of Computer Science. The fest aims to provide a platform for students to showcase their technical skills, creativity, and innovation. The fest includes a wide range of events such as coding competitions, hackathons, workshops, seminars, and talks by industry experts. The fest also includes cultural events, sports events, and fun activities. The fest is open to students from all over the country. The fest is a great opportunity for students to learn, explore, and network with like-minded individuals. The fest is a celebration of technology, creativity, and innovation.";

  return (
    <div
      className={`w-full h-full border-subtle !border-t-0 py-12 !border-b-0`}
    >
      <div className="h-full border-subtle !border-l-0 !border-r-0">
        <div
          className={`${font.className} h-[80vh] my-auto sm:h-full flex flex-col p-6 justify-center items-center`}
        >
          <div
            className={`${font_sub_cap.className} font-size-sm tracking-[4rem] leading-[0px] flex flex-wrap items-center justify-center p-4 translate-x-[4%] text-slate-500`}
          >
            ABOUT
          </div>
          <div
            className={`${font_main.className} font-size-lg flex flex-wrap items-center justify-start px-4 mb-6 text-green-400`}
          >
            {about}
          </div>
          <div className="flex flex-1 max-w-[1250px] sm:gap-4">
            <div className="w-[5%] max-sm:hidden rounded-md mt-[18px] h-[3px] bg-green-400"></div>
            <div className="flex flex-col flex-1">
              <p className="text-ellipsis max-sm:px-10 font-size-sm text-justify sm:leading-10 flex-1 overflow-hidden text-slate-300">
                {about == "RKMVERI" ? aboutRKMVERI : aboutPERCEPTRON}
              </p>
              <Button
                className={`${font_sub.className} !text-lg mt-6 w-[320px]`}
                variant={"heroCTA"}
                size={"responsiveXL"}
                onClick={() =>
                  setAbout(about == "RKMVERI" ? "PERCEPTRON" : "RKMVERI")
                }
              >
                About {about == "RKMVERI" ? "PERCEPTRON" : "RKMVERI"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
