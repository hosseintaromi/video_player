import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { UseVideoHlsType } from "../@types/hooks/UseVideoHlsType";

const isSupportedPlatform = Hls.isSupported();

export const useVideoHls = ({
  src,
  config,
  options,
  getHlsLevels,
  getHlsSubtitle,
  getCurrentLevel,
  getHlsAudioTrack,
}: UseVideoHlsType) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls>();

  useEffect(() => {
    if (options?.disabled) {
      return;
    }
    const initializeHls = () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }

      const hls = new Hls({
        enableWorker: false,
        ...config,
      });
      if (!!videoRef.current) {
        hls.attachMedia(videoRef.current);
      }
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(src);
      });

      hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
        if (getHlsAudioTrack) {
          getHlsAudioTrack(hls.audioTracks, hls.audioTrack);
        }
      });
      hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
        if (getHlsSubtitle) {
          getHlsSubtitle(hls.subtitleTracks, hls.subtitleTrack);
        }
      });
      hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
        if (getHlsLevels && getCurrentLevel) {
          getHlsLevels(hls.levels);
        }
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              initializeHls();
              break;
          }
        }
      });
      hlsRef.current = hls;
    };
    if (isSupportedPlatform && !!src) {
      initializeHls();
    }
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, options?.disabled, src]);

  const changeHlsLevel = (level: number) => {
    if (!hlsRef.current) return;
    hlsRef.current.currentLevel = level;
    if (getCurrentLevel) {
      getCurrentLevel(level);
    }
  };
  const changeHlsAudioTrack = (audioTrack: number) => {
    if (!hlsRef.current) return;
    hlsRef.current.audioTrack = audioTrack;
    if (getHlsAudioTrack) {
      getHlsAudioTrack(hlsRef.current.audioTracks, hlsRef.current.audioTrack);
    }
  };
  const changeHlsSubtitle = (level: number) => {
    if (!hlsRef.current) return;
    hlsRef.current.subtitleTrack = level;

    if (getHlsSubtitle) {
      getHlsSubtitle(hlsRef.current.subtitleTracks, level);
    }
  };

  return {
    videoRef,
    changeHlsLevel,
    isSupportedPlatform,
    changeHlsSubtitle,
    changeHlsAudioTrack,
  };
};
