import { Dock } from "@/components/dock";
import { Education } from "@/components/education";
import { PortfolioHeader } from "@/components/portfolio-header";
import { SkillSection } from "@/components/skill-section";

export default function Home() {
  return (
    <div className="flex justify-center items-start min-h-screen pt-24 ">
      <div className="h-full w-full max-w-160 flex flex-col gap-15">
        <PortfolioHeader />
        <Education />
        <SkillSection />
        <div className="w-full h-full flex justify-center items-center">
          <Dock />
        </div>
      </div>
    </div>
  );
}
