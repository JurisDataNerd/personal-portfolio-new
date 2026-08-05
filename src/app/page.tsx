import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
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
        <Projects />
        <Quote />
        <Services />
        <Contact />
      </main>
    </>
  );
}
