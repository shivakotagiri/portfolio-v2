import { Dock } from "@/components/dock";
import { Education } from "@/components/education";
import Grainient from "@/components/Grainient";
import { PortfolioHeader } from "@/components/portfolio-header";
import { Projects } from "@/components/projects";
import { SkillSection } from "@/components/skill-section";
import SoftAurora from "@/components/SoftAurora";

export default function HomePage() {
  return (
    <div className="justify-center w-screen items-center min-h-screen flex flex-col">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.9}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0}
        />
      </div>
      <div className="h-full pt-10 sm:p-0 p-6 w-full max-w-155 flex flex-col gap-15 -translate-y-110">
        <PortfolioHeader />
        <Education />
        <SkillSection />
        <Projects />
      </div>
      <Dock  />
    </div>
  );
}
