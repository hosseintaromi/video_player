import { HlsConfig, Level, MediaPlaylist } from "hls.js";

export type LevelType = Level[];

export type changeHlsLevelType = (level: number) => void;

export type changeHlsSubtitleType = (level: number) => void;

export type MediaPlaylistType = MediaPlaylist[];

export type audioTrackObjType = {
  audioTrackList: MediaPlaylistType;
  currentAudioTrack: number;
  changeHlsAudioTrack: changeHlsSubtitleType;
};

export type subtitleObjType = {
  subtitleList: MediaPlaylistType;
  currentSubtitle: number;
  changeHlsSubtitle: changeHlsSubtitleType;
};

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
  getHlsSubtitle?: (
    subsArr: MediaPlaylistType,
    currentSubtitle: number
  ) => void;
  getHlsAudioTrack?: (
    audioArr: MediaPlaylistType,
    currentAudio: number
  ) => void;
  getHlsLevels?: (levels: LevelType) => void;
  getCurrentLevel?: (currentLevel: number) => void;
};
