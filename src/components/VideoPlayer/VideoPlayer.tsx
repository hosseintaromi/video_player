import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useVideoHls } from "../../hooks/useVideoHls";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'
import { theme } from "../../theme";
import { VideoPlayerPropsType } from "../../@types";
import PlayIcon from "../assets/Icons/PlayIcon";
import PauseIcon from "../assets/Icons/PauseIcon";
import { LevelType, MediaPlaylistType } from "../../@types/hooks/UseVideoHlsType";
import Toolbar from "../Toolbar/Toolbar";
/*
ui components
*/

type ButtonPropsType = {
  animation: boolean,
}

const bounce = keyframes`
from {
  opacity: 1
}

to {
  opacity: 0;
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  transform: scale(2)
}
`

const VideoWrapper = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  '> *': {
    boxSizing: "border-box",
  }
}));

const Video = styled.video(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.videoBg,
}));



const Button = styled.button<ButtonPropsType>(props => ({
  background: "transparent",
  border: "none",
  borderRadius: "50%",
  color: "white",
  padding: "20px",
  animation: `${!props.animation ? `${bounce} 0.45s ease` : ''}`,
  transformOrigin: "center",
  display: `${props.animation ? 'none' : 'block'}`,
  "img,svg": {
    width: "50px",
    height: "50px",
  },
}))

const PlayIconWrapper = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const TopRightWrapper = styled.div({
  zIndex: "1",
  top: "0",
  display: "flex",
  position: "absolute",
  height: "50%",
  width: "40%",
  right: "0",
  justifyContent: "right",
  color: "white",
});

const TopLeftWrapper = styled.div({
  color: "white",
  zIndex: "1",
  top: "0",
  display: "flex",
  position: "absolute",
  height: "50%",
  width: "40%",
  left: "0",
  justifyContent: "left",

});

const PlayWrapper = styled.div({
  zIndex: '2',
  position: 'absolute',
  height: 'calc(100% - 70px)',
  width: '100%',
});


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


  return (
    <ThemeProvider theme={customTheme ? customTheme : theme}>
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
          videoWrapperRef={videoWrapperRef}
          videoRef={videoRef}
          playState={playState}
          playIcon={playIcon}
          pauseIcon={pauseIcon}
          levels={levels}
          currentLevel={currentLevel}
          subtitleList={subtitleList}
          currentSubtitle={currentSubtitle}
          audioTrackList={audioTrackList}
          currentAudioTrack={currentAudioTrack}
          changeHlsLevel={changeHlsLevel}
          changeHlsSubtitle={changeHlsSubtitle}
          playClicked={playClicked}
          changeHlsAudioTrack={changeHlsAudioTrack}
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
    </ThemeProvider>
  );
};


export default VideoPlayer;
