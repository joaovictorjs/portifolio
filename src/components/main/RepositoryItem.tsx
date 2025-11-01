import type { Repository } from "../../types/repository";

export default function RepositoryItem(props: Repository) {
  return (
    <div className="flex flex-col">
      <a className="text-green-300" href={props.html_url}>
        {props.name} 🔗
      </a>
      <p className="text-neutral-500">{props.language}</p>
      <p className="overflow-clip pt-5 text-ellipsis whitespace-break-spaces text-neutral-500">
        {props.description}
      </p>
    </div>
  );
}
