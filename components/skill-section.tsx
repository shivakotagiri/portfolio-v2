import { skills } from "@/public/lib/skills"
import { JSX } from "react";

export function SkillSection() {
    return (
        <div className="flex flex-col gap-5">
            <h1>Skills</h1>
            <div>
                { skills.map((skill, idx) => (
                    <SkillItem key={idx} name={skill?.name || ""} Icon={skill?.Icon} />
                ))}
            </div>
        </div>
    )
}

export function SkillItem({ name, Icon }: { name: string, Icon: (({ size, color, strokeWidth, background, opacity, rotation, shadow, flipHorizontal, flipVertical, padding }: {
    size?: undefined;
    color?: string | undefined;
    strokeWidth?: number | undefined;
    background?: string | undefined;
    opacity?: number | undefined;
    rotation?: number | undefined;
    shadow?: number | undefined;
    flipHorizontal?: boolean | undefined;
    flipVertical?: boolean | undefined;
    padding?: number | undefined;
}) => JSX.Element) | undefined }) {
    if(!Icon) return;
    return (
        <div className="flex border p-2 gap-2">
            <Icon />
            <span>{ name }</span>
        </div>
    )
}