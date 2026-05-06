import { ProjectCard } from "./project-card";
import { projects } from "@/lib/projects";

export function ProjectList() {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
}