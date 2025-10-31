import type { Repository } from "../types/repository";

const ENDPOINT = "https://api.github.com/users/joaovictorjs/repos";

export async function fetchRepositories(): Promise<Repository[]> {
  const response = await fetch(ENDPOINT);
  if (!response.ok)
    throw new Error(
      "Something went wrong while getting repositories from github..."
    );
  const data = await response.json();
  return data.map((repo: Repository) => ({
    name: repo.name,
    fork: repo.fork,
    url: repo.url,
    created_at: repo.created_at,
    description: repo.description,
    language: repo.language,
  }));
}
