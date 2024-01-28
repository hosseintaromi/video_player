import { useCallback, useContext, useEffect } from "react";
import Hls from "hls.js";
import VideoPlayerContext from "../contexts/VideoPlayerContext";
import { usePlayerContext } from "./usePlayerContext";

const isSupportedPlatform = Hls.isSupported();

export interface HlsVideoEventType {
  onLoaded?: () => void;
}
export const usePlayerEvents = (events?: HlsVideoEventType) => {
  const { type, getVideoRef, listenOnLoad, hls, qualities, subTitle, audioTracks } = usePlayerContext();
  const context = useContext(VideoPlayerContext);


  const loadVideo = useCallback((src: string) => {
    if (type === "HLS") {
      loadHlsVideo(src);
    } else {
      loadMP4Video(src);
    }
  }, []);

  const loadMP4Video = useCallback((src: string) => {
    const videoEl = getVideoRef();
    if (!videoEl) return;
    videoEl.src = src;
    videoEl.load();
    videoEl.onloadeddata = () => {
      listenOnLoad.forEach((listener) => {
        listener();
      });
    };
  }, []);

  const loadHlsVideo = useCallback((src: string) => {
    const videoEl = getVideoRef();
    if (!videoEl) return;
    // inja boodim. bayad setter'e hls ro bezarim tooye khode conte
    const hls = context.hls = new Hls({
      enableWorker: false,

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
      listenOnLoad.forEach((listener) => {
        listener();
      });
    });
  }, []);

  const getLevels = () => {
    return hls?.levels.filter((item) => qualities.includes(item.height))
  };
  const getCurrentLevel = () => {
    return {
      currentLevel: hls?.currentLevel,
      isAuto: hls?.autoLevelEnabled,
    };
  };
  const changeLevel = (index: number) => {
    if (hls) hls.currentLevel = index;
  };

  const getSubtitle = () => {
    return hls?.subtitleTracks.filter((item) => subTitle.includes(item.name))
  };
  const getCurrentSubtitle = () => {
    return hls?.subtitleTrack;
  };
  const changeSubtitle = (index: number) => {
    if (hls) hls.subtitleTrack = index;
  };

  const getAudioTracks = () => {
    return hls?.audioTracks.filter((item) => audioTracks.includes(item.name))
  };
  const getAudioTrack = () => {
    return hls?.audioTrack;
  };
  const changeAudioTrack = (index: number) => {
    if (hls) hls.audioTrack = index;
  };

  useEffect(() => {
    if (events?.onLoaded) listenOnLoad.push(events?.onLoaded);
  }, []);

  return {
    loadVideo,
    getLevels,
    getCurrentLevel,
    changeLevel,
    getSubtitle,
    getCurrentSubtitle,
    changeSubtitle,
    getAudioTracks,
    getAudioTrack,
    changeAudioTrack,
  };
};
