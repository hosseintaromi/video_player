import { HlsConfig, Level, MediaPlaylist } from "hls.js";

export type LevelType = {};

export type UseVideoHlsType = {
  src: string;
  config?: HlsConfig;
  options?: {
    disabled: boolean;
  };
  getHlsSubtitle?: (subsArr: MediaPlaylist[], currentSubtitle: number) => void;
  getHlsAudioTrack?: (audioArr: MediaPlaylist[], currentAudio: number) => void;
  getHlsLevels?: (levels: Level[]) => void;
  getCurrentLevel?: (currentLevel: number) => void;
};
