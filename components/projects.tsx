import HoverAnimatedText from "./hover-animated-text";
import { ProjectList } from "./project-list";

export function Projects() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center gap-5 mt-3">
            <HoverAnimatedText
                text="My Projects"
                mainClassName="px-6 py-2 w-36 text-white bg-black dark:text-black dark:bg-white rounded-xl text-center"
            />
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