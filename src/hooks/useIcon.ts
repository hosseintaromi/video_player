import React, { useContext, useEffect } from "react";
import VideoPlayerContext from "../contexts/VideoPlayerContext";
import { defaultIcons } from "../config/defaultIcons";

export const useIcon = () => {
  const context = useContext(VideoPlayerContext);

  return {
    icons: context.config?.icons || defaultIcons,
  };
};
