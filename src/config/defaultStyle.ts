import { StyleType } from "../@types/player.model";

export const defaultStyle: StyleType = {
  bufferBg: "rgba(255,255,255,.4)",
  dir: "rtl",
  iconColor: "#ffffff",
  rangeBackBg: "rgba(255,255,255,.2)",
  rangeFrontBg: "#f00",
  settingBg: "red",
  settingFontSize: "red",
  settingTextColor: "red",
  toolbarBg: "transparent', 'linear-gradient(rgba(0,0,0, .0), rgba(0, 0, 0, .5))",
  toolbarFontSize: "red",
};

declare module "@emotion/react" {
  export interface Theme extends StyleType {}
}
