import { StyleType } from "../@types/player.model";

export const defaultStyle: StyleType = {
  bufferBg: "red",
  dir: "rtl",
  iconColor: "red",
  rangeBackBg: "red",
  rangeFrontBg: "red",
  settingBg: "red",
  settingFontSize: "red",
  textColor: "red",
  toolbarBg: "red",
  toolbarFontSize: "red",
};

declare module "@emotion/react" {
  export interface Theme extends StyleType {}
}
