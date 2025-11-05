import type { GithubRepository } from "../types/githubRepository";

const ENDPOINT = "https://api.github.com/users/joaovictorjs/repos";

export async function fetchRepositories(): Promise<GithubRepository[]> {
  const response = await fetch(ENDPOINT);

  if (!response.ok)
    throw new Error(
      "Something went wrong while getting repositories from github...",
    );

  const data = await response.json();
  const repos = data.map((repo: GithubRepository) => ({
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
  }));

  return repos;
}
