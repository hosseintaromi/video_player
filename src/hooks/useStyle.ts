import React, { useContext, useEffect } from "react";
import VideoPlayerContext from "../contexts/VideoPlayerContext";
import { defaultStyle } from "../config/defaultStyle";

export const useStyle = () => {
  const context = useContext(VideoPlayerContext);

  return {
    style: context.config?.style || defaultStyle,
  };
};
