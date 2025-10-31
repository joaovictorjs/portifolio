import { fetchRepositories } from "../clients/githubClient";
import type { Repository } from "../types/repository";

const REPOSITORIES_KEY = "repositories";
const EXPIRES_IN_KEY = "expiresIn";
const CACHE_DURATION_MS = 2 * 60 * 1000;

export async function getRepositories(): Promise<Repository[]> {
  const expiresIn = localStorage.getItem(EXPIRES_IN_KEY);
  const repoData = localStorage.getItem(REPOSITORIES_KEY);

  if (repoData && expiresIn && Number.parseInt(expiresIn) > Date.now()) {
    return JSON.parse(repoData) as Repository[];
  }

  const repositories = await fetchRepositories();
  const newExpiryTime = (Date.now() + CACHE_DURATION_MS).toString();

  localStorage.setItem(REPOSITORIES_KEY, JSON.stringify(repositories));
  localStorage.setItem(EXPIRES_IN_KEY, newExpiryTime);

  return repositories;
}
