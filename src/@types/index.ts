import { ReactNode, RefObject } from "react";
import { ThemeType } from "../theme";

export type ControllerRefType = {
  changeSpeed: (value: number) => void;
  play: (value: boolean) => void;
};

export type VideoPlayerPropsType = {
  src: string;
  width?: string;
  height?: string;
  customTheme?: ThemeType;
  controllerRef?: RefObject<ControllerRefType>;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  autoPlay?: boolean;
  playIcon?: ReactNode;
  pauseIcon?: ReactNode;
  showPlayIcon?: boolean;
  loading?: boolean;

  loadingComp?: ReactNode | null;
  topRightContainer?: ReactNode | null;
  topLeftContainer?: ReactNode | null;

  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onSeeking?: () => void;
  onSeeked?: () => void;
  onEnd?: () => void;
};
