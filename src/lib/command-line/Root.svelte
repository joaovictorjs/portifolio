<script lang="ts">
  const { children } = $props();
</script>

<div class="flex flex-row gap-2">
  {@render children()}
</div>
