import Certifications from "@/components/Certifications/Certifications";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Layout from "antd/es/layout/layout";

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
