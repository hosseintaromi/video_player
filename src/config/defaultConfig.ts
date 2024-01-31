import {
  PlayerConfigType,
  PlayerInstance,
  PlayerLocaleType,
} from "../@types/player.model";
import { defaultIcons } from "./defaultIcons";
import { defaultLocale } from "./defaultLang";
import { defaultStyle } from "./defaultStyle";

export const defaultConfig: PlayerInstance = {
  type: "HLS",
  loop: false,
  autoPlay: true,
  speeds: [0.5, 0.75, 1, 1.5, 2],
  theme: "Blue",
  locale: defaultLocale,
  icons: defaultIcons,
  style: defaultStyle,
  timeForHideEl: 3000,
  qualities: [],
  audioTracks: [],
  subTitle: [],
  thumbnail: "",
  keyControl: true,
  loadVideo: function (src: string): void {},
  changeLocale: function (locale: PlayerLocaleType): void {},
};
