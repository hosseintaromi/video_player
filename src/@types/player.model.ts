import Hls from "hls.js";
import { ReactNode } from "react";
export interface PlayerContextType {
  setVideoRef: (ref: HTMLVideoElement) => void;
  getVideoRef: () => HTMLVideoElement | undefined;
  togglePlay?: () => void;
  listenPlayPause?: (listener: (play: boolean) => void) => void;
  loadVideo?: (src: string) => void;
  config?: PlayerObjectType;
  speeds?: number[];
  hls?: Hls;
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
  onReady: "onReady";
  onChangeSetting: 'onChangeSetting'
};

export interface PlayerConfigType {
  onUpdateTime?: (e: OnUpdateTimeType) => void;
  // FIXME: we should fix this types
  onEnd?: (e: OnUpdateTimeType) => void;
  onLoading?: (e: boolean) => void;
  onPlayPause?: (e: OnUpdateTimeType) => void;
  onUpdateBuffer?: (e: number) => void;
  onChangeVolume?: (e: OnUpdateTimeType) => void;
  onChangeMute?: (e: boolean) => void;
  onReady?: () => void;
  locale?: PlayerLocaleType;
  icons?: IconsType;
  loop?: boolean;
  speeds?: number[];
  style?: StyleType;
  autoPlay?: boolean;
  timeForHideEl?: number;
  type: "HLS" | "MP4";
  qualities: number[],
  audioTracks: string[],
  subTitle: string[],
  keyControl: boolean
}

export interface PlayerObjectType {
  loadVideo: (src: string) => void;
  changeLocale: (locale: PlayerLocaleType) => void;
  speeds?: number[];
  qualities: number[],
  audioTracks: string[],
  subTitle: string[],
  src?: string;
  locale?: PlayerLocaleType;
  icons?: IconsType;
  style?: StyleType;
  autoPlay?: boolean;
  timeForHideEl?: number;
  type: "HLS" | "MP4";
  keyControl: boolean
}

export type GenericEvents<T extends Record<string, string>> = {
  [eventName in keyof T]?: (data?: any) => void;
};

export type StyleType = {
  dir: "rtl" | "ltr";
  iconColor: string;
  settingTextColor: string;
  toolbarBg: string;
  settingBg: string;
  settingBgHover: string;
  rangeFrontBg: string;
  rangeBackBg: string;
  bufferBg: string;
  settingFontSize: string;
  toolbarFontSize: string;
  settingTitleTextColor: string;
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
  autoPlayOn: ReactNode;
  autoPlayOff: ReactNode;
  jumpBack: ReactNode;
  jumpForward: ReactNode;
  mic: ReactNode;
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
