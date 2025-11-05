<script lang="ts">
  import { onMount } from "svelte";
  import { fetchRepositories } from "../clients/githubClient";
  import type { GithubRepository } from "../types/githubRepository";

  let repositories: GithubRepository[] = $state([]);
  let isLoading = $state(true);

  onMount(async () => {
    try {
      repositories = await fetchRepositories();
    } finally {
      isLoading = false;
    }
  });
</script>

<div
  class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-4"
>
  {#if isLoading}
    <p>Loading...</p>
  {:else}
    {#each repositories as repo}
      <a class="card" href={repo.html_url}>
        <h6>{"💻 " + repo.name}</h6>

        {#if repo.language}
          <p>{repo.language}</p>
        {/if}

        {#if repo.description}
          <p class="text-neutral-400 wrap-break-word">{repo.description}</p>
        {/if}
      </a>
    {/each}
  {/if}
</div>
