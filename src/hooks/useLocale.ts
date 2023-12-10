import React, { useContext, useEffect } from "react";
import VideoPlayerContext from "../contexts/VideoPlayerContext";
import { defaultLocale } from "../config/defaultLang";
import useContextEvents from "./useContextEvents";
import { PlayerEventsType, PlayerLocaleType } from "../@types/player.model";

export const useLocale = ({
  onChangeLocale,
}: {
  onChangeLocale?: (locale: PlayerLocaleType) => void;
}) => {
  const context = useContext(VideoPlayerContext);

  const changeLocale = (locale: PlayerLocaleType) => {
    call.onChangeLocale?.(locale);
  };

  const { listen, call } =
    useContextEvents<PlayerEventsType>(VideoPlayerContext);

  useEffect(() => {
    listen({ onChangeLocale });
  }, []);

  return {
    locale: context.config?.locale || defaultLocale,
    changeLocale,
  };
};
