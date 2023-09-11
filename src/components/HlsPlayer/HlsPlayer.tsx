import { useVideoHls } from "../../hooks/useVideoHls";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../theme";
import { useCallback, useEffect, useImperativeHandle } from "react";
import { HlsPlayerPropsType } from "../../@types";
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
  border: "3px solid #fff",
  borderRadius: "50%",
  color: "white",
  padding: "20px",
  "& > img": {
    width: "30px",
    height: "30px",
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

const HlsPlayer = ({
  customTheme,
  controllerRef,
  src,
  controls = false,
  loop = false,
  topRightContainer = null,
  topLeftContainer = null,

  muted = false,
  poster,
  onPlay,
}: HlsPlayerPropsType) => {
  const { videoRef, isSupportedPlatform } = useVideoHls({
    src,
  });

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
      videoRef?.current?.play();
    } else {
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
          <img src="/assets/icons/play.svg" alt="" />
        </Button>
      </VideoWrapper>
    </ThemeProvider>
  );
};


export default HlsPlayer;
