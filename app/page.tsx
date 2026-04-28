import { Dock } from "@/components/dock";
import { Education } from "@/components/education";
import { PortfolioHeader } from "@/components/portfolio-header";
import { Projects } from "@/components/projects";
import { SkillSection } from "@/components/skill-section";
export default function HomePage() {
  return (
    <div className="flex justify-center w-screen items-start min-h-screen sm:p-0 p-6">
      <div className="h-full pt-10 sm:pt-24 w-full max-w-155 flex flex-col gap-15">
        <PortfolioHeader />
        <Education />
        <SkillSection />
        <Projects />
        <Dock baseItemSize={25} maginification={70}  />
      </div>
    </div>
  );
}
