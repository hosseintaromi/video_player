import Hls from "hls.js";
import { ReactNode } from "react";
export interface PlayerContextType {
  setVideoRef: (ref: HTMLVideoElement) => void;
  getVideoRef: () => HTMLVideoElement | undefined;
  togglePlay?: () => void;
  listenPlayPause?: (listener: (play: boolean) => void) => void;
  hls?: Hls;
  loadVideo?: (src: string) => void;
  config?: PlayerObjectType;
  speeds?: number[];
  listenOnLoad: (() => void)[];
}

export type OnUpdateTimeType = {
  time: number;
  duration: number;
  percentage: number;
};

export type PlayerEventsType = {
  onUpdateTime: "onUpdateTime";
  onUpdateBuffer: "onUpdateBuffer";
  onLoading: "onLoading";
  onPlayPause: "onPlayPause";
  onEnd: "onEnd";
  onChangeLocale: "onChangeLocale";
  onChangeVolume: "onChangeVolume";
  onChangeMute: "onChangeMute";
};

export interface PlayerConfigType {
  onUpdateTime?: (e: OnUpdateTimeType) => void;
  // FIXME: we should fix this types
  onEnd?: (e: OnUpdateTimeType) => void;
  onLoading?: (e: OnUpdateTimeType) => void;
  onPlayPause?: (e: OnUpdateTimeType) => void;
  onUpdateBuffer?: (e: OnUpdateTimeType) => void;
  onChangeVolume?: (e: OnUpdateTimeType) => void;
  onChangeMute?: (e: boolean) => void;
  locale?: PlayerLocaleType;
  icons?: IconsType;
  loop?: boolean;
  speeds?: number[];
  style?: StyleType;
}

export interface PlayerObjectType {
  loadVideo: (src: string) => void;
  changeLocale: (locale: PlayerLocaleType) => void;
  speeds?: number[];
  src?: string;
  locale?: PlayerLocaleType;
  icons?: IconsType;
  style?: StyleType;
}

export type GenericEvents<T extends Record<string, string>> = {
  [eventName in keyof T]?: (data?: any) => void;
};

export type StyleType = {
  dir: "rtl" | "ltr";
  iconColor: string;
  textColor: string;
  toolBarBg: string;
  settingBg: string;
  rangeFrontBg: string;
  rangeBackBg: string;
  bufferBg: string;
  settingFontSize: string;
  toolbarFontSize: string;
};
export type IconsType = {
  setting: ReactNode;
  checkMark: ReactNode;
  arrow: ReactNode;
  play: ReactNode;
  pause: ReactNode;
  volumeUp: ReactNode;
  volumeDown: ReactNode;
  mute: ReactNode;
  picInPic: ReactNode;
  picOutPic: ReactNode;
  fullScreen: ReactNode;
  unFullScreen: ReactNode;
  speed: ReactNode;
  quality: ReactNode;
  subtitle: ReactNode;
  audioTrack: ReactNode;
};

export type PlayerLocaleType = {
  setting_menu_change_speed_title?: string;
  setting_menu_change_quality_title?: string;
  setting_menu_quality_list_item_auto?: string;
  setting_menu_quality_active_list?: string;
  setting_menu_change_audio_track_title?: string;
  setting_menu_change_subtitle?: string;
  setting_menu_subtitle_off?: string;
};
