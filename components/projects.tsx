import HoverAnimatedText from "./hover-animated-text";
import { ProjectList } from "./project-list";

export function Projects() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 mt-3">
            <HoverAnimatedText
                text="My Projects"
                mainClassName="px-6 py-2 w-36 text-white bg-black dark:text-black dark:bg-white rounded-xl text-center"
            />
            <div className="flex flex-col items-center justify-center gap-2 leading-none">
                <h1 className="sm:text-[3.25rem] text-[1.5rem] font-black text-center tracking-tighter">
                    Check out my latest work
                </h1>
                <span className="w-full h-full max-w-xl text-base leading-7 text-center text-muted-foreground sm:text-lg">
                    I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </span>
            </div>
            <ProjectList />
            <div className="w-screen h-screen"></div>
        </div>
    ) 
}