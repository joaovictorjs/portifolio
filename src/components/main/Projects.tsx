import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import type { Repository } from "../../types/repository";
import { getRepositories } from "../../services/githubService";
import RepositoryItem from "./RepositoryItem";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string>();

  console.log("Hello");

  useEffect(() => {
    if (isLoading === false) {
      setIsLoading(true);
    }

    const getRepositoriesAsync = async () => {
      try {
        const repos = await getRepositories();
        setRepositories(repos);
      } catch (exception: unknown) {
        if (exception instanceof Error) {
          setError(exception.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getRepositoriesAsync();
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col gap-6 border-t pt-8 dark:border-t-neutral-800 [&>div]:not-last:border-b [&>div]:not-last:border-b-neutral-800 [&>div]:not-last:pb-5"
    >
      {error ? (
        <strong className="w-full text-center text-red-500">{error}</strong>
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <p className="text-neutral-500">Projetos</p>

              {repositories.map((repo) => (
                <RepositoryItem key={repo.name} {...repo} />
              ))}
            </>
          )}
        </>
      )}
    </section>
  );
}
