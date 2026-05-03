import { FC } from "react";

 type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  background?: string;
  opacity?: number;
  rotation?: number;
  shadow?: number;
  flipHorizontal?: boolean;
  flipVertical?: boolean;
  padding?: number;
};

interface SkillItemProps {
    name: string,
    Icon?: FC<IconProps>
}

export function SkillItem({ name }: SkillItemProps) {
  return (
    <div className="flex items-center justify-center px-3 border rounded-sm bg-accent-foreground text-accent">
      <span className="font-sans text-sm font-medium text-pretty text-accent">{name}</span>
    </div>
  );
}