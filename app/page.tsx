import { About } from "@/components/about";
import { Dock } from "@/components/dock";
import { Education } from "@/components/education";
import { PortfolioHeader } from "@/components/portfolio-header";
import { Projects } from "@/components/projects";
import { SkillSection } from "@/components/skill-section";
import SoftAurora from "@/components/SoftAurora";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen sm:pt-20">
      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={1}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0}
        />
      </div> */}
      <div className="flex flex-col w-full h-full gap-10 p-6 pt-10 sm:p-0 max-w-155 ">
        <PortfolioHeader />
        <About />
        <Education />
        <SkillSection />
        <Projects />
      </div>
      <Dock  />
    </div>
  );
}
