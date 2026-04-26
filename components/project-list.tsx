import { ProjectCard } from "./project-card";

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5">
      {[1, 2].map((ele) => (
        <ProjectCard key={ele} />
      ))}
    </div>
  );
}