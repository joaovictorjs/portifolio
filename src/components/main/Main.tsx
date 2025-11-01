import About from "./About";
import Projects from "./Projects";

export default function Main() {
  return (
    <main className="flex flex-col gap-8">
      <About />
      <Projects />
    </main>
  );
}
