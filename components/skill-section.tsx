import { skills } from "@/lib/skills"
import { SkillItem } from "./skill-item";

export function SkillSection() {
    return (
        <div className="flex flex-col w-full gap-5">
            <h1 className="text-lg font-bold">Skills</h1>
            <div className="flex flex-wrap w-full gap-1 gap-y-2">
                { skills.map((skill, idx) => (
                    <SkillItem key={idx} name={skill?.name || ""} Icon={skill?.Icon} />
                ))}
            </div>
        </div>
    )
}

