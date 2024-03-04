import React, { ReactNode, useEffect, useRef, useState } from "react";
import { usePlayerContext } from "../../hooks/usePlayerContext";
import { Button } from "../player/VideoPlayerStyle";
import Icon from "../icons/Icon";
var aaa = false;
const Play = ({ children }: { children?: ReactNode }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const playRef = useRef<any>(null);
  const togglePlay = () => {
    changePlayPause(!isPlay);
  };

  const { changePlayPause, autoPlay } = usePlayerContext({
    onPlayPause: (play: boolean) => {
      setIsPlay(play);
    },
  });

  useEffect(() => {
    // setTimeout(() => {
    //   debugger;
    //   if (autoPlay && !aaa) {
    //     aaa = true;
    //     playRef.current?.click?.();
    //   }
    // }, 5000);
  }, []);

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
        <button ref={playRef} onClick={togglePlay} className="vp-icon-play">
          play
        </button>
      )}
    </>
  );
};

export default Play;
