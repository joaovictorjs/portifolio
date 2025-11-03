<script lang="ts">
  interface CommandProps {
    value: string;
    showCursor?: boolean;
  }

  const { value, showCursor }: CommandProps = $props();
</script>

<p class="text-neutral-50">{value}</p>

{#if showCursor}
  <div class="w-2 h-full border motion-safe:animate-blink">&nbsp;</div>
{/if}
