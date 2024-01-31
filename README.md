# [Video Player](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg)](https://github.com/hosseintaromi/video_player/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@hosseintaromi/video_player.svg?style=flat)](https://www.npmjs.com/package/@hosseintaromi/video_player) ![NPM Downloads](https://img.shields.io/npm/dw/@hosseintaromi/video_player) [![stars - video_player](https://img.shields.io/github/stars/hosseintaromi/video_player?style=social)](https://github.com/hosseintaromi/video_player)

A video player like YouTube that allows streaming and complete customization
This package lets you play videos in different formats such as m3u8, mp4, or any other form.
As you noticed, this package allows you to stream; we used HLS.
In terms of appearance, we tried to be entirely similar to YouTube because it is standard and popular, but you will not be limited in any way. You can customize all sections individually.

### Key Features

- Ability to stream video or play simple video
- The default appearance is quite similar to YouTube, but you can fully customize it in the simplest way
- All facilities are ready for you, such as control of subtitles, dubbing, playback speed and quality by default, and access to control all of these in your application.

<!-- You can play a video with all cool features -->

## Table of Content

&nbsp;&middot;&nbsp;
[Install](#Install) <br/>
&nbsp;&middot;&nbsp;
[Usage](#Usage)<br/>
&nbsp;&middot;&nbsp;
[Contributing](#Contributing)<br/>
&nbsp;&middot;&nbsp;
[License](#license)<br/>
&nbsp;&middot;&nbsp;
[Credits](#Credits)<br/>
&nbsp;&middot;&nbsp;
[Author](#Author)<br/>
&nbsp;&middot;&nbsp;
[License](#License)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i @hosseintaromi/video_player
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add @hosseintaromi/video_player
```

## Usage

```tsx
import { VideoPlayer } from "@hosseintaromi/video_player";

const App = () => {
  const playerConfig = usePlayer({
    onUpdateTime: (e) => {
      // console.log('client', e)
    },
    speeds: [0.5, 1, 1.25, 1.5, 2],
    qualities: [252, 432],
    audioTracks: ["English"],
    subTitle: ["Chinese"],
    keyControl: true,
    theme: "Blue",
    locale: {
      setting_menu_change_speed_title: "انتخاب سرعت پخش",
      setting_menu_change_quality_title: "انتخاب کیفیت",
      setting_menu_quality_list_item_auto: "خودکار (بر اساس اینترنت شما)",
      setting_menu_quality_active_list: "خودکار",
      setting_menu_change_audio_track_title: "انتخاب صدا",
      setting_menu_change_subtitle: "انتخاب زیرنویس",
      setting_menu_subtitle_off: "خاموش",
    },
    // style: {
    //   bufferBg: 'blue',
    //   dir: 'rtl',
    //   iconColor: 'blue',
    //   rangeBackBg: 'blue',
    //   rangeFrontBg: 'blue',
    //   settingBg: 'blue',
    //   settingFontSize: 'blue',
    //   textColor: 'blue',
    //   toolbarBg: 'blue',
    //   toolbarFontSize: 'blue',
    // },
    autoPlay: true,
    timeForHideEl: 1000,
    type: "HLS",
    // icons: {
    //   arrow: <p>hello</p>,
    //   audioTrack: <p>hello</p>,
    //   checkMark: <p>hello</p>,
    //   fullScreen: <p>hello</p>,
    //   mute: <p>hello</p>,
    //   pause: <p>hello</p>,
    //   picInPic: <p>hello</p>,
    //   picOutPic: <p>hello</p>,
    //   play: <p>hello</p>,
    //   quality: <p>hello</p>,
    //   setting: <p>hello</p>,
    //   speed: <p>hello</p>,
    //   subtitle: <p>hello</p>,
    //   unFullScreen: <p>hello</p>,
    //   volumeDown: <p>hello</p>,
    //   volumeUp: <p>hello</p>,
    // }
  });
  return (
    <VideoPlayer
      config={playerConfig}
      src="https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
    />
  );
};

export default App;
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

## Credits

This software uses the following open source packages:

&nbsp;&middot;&nbsp;
[React](https://react.dev/)
&nbsp;&middot;&nbsp;
[Node.js](https://nodejs.org/)
&nbsp;&middot;&nbsp;
[hls.js](https://github.com/video-dev/hls.js)
&nbsp;&middot;&nbsp;
[emotion](https://emotion.sh/)

## Author

&nbsp;&middot;&nbsp;
[github/HosseinTaromi](https://github.com/hosseintaromi)

&nbsp;&middot;&nbsp;
[linkedin/HosseinTaromi](https://www.linkedin.com/in/hosseintaromi/)

## License

Copyright © 2023, [Hossein Taromi](https://github.com/hosseintaromi).
Released under the [Apache License](LICENSE).
