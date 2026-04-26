import { ProjectCard } from "./project-card";
import { ProjectList } from "./project-list";

export function Projects() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center gap-5 mt-3">
            <div className="px-6 py-2 w-36 text-black bg-white rounded-xl">
                My Projects
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="sm:text-4xl text-[1.5rem] font-black text-center tracking-tighter">
                    Check out my latest work
                </h1>
                <span className="text-muted-foreground text-center w-full h-full sm:text-lg leading-7 max-w-lg text-base">
                    I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </span>
            </div>
            <ProjectList />
            <div className="h-screen w-screen"></div>
        </div>
    ) 
}