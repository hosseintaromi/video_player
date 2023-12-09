import { useContext, useEffect, useRef } from "react";
import VideoPlayerContext from "../contexts/VideoPlayerContext";
import { GenericEvents, PlayerEventsType } from "../@types/player";
import { useContextEvents } from "./useContextEvents";
import { findBufferIndex } from "../utils/player-utils";

export const usePlayerContext = (events?: GenericEvents<PlayerEventsType>) => {
  const context = useContext(VideoPlayerContext);
  const timeRef = useRef<number>(0);
  const currentBuffer = useRef<{ index: number; length: number }>();

  const getVideoEl = () => {
    return context.getVideoRef();
  };
  const { listen, call } =
    useContextEvents<PlayerEventsType>(VideoPlayerContext);
  const speedIndexRef = useRef<number>(1);

  const getHideTime = () => {
    return context.config?.timeForHideEl === undefined
      ? 3000
      : context.config?.timeForHideEl;
  };

  const isAutoPlay = () => {
    return context.config?.autoPlay === undefined
      ? true
      : context.config?.autoPlay;
  };

  const getSpeeds = () => {
    return context.config?.speeds || [0.5, 1, 1.25, 1.5, 2];
  };
  const getSpeed = () => {
    const videoRef = getVideoEl();
    if (videoRef) return videoRef.playbackRate;
  };
  const changeSpeed = (index: number) => {
    const videoRef = getVideoEl();
    if (videoRef) {
      const speeds = getSpeeds();
      videoRef.playbackRate = speeds[index];
      speedIndexRef.current = index;
    }
  };

  const getVolume = () => {
    const videoRef = getVideoEl();
    if (videoRef) return { volume: videoRef.volume, isMuted: videoRef.muted };
  };
  const changeMute = (e: boolean) => {
    const videoRef = getVideoEl();
    if (videoRef) videoRef.muted = e;
    call.onChangeMute?.(e);
  };
  const changeVolume = (newVolume: number) => {
    const videoRef = getVideoEl();
    if (videoRef) {
      call.onChangeVolume?.(newVolume);
      if (videoRef.muted) {
        call.onChangeMute?.(false);
        videoRef.muted = false;
      }
      videoRef.volume = newVolume;
    }
  };

  const changeTime = (time: number) => {
    const el = getVideoEl();
    if (el) el.currentTime = time;
    checkBuffer(true);
  };

  const changePlayPause = (play: boolean) => {
    const videoRef = getVideoEl();
    if (videoRef) {
      play ? videoRef.play() : videoRef.pause();
    }
  };
  const getIsPlay = () => {
    const videoRef = getVideoEl();
    if (videoRef) {
      return !videoRef.paused;
    }
  };

  const checkBuffer = (forceUpdate?: boolean) => {
    const videoEl = getVideoEl();
    if (!videoEl) return;
    const buffer = getCurrentBuffer(videoEl, forceUpdate);
    if (!buffer) debugger;
    const bufferSize =
      buffer.index >= 0
        ? (videoEl.buffered.end(buffer.index) / videoEl.duration) * 100
        : 0;
    call.onUpdateBuffer?.(bufferSize);
  };

  const getCurrentBuffer = (el: HTMLVideoElement, forceUpdate?: boolean) => {
    const bufferLength = el.buffered.length;
    if (bufferLength === 0) return { length: 0, index: -1 };
    const oldBuffer = currentBuffer.current;
    if (oldBuffer && bufferLength === oldBuffer.length && !forceUpdate) {
      return oldBuffer;
    }
    currentBuffer.current = findBufferIndex(el);
    return currentBuffer.current;
  };

  const setVideoRef = (el?: HTMLVideoElement) => {
    if (!el) return;
    context.setVideoRef(el);
    el.onwaiting = () => {
      call.onLoading?.(true);
    };
    el.oncanplay = () => {
      call.onLoading?.(false);
    };
    el.onplay = () => {
      call.onPlayPause?.(true);
    };
    el.onpause = () => {
      call.onPlayPause?.(false);
    };
    el.onended = () => {
      call.onEnd?.();
    };
    el.ontimeupdate = () => {
      const currentTime = el.currentTime;

      if (Math.floor(currentTime) != Math.floor(timeRef.current)) {
        timeRef.current = currentTime;
        const percentage = (currentTime / el.duration) * 100;
        checkBuffer();
        call.onUpdateTime?.({
          time: timeRef.current,
          duration: el.duration,
          percentage,
        });
      }
    };
  };

  useEffect(() => {
    listen(events);
  }, []);

  return {
    setVideoRef,
    config: context.config,
    getSpeeds,
    getSpeed,
    changeSpeed,
    changePlayPause,
    getIsPlay,
    changeTime,
    getVolume,
    changeMute,
    changeVolume,
    isAutoPlay,
    getHideTime,
  };
};
