<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    label: string;
    children: Snippet;
  }

  const { label, children }: Props = $props();
</script>

<div class="p-8 border-l-2 my-2 border-l-neutral-500 flex flex-col gap-4">
  <p>{label}</p>
  {@render children()}
</div>
