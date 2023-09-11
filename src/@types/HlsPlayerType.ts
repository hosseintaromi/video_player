import { ReactNode, RefObject } from "react";
import { ThemeType } from "../theme";

export type ControllerRefType = {
  changeSpeed: (value: number) => void;
  play: (value: boolean) => void;
};

export type HlsPlayerPropsType = {
  customTheme?: ThemeType;
  controllerRef?: RefObject<ControllerRefType>;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  src: string;
  poster?: string;
  width?: string;
  height?: string;
  autoPlay?: boolean;
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onSeeking?: () => void;
  onSeeked?: () => void;
  onEnd?: () => void;
  topRightContainer?: ReactNode | null;
  topLeftContainer?: ReactNode | null;
};
