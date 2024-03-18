import React, { ReactNode, useEffect, useState } from "react";
import { usePlayerContext } from "../../hooks/usePlayerContext";
import Icon from "../icons/Icon";

const Play = ({ children }: { children?: ReactNode }) => {

  const { changePlayPause, autoPlay, getIsPlay } = usePlayerContext({
    onPlayPause: (play: boolean) => {
      console.log('play', play)
      setIsPlay(play);
    },
  });
  useEffect(() => {
    const isPlay = getIsPlay()
    if (isPlay)
      setIsPlay(isPlay)
  }, [])
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const togglePlay = () => {
    changePlayPause(!isPlay);
  };

  return (
    <>
      {isPlay === true ? (
        <Icon
          isClickable={true}
          onClick={togglePlay}
          type="pause"
          className="vp-icon-pause"
        />
      ) : (
        <Icon
          isClickable={true}
          onClick={togglePlay}
          type="play"
          className="vp-icon-play"
        />
      )}
    </>
  );
};

export default Play;
