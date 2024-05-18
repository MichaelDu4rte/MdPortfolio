import Intro from "./components/intro";
import Divider from "./components/divider";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Intro></Intro>
      <Divider></Divider>
      <About></About>
      <Divider></Divider>
      <Projects></Projects>
      <Divider></Divider>
      <Skills></Skills>
      <Divider></Divider>

      <Experience></Experience>
    </main>
  );
}
