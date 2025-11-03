<script>
  import { CommandLine } from "./lib/command-line";
  import Command from "./lib/command-line/Command.svelte";
</script>

<div class="flex flex-col p-4">
  <CommandLine.Root>
    <CommandLine.Dir value="joao@pc: ~/" />
    <CommandLine.ArrowSeparator />
    <CommandLine.Command value="cd ./portifolio" />
  </CommandLine.Root>

  <CommandLine.Root>
    <CommandLine.Dir value="joao@pc: ~/portifolio" />
    <CommandLine.Branch value="main" />
    <CommandLine.ArrowSeparator />
    <CommandLine.Command value="cat about.txt" showCursor={true} />
  </CommandLine.Root>
</div>
