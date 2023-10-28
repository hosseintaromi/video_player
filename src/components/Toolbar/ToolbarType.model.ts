import { ReactNode } from "react";

export type ToolbarPropsType = {
  playState: boolean;
  playIcon: ReactNode;
  pauseIcon: ReactNode;
  playClicked: (showPlayIcon: boolean) => void;
};
export type ChangeRangeSelectType = {
  calcInputVal: (e: number, updateParent: boolean) => void;
  setVideoSlider: React.Dispatch<React.SetStateAction<number>>;
  videoSlider: number;
};
