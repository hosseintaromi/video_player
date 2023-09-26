import { useVideoHls } from "../../hooks/useVideoHls";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'

import { theme } from "../../theme";
import { useCallback, useEffect, useImperativeHandle, useState } from "react";
import { VideoPlayerPropsType } from "../../@types";
import PlayIcon from "../assets/Icons/PlayIcon";
import PauseIcon from "../assets/Icons/PauseIcon";
import React from "react";

/*
ui components
*/
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
}));
const Video = styled.video(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.videoBg,
}));
type ImageProps = {
  animation: boolean,
}

const Button = styled.button<ImageProps>(props => ({

  background: "transparent",
  border: "none",
  borderRadius: "50%",
  color: "white",
  padding: "20px",
  animation: `${!props.animation ? `${bounce} 0.45s ease` : ''}`,
  transformOrigin: "center",
  display: `${props.animation ? 'none' : 'block'}`,
  "img,svg": {
    width: "70px",
    height: "70px",
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
}: VideoPlayerPropsType) => {
  const { videoRef, isSupportedPlatform } = useVideoHls({
    src,
  });
  const [playState, setPlayState] = useState(true)
  const [showAnimationForPlayButton, setShowAnimationForPlayButton] = useState(true)
  useImperativeHandle(controllerRef, () => ({
    changeSpeed: handelChangeSpeed,
    play: handelPlayAction,
  }));

  const handelPlayAction = (value: boolean) => {
    if (value) videoRef?.current?.play();
    else videoRef?.current?.pause();
  };
  const handelChangeSpeed = (value: number) => {
    if (videoRef?.current?.playbackRate) videoRef.current.playbackRate = value;
  };

  const playClicked = useCallback(() => {
    if (videoRef?.current?.paused) {
      setPlayState(false)
      setShowAnimationForPlayButton(false);
      setTimeout(() => {
        setShowAnimationForPlayButton(true);
      }, 400);
      videoRef?.current?.play();
    } else {
      setShowAnimationForPlayButton(false);
      setTimeout(() => {
        setShowAnimationForPlayButton(true);
      }, 400);
      setPlayState(true);
      videoRef?.current?.pause();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initVideo = (el: HTMLVideoElement) => {
    if (!el) return;

    el.onplay = () => {
      if (onPlay) onPlay();
    };
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    initVideo(videoEl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={customTheme ? customTheme : theme}>
      <VideoWrapper>
        <TopRightWrapper>{topRightContainer}</TopRightWrapper>
        <TopLeftWrapper>{topLeftContainer}</TopLeftWrapper>

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
        <PlayIconWrapper>

          <Button animation={showAnimationForPlayButton}>
            {playState ? playIcon : pauseIcon}
          </Button>
        </PlayIconWrapper>
        <button onClick={playClicked}>helo</button>
      </VideoWrapper>
    </ThemeProvider>
  );
};


export default VideoPlayer;
