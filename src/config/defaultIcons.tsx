import React from "react";
import { IconsType } from "../@types/player";
import ArrowRight from "../components/Icons/IconList/ArrowRight";
import AudioIcon from "../components/Icons/IconList/AudioIcon";
import ChangeQuality from "../components/Icons/IconList/ChangeQuality";
import CheckMark from "../components/Icons/IconList/CheckMark";
import ExitFullScreenIcon from "../components/Icons/IconList/ExitFullScreenIcon";
import FullScreenIcon from "../components/Icons/IconList/FullScreenIcon";
import HighVolume from "../components/Icons/IconList/HighVolume";
import LowVolume from "../components/Icons/IconList/LowVolume";
import MuteVolume from "../components/Icons/IconList/MuteVolume";
import PauseIcon from "../components/Icons/IconList/PauseIcon";
import PictureInPicture from "../components/Icons/IconList/PictureInPicture";
import PictureOutPicture from "../components/Icons/IconList/PictureOutPicture";
import PlayIcon from "../components/Icons/IconList/PlayIcon";
import PlaybackSpeed from "../components/Icons/IconList/PlaybackSpeed";
import SettingIcon from "../components/Icons/IconList/SettingIcon";
import Subtitle from "../components/Icons/IconList/Subtitle";

export const defaultIcons: IconsType = {
    setting: <SettingIcon />,
    checkMark: <CheckMark />,
    arrow: <ArrowRight />,
    play: <PlayIcon />,
    pause: <PauseIcon />,
    volumeUp: <HighVolume />,
    volumeDown: <LowVolume />,
    mute: <MuteVolume />,
    picInPic: <PictureInPicture />,
    picOutPic: <PictureOutPicture />,
    fullScreen: <FullScreenIcon />,
    unFullScreen: <ExitFullScreenIcon />,
    speed: <PlaybackSpeed />,
    quality: <ChangeQuality />,
    subtitle: <Subtitle />,
    audioTrack: <AudioIcon />,
};
