import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import Layout from "antd/es/layout/layout";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
    </main>
  );
}
