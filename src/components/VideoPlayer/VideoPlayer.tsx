import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useVideoHls } from "../../hooks/useVideoHls";
import { ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import { VideoPlayerPropsType } from "../../@types";
import PlayIcon from "../assets/Icons/PlayIcon";
import PauseIcon from "../assets/Icons/PauseIcon";
import { LevelType, MediaPlaylistType } from "../../@types/hooks/UseVideoHlsType";
import Toolbar from "../Toolbar/Toolbar";
import VideoContext from "../../contexts/VideoContext";
import { Button, PlayIconWrapper, PlayWrapper, TopLeftWrapper, TopRightWrapper, Video, VideoWrapper } from "./VideoPlayerStyle";



const VideoPlayer = ({
  customTheme,
  controllerRef,
  src,
  controls = false,
  loop = false,
  topRightContainer = null,
  topLeftContainer = null,
  playIcon = <PlayIcon />,
  pauseIcon = <PauseIcon />,
  muted = false,
  poster,
  onPlay,
  showPlayIcon = true
}: VideoPlayerPropsType) => {

  useImperativeHandle(controllerRef, () => ({
    changeSpeed: handelChangeSpeed,
    play: handelPlayAction,
  }));

  const [playState, setPlayState] = useState(true)
  const [showAnimationForPlayButton, setShowAnimationForPlayButton] = useState(true)
  const [levels, setLevels] = useState<LevelType>([]);
  const [currentLevel, setCurrentLevel] = useState<number>(-1);
  const [subtitleList, setSubtitleList] = useState<MediaPlaylistType>([]);
  const [currentSubtitle, setCurrentSubtitle] = useState<number>(-1);
  const [currentSpeed, setCurrentSpeed] = useState<number>(1);
  const [audioTrackList, setAudioTrackList] = useState<MediaPlaylistType>([]);
  const [currentAudioTrack, setCurrentAudioTrack] = useState<number>(-1);
  const videoWrapperRef = useRef<HTMLDivElement>(null)


  const {
    videoRef,
    isSupportedPlatform,
    changeHlsLevel,
    changeHlsSubtitle,
    changeHlsAudioTrack,
  }
    = useVideoHls({
      src,
      getHlsLevels: (levelsArr) => {
        setLevels(levelsArr);
      },
      getCurrentLevel: (currentLevel) => {
        setCurrentLevel(currentLevel);
      },
      getHlsSubtitle: (subsArr, currentSub) => {
        setSubtitleList(subsArr);
        setCurrentSubtitle(currentSub);
      },
      getHlsAudioTrack: (audioArr, currentAudio) => {
        setAudioTrackList(audioArr);
        setCurrentAudioTrack(currentAudio);
      },
    });

  const handelPlayAction = (value: boolean) => {
    if (value) videoRef?.current?.play();
    else videoRef?.current?.pause();
  };

  const handelChangeSpeed = (value: number) => {
    if (videoRef?.current?.playbackRate) videoRef.current.playbackRate = value;
    setCurrentSpeed(value)
  };

  const changeAnimationForPlay = (value: boolean, showAnimation: boolean) => {
    setPlayState(value)
    if (!showAnimation) return
    setShowAnimationForPlayButton(false);
    setTimeout(() => {
      setShowAnimationForPlayButton(true);
    }, 400);
  }

  const playClicked = useCallback((showPlayIcon: boolean) => {
    if (videoRef?.current?.paused) {
      changeAnimationForPlay(false, showPlayIcon)
      videoRef?.current?.play();
    } else {
      changeAnimationForPlay(true, showPlayIcon);
      videoRef?.current?.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initVideo = (el: HTMLVideoElement) => {
    if (!el) return;

    changeHlsLevel(-1);
    el.onerror = (e: any) => {
      changeHlsLevel(3);
    };

    el.onplay = () => {
      if (onPlay) onPlay();
    };
  };
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    initVideo(videoEl);
  }, []);
  const videoPlayerContextVal = {
    videoRef,
    videoWrapperRef,
    levels,
    currentSpeed,
    currentLevel,
    subtitleList,
    currentSubtitle,
    audioTrackList,
    currentAudioTrack,
    changeHlsLevel,
    changeHlsSubtitle,
    changeHlsAudioTrack,
    changeSpeed: handelChangeSpeed
  }

  return (
    <ThemeProvider theme={customTheme ? customTheme : theme}>
      <VideoContext.Provider value={videoPlayerContextVal}>
        <VideoWrapper ref={videoWrapperRef}>
          <TopRightWrapper>{topRightContainer}</TopRightWrapper>

          <TopLeftWrapper>{topLeftContainer}</TopLeftWrapper>

          <PlayWrapper onClick={() => playClicked(showPlayIcon)} />

          <PlayIconWrapper>
            <Button animation={showAnimationForPlayButton}>
              {playState ? playIcon : pauseIcon}
            </Button>
          </PlayIconWrapper>

          <Toolbar
            playState={playState}
            playIcon={playIcon}
            pauseIcon={pauseIcon}
            playClicked={playClicked}
          />

          {isSupportedPlatform ? (
            <Video
              playsInline
              ref={videoRef}
              id="main-video"
              className="m-video videoBackground"
              controls={controls}
              loop={loop}
              muted={muted}
              poster={poster}
            />
          ) : (
            <Video
              playsInline
              ref={videoRef}
              src={src}
              id="main-video"
              className="m-video videoBackground"
              controls={controls}
              loop={loop}
              muted={muted}
              poster={poster}
            />
          )}
        </VideoWrapper>
      </VideoContext.Provider>
    </ThemeProvider>
  );
};


export default VideoPlayer;
