import React, { ReactNode, useState } from "react";
import { usePlayerContext } from "../../hooks/usePlayerContext";
import Icon from "../icons/Icon";

const Play = ({ children }: { children?: ReactNode }) => {

  const [isPlay, setIsPlay] = useState<boolean>(false);

  const togglePlay = () => {
    changePlayPause(!isPlay);
  };

  const { changePlayPause } = usePlayerContext({
    onPlayPause: (play: boolean) => {
      setIsPlay(play);
    },
  });

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
