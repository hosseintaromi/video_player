export type ThemeType = {
  colors: {
    primary: string;
    videoBg: string;
  };
};

export const theme: ThemeType = {
  colors: {
    primary: "hotpink",
    videoBg: "#000",
  },
};

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
