import { HlsConfig, Level, MediaPlaylist } from "hls.js";

export type LevelType = Level[];

export type changeHlsLevelType = (level: number) => void;

export type qualityObjType = {
  qualityList: LevelType;
  currentQuality: number;
  changeHlsLevel: changeHlsLevelType;
};

export type UseVideoHlsType = {
  src: string;
  config?: HlsConfig;
  options?: {
    disabled: boolean;
  };
  getHlsSubtitle?: (subsArr: MediaPlaylist[], currentSubtitle: number) => void;
  getHlsAudioTrack?: (audioArr: MediaPlaylist[], currentAudio: number) => void;
  getHlsLevels?: (levels: LevelType) => void;
  getCurrentLevel?: (currentLevel: number) => void;
};
