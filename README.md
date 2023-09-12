![video player Logo](./package_logo.PNG)

you can play a video with all cool features

[Key Features](#key-features)
&nbsp;&middot;&nbsp;
[How To Use](#how-to-use)
&nbsp;&middot;&nbsp;
[Credits](#credits)
&nbsp;&middot;&nbsp;
[License](#license)

## Key Features

- Ability to stream video or play simple video
- The default appearance is quite similar to YouTube, but you can fully customize it in the simplest way
- All facilities are ready for you, such as control of subtitles, dubbing, playback speed and quality by default, and access to control all of these in your application.

### More explanation

A video player like YouTube that allows streaming and complete customization
This package lets you play videos in different formats such as m3u8, mp4, or any other form.
As you noticed, this package allows you to stream; we used HLS.
In terms of appearance, we tried to be entirely similar to YouTube because it is standard and popular, but you will not be limited in any way. You can customize all sections individually.

<img  src="./videopackage.gif"  width="100%">

## How To Use

You can install it from npm with this command:

```bash
# Clone this repository
$ npm i @hosseintaromi/video_player@0.1.5
```

```tsx
import HlsPlayer from "@hosseintaromi/video_player";

const App = () => {
  //you can control everything with this ref
  const controllerRef = useRef<ControllerRefType>({
    changeSpeed: () => {},
    play: () => {},
  });

  // you can create components for
  // right and left sections on
  // the top of the player
  const right = () => <p>hello</p>;
  const left = () => <p>bye</p>;

  // you can do something when user play the video
  const onPlay = () => {
    console.log("onplay");
  };
  // you can pass custom theme to player
  const theme = {
    colors: {
      primary: "yellow",
      videoBg: "#000",
    },
  };

  return (
    <>
      <HlsPlayer
        src="https://videoUrl.m3u8"
        controls={false}
        loop={true}
        muted={false}
        controllerRef={controllerRef}
        topRightContainer={right()}
        topLeftContainer={left()}
        onPlay={onPlay}
        customTheme={theme}
        poster="http://posterUrl.jpg"
      />
      <button
        onClick={() => {
          controllerRef.current.changeSpeed(4);
        }}
      >
        speed X 4
      </button>
    </>
  );
};

export default App;
```

## Contact with me

if you liked using this package or it has helped you in any way, I'd like you send me an email at <hosseintaromii@gmail.com> about anything you'd want to say about this software. I'd really appreciate it!

## Credits

This software uses the following open source packages:

- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [hls.js](https://github.com/video-dev/hls.js)
- [emotion](https://emotion.sh/)

## Support

<a href="https://www.buymeacoffee.com/5Zn8Xh3l9" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;" ></a>

<p>Or</p>

<a href="https://www.coffeebede.com/hosseintaromi"><img class="img-fluid"  src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg" style="height: 49px !important;width: 174px !important;"/></a>

## License

MIT

---

> GitHub [@hosseintaromi](https://github.com/hosseintaromi) &nbsp;&middot;&nbsp;
> linkedin [hosseintaromi]() &nbsp;&middot;&nbsp;
