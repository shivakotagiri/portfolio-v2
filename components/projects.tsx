import { ProjectCard } from "./project-card";

export function Projects() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center gap-5 mt-3">
            <div className="px-6 py-2 w-36 text-black bg-white rounded-xl">
                My Projects
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="text-4xl font-bold">
                    Check out my latest project
                </h1>
                <span className="text-muted-foreground text-center w-full h-full text-lg leading-7 max-w-lg">
                    I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </span>
            </div>
            <ProjectCard />
            <div className="h-screen w-screen"></div>
        </div>
    ) 
}