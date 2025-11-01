import type { Repository } from "../types/repository";

const ENDPOINT = "https://api.github.com/users/joaovictorjs/repos";

export async function fetchRepositories(): Promise<Repository[]> {
  const response = await fetch(ENDPOINT);

  if (!response.ok)
    throw new Error(
      "Something went wrong while getting repositories from github...",
    );

  const data = await response.json();
  const repositories = data.map((repo: Repository) => ({
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
  }));

  return repositories;
}
