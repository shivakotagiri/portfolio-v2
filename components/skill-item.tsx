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
    Icon: FC<IconProps>
}

export function SkillItem({ name, Icon }: SkillItemProps) {
  return (
    <div className="flex items-center justify-center border py-2 w-25 sm:w-29 px-1 sm:px-2 gap-2 rounded-2xl">
      <Icon size={15} />
      <span className="text-xs">{name}</span>
    </div>
  );
}