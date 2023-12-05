import { StyleType } from "../@types/player";

export const defaultStyle: StyleType = {
  bufferBg: "red",
  dir: "rtl",
  iconColor: "red",
  rangeBackBg: "red",
  rangeFrontBg: "red",
  settingBg: "red",
  settingFontSize: "red",
  textColor: "red",
  toolBarBg: "red",
  toolbarFontSize: "red",
};

declare module "@emotion/react" {
  export interface Theme extends StyleType {}
}
