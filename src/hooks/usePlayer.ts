import { useRef } from "react";
import { PlayerConfigType, PlayerObjectType } from "../@types/player.model";
import { usePlayerContext } from "./usePlayerContext";

export const usePlayer = (playerConfig: PlayerConfigType) => {
  const playerObject: PlayerObjectType = {
    loadVideo: () => {},
    changeLocale: () => {},
    speeds: playerConfig.speeds,
    locale: playerConfig.locale,
    icons: playerConfig.icons,
    style: playerConfig.style,
    autoPlay: playerConfig.autoPlay,
  };

  usePlayerContext({
    onUpdateTime: playerConfig.onUpdateTime,
    onEnd: playerConfig.onEnd,
    onLoading: playerConfig.onLoading,
    onPlayPause: playerConfig.onPlayPause,
    onUpdateBuffer: playerConfig.onUpdateBuffer,
    onChangeVolume: playerConfig.onChangeVolume,
  });

  const configRef = useRef<PlayerObjectType>(playerObject);

  return configRef.current;
};
