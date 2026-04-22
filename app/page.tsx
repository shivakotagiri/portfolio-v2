import { Education } from "@/components/education";
import { PortfolioHeader } from "@/components/portfolio-header";
import { SkillSection } from "@/components/skill-section";

export default function Home() {
  return (
    <div className="flex justify-center items-start min-h-screen pt-24 ">
      <div className="h-full w-full max-w-160 flex flex-col border-red-500 gap-5">
        <PortfolioHeader />
        <Education />
        <SkillSection />
      </div>
    </div>
  );
}
