import type { Meta, StoryObj } from '@storybook/react';

import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { FaBeer } from 'react-icons/fa';
import React from 'react';

const meta = {
  title: "Options/icons",
  component: VideoPlayer,
  parameters: {
    layout: "centered",
    controls: {
      exclude: /^(?:(?!item1|item2).)*$/g
    }
  },
  tags: ["autodocs"],
  // argTypes: {
  //   poster: {
  //     table: {
  //       disable: true
  //     }
  //   },
  //   controls: {
  //     table: {
  //       disable: true
  //     }
  //   }
  // }
} satisfies Meta<typeof VideoPlayer>;

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
export const PlayButton: Story = {
  args: {
    src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
    playIcon: <FaBeer />
  },
};
