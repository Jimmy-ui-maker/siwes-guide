import About from "@/components/About";
import LogBookFill from "@/components/LogBookFill";
import Projects from "@/components/Projects";
import Report from "@/components/Report";
import States from "@/components/States";
import WelcomePage from "@/components/WelcomePage";

export default function Home() {
  return (
    <>
      <WelcomePage />
      <About />
      <States />
      <LogBookFill />
      <Projects />
      <Report />
    </>
  );
}
