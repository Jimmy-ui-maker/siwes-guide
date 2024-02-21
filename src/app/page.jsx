import About from "@/components/About";
import FAQS from "@/components/FAQS";
import FacultyOfScience from "@/components/FacultyOfScience";
import LogBookFill from "@/components/LogBookFill";
import Projects from "@/components/Projects";
import Report from "@/components/Report";
import WelcomePage from "@/components/WelcomePage";

export default function Home() {
  return (
    <>
      <WelcomePage />
      <About />
      <FacultyOfScience />
      <LogBookFill />
      <Projects />
      <FAQS />
      <Report />
    </>
  );
}
