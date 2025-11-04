<script>
  import TerminalPrompt from "./lib/components/TerminalPrompt.svelte";
</script>

<div class="flex flex-col p-4">
  <TerminalPrompt location="joao@pc: ~/" command="cd ./portifolio" />
  <TerminalPrompt
    location="joao@pc: ~/portifolio"
    command="cat about.txt"
    branch="main"
    showCursor={true}
  />
</div>
