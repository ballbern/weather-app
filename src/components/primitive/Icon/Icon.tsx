import { StyledIcon } from "./styles";

type IconType = {
  icon: string;
  alt: string;
  size?: number;
  width?: number;
  height?: number;
};

export const Icon = ({ icon, size, alt, width, height }: IconType) => {
  return (
    <StyledIcon
      src={`https://openweathermap.org/img/wn/${icon}@${size ?? "2"}x.png`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
