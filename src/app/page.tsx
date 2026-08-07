import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Quote } from "@/components/Quote";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { SectionColorManager } from "@/components/SectionColorManager";

export default function Home() {
  return (
    <>
      <SectionColorManager />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Quote />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

