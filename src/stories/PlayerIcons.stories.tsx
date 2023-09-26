
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

const meta = {
  title: "Options/icons",
  component: VideoPlayer,
  parameters: {
    layout: "centered",
    controls: {
      exclude: /^(?:(?!playIcon|pauseIcon).)*$/g
    }
  },
  tags: ["autodocs"],
  argTypes: {
    playIcon: {
      control: 'texct',
      description: "You can pass ReactNode; for example, img,svg or IconComponent is not required if you don't pass show default icons.",
    },
    pauseIcon: {
      control: 'texwt',
      description: "You can pass ReactNode; for example, img,svg or IconComponent is not required if you don't pass show default icons.",
    },
  }
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



export const PlayButton: Story = {
  args: {
    src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
    playIcon: <AiFillPlayCircle />,
    pauseIcon: <AiFillPauseCircle />
  },
};
