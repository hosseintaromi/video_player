import { useVideoHls } from "../../hooks/useVideoHls";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../theme";
import { useCallback, useEffect, useImperativeHandle, useState } from "react";
import { VideoPlayerPropsType } from "../../@types";
import React from "react";

/*
ui components
*/
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
const Button = styled.button({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "transparent",
  border: "none",
  borderRadius: "50%",
  color: "white",
  padding: "20px",
  "img,svg": {
    width: "70px",
    height: "70px",
  },
});
const TopRightWrapper = styled.div({
  zIndex: "1",
  top: "0",
  display: "flex",
  position: "absolute",
  height: "50%",
  width: "50%",
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
  width: "50%",
  left: "0",
  justifyContent: "left",
});
const playIcon2 = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg>

const VideoPlayer = ({
  customTheme,
  controllerRef,
  src,
  controls = false,
  loop = false,
  topRightContainer = null,
  topLeftContainer = null,
  playIcon = playIcon2,
  pauseIcon = <img src="https://cdn-icons-png.flaticon.com/512/4181/4181163.png" />,
  muted = false,
  poster,
  onPlay,
}: VideoPlayerPropsType) => {
  const { videoRef, isSupportedPlatform } = useVideoHls({
    src,
  });
  const [playState, setPlayState] = useState(true)
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
      videoRef?.current?.play();
    } else {
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

        <Button onClick={playClicked}>
          {playState ? playIcon : pauseIcon}

        </Button>
      </VideoWrapper>
    </ThemeProvider>
  );
};


export default VideoPlayer;
