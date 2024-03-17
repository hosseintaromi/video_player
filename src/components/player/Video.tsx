import React, { useEffect, useRef, useState } from "react";
import { usePlayerContext } from "../../hooks/usePlayerContext";
import styled from "@emotion/styled";

const VideoTag = styled.video({
  width: "100%",
  height: "100%",
  display: "block",
  backgroundColor: "#000",
});

const Video = () => {
  const { setVideoRef, autoPlay, muted } = usePlayerContext();

  const videoElRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setVideoRef?.(videoElRef.current!);
  }, []);

  return (
    <>
      <VideoTag
        ref={videoElRef}
        autoPlay={autoPlay}
        playsInline
        muted={muted}
        id="video_player"
        crossOrigin="anonymous"
      >
        {" "}
      </VideoTag>
      <div className="subtitle">
        <div className="text"></div>
      </div>
    </>
  );
};

export default Video;
