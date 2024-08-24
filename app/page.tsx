import Projects from "@/components/Projects";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import WorkExperience from "@/components/experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Skills />
      <WorkExperience/>
      <Projects />
      <Education />
    
      <Contact />
    </>
  );
}
