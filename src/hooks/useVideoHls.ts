import { useCallback, useContext, useEffect } from "react";
import Hls from "hls.js";
import VideoPlayerContext from "../contexts/VideoPlayerContext";

const isSupportedPlatform = Hls.isSupported();

export interface HlsVideoEventType {
  onLoaded?: () => void;
}
export const useVideoHls = (events?: HlsVideoEventType) => {
  const context = useContext(VideoPlayerContext);

  const loadHlsVideo = useCallback((src: string) => {
    const videoEl = context.getVideoRef();
    if (!videoEl) return;
    const hls = context.hls = new Hls({
      enableWorker: false
    });

    hls.attachMedia(videoEl);

    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      if (isSupportedPlatform) {
        hls.loadSource(src);
      } else {
        videoEl.src = src;
      }
    });

    hls.on(Hls.Events.LEVEL_LOADED, () => {
      context.listenOnLoad.forEach((listener) => { listener() })
    });

  }, [])

  const getLevels = () => {
    return context.hls?.levels;
  };
  const getCurrentLevel = () => {
    return { currentLevel: context.hls?.currentLevel, isAuto: context.hls?.autoLevelEnabled }
  }
  const changeLevel = (index: number) => {
    if (context.hls)
      context.hls.currentLevel = index;
  }

  const getSubtitle = () => {
    return context.hls?.subtitleTracks;
  };
  const getCurrentSubtitle = () => {
    return context.hls?.subtitleTrack;
  };
  const changeSubtitle = (index: number) => {
    if (context.hls)
      context.hls.subtitleTrack = index;
  };

  const getAudioTracks = () => {
    return context.hls?.audioTracks
  }
  const getAudioTrack = () => {
    return context.hls?.audioTrack
  }
  const changeAudioTrack = (index: number) => {
    if (context.hls)
      context.hls.audioTrack = index;
  };

  useEffect(() => {
    if (events?.onLoaded)
      context.listenOnLoad.push(events?.onLoaded)
  }, [])

  return {
    loadHlsVideo,
    getLevels,
    getCurrentLevel,
    changeLevel,
    getSubtitle,
    getCurrentSubtitle,
    changeSubtitle,
    getAudioTracks,
    getAudioTrack,
    changeAudioTrack
  };
};
