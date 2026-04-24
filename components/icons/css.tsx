import { FC } from "react";

export type IconProps = {
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

const Css3Icon: FC<IconProps> = ({
  size = 24,
  color = "#000000",
  strokeWidth = 2,
  background = "transparent",
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
}) => {
  const transforms: string[] = [];

  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push("scaleX(-1)");
  if (flipVertical) transforms.push("scaleY(-1)");

  const viewBoxSize = 361 + padding * 2;
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 361 361"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(" ") || undefined,
        filter:
          shadow > 0
            ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))`
            : undefined,
        backgroundColor: background !== "transparent" ? background : undefined,
      }}
    >
      <path fill="#264DE4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"/><path fill="#2965F1" d="m212.417 314.547l19.86-222.49H128V337.95z"/><path fill="#EBEBEB" d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"/><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z"/><path fill="#FFF" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"/>
    </svg>
  );
};

export default Css3Icon;