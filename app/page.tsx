import About from "@/components/About";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Certification />
      <Projects />
      <Contact />
    </>
  );
}
