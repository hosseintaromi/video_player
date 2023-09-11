import type { Meta, StoryObj } from "@storybook/react";

import HlsPlayer from "./HlsPlayer";
import { useRef } from "react";

const meta = {
  title: "Example/HlsPlayer",
  component: HlsPlayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HlsPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;
const theme = {
  colors: {
    primary: "yellow",
    videoBg: "#000",
  },
};
const playFn = () => {
  console.log("Play");
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
    controls: false,
    loop: true,
    muted: false,
    customTheme: theme,
    onPlay: playFn,
    poster:
      "https://static.namava.ir/Content/Upload/Images/ad00cc89-74fe-4264-9210-9571d4c6cb42.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900",
  },
};
