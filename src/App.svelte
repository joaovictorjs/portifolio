<script>
  import TerminalPrompt from "./lib/components/TerminalPrompt.svelte";
  import TerminalOutput from "./lib/components/TerminalOutput.svelte";
  import AboutMe from "./lib/components/AboutMe.svelte";
  import Skills from "./lib/components/Skills.svelte";
  import Projects from "./lib/components/Projects.svelte";
  import Links from "./lib/components/Links.svelte";
</script>

<div
  class="flex flex-col p-4 w-full sm:max-w-4/5 absolute left-1/2 -translate-x-1/2 md:max-w-3/4 lg:max-w-1/2"
>
  <TerminalPrompt location="joao@pc: ~/" command="cd ./portifolio" />
  <TerminalPrompt
    location="joao@pc: ~/portifolio"
    command="cat about.txt"
    branch="main"
    showCursor={true}
  />
  <TerminalOutput label="[ABOUT ME]">
    <AboutMe />
  </TerminalOutput>

  <TerminalPrompt
    location="joao@pc: ~/portifolio"
    command="cat skills.txt"
    branch="main"
  />
  <TerminalOutput label="[SKILLS]">
    <Skills />
  </TerminalOutput>

  <TerminalPrompt
    location="joao@pc: ~/portifolio"
    command="cat projects.txt"
    branch="main"
  />
  <TerminalOutput label="[PROJECTS]">
    <Projects />
  </TerminalOutput>

  <TerminalPrompt
    location="joao@pc: ~/portifolio"
    command="cat links.txt"
    branch="main"
  />
  <TerminalOutput label="[LINKS]">
    <Links />
  </TerminalOutput>
</div>
