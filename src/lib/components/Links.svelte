<script lang="ts">
  interface Link {
    url: string;
    name: string;
  }

  const links: Link[] = [
    { url: "https://github.com/joaovictorjs", name: "🐙 Github" },
    {
      url: "https://www.linkedin.com/in/jo%C3%A3o-victor-justino-de-souza-92116221b/",
      name: "💼 Linkedin",
    },
  ];
</script>

<div class="grid-auto-fit-sm">
  {#each links as link}
    <a class="card" href={link.url} target="_blank" rel="noopener noreferrer">
      <h6>{link.name}</h6>
    </a>
  {/each}
</div>
