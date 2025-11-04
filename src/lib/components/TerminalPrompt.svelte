<script lang="ts">
  interface Props {
    location: string;
    command: string;
    branch?: string;
    showCursor?: boolean;
  }

  const { location, command, branch, showCursor }: Props = $props();
</script>

<div class="flex flex-row gap-2 items-center">
  <p>{location}</p>
  {#if branch}
    <p class="text-orange-400">{branch}</p>
  {/if}
  <p>{" > "}</p>
  <p class="text-neutral-50">{command}</p>
  {#if showCursor}
    <div class="w-2 h-full border motion-safe:animate-blink">&nbsp;</div>
  {/if}
</div>
