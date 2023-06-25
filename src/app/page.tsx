import Certifications from "@/components/Certifications/Certifications";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <Certifications />
    </main>
  );
}
