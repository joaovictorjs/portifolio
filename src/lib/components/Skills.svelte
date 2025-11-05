<script lang="ts">
  interface Skill {
    name: string;
    technologies: string[];
  }

  const skills: Skill[] = [
    { name: "🧠 Backend", technologies: ["ASP.NET Core", "EF core"] },
    { name: "🗄️ Database", technologies: ["PostgreSQL", "MariaDB", "MySQL"] },
    {
      name: "🎨 Frontend",
      technologies: [
        "React",
        "Svelte",
        "Blazor",
        "Razor",
        "Tailwindcss",
        "WPF",
        "Avalonia",
      ],
    },
    {
      name: "⚙️ DevOps",
      technologies: ["Github Actions", "Azure Pipelines"],
    },
    {
      name: "🧰 Tools",
      technologies: ["Linux", "Git", "Docker"],
    },
  ];
</script>

<div
  class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-stretch gap-4"
>
  {#each skills as skill}
    <div class="card">
      <h6>{skill.name}</h6>

      <div class="flex flex-row flex-wrap gap-1">
        {#each skill.technologies as tech}
          <p
            class="after:content-['•'] last:after:content-none after:mx-2 text-neutral-400 wrap-break-word"
          >
            {tech}
          </p>
        {/each}
      </div>
    </div>
  {/each}
</div>
