import { skills } from "@/public/lib/skills"
import { SkillItem } from "./skill-item";

export function SkillSection() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Skills</h1>
            <div className="flex flex-wrap gap-2">
                { skills.map((skill, idx) => (
                    <SkillItem key={idx} name={skill?.name || ""} />
                ))}
            </div>
        </div>
    )
}

