import React, { useEffect, useRef, useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import styled from '@emotion/styled'


const VideoTag = styled.video({
    width: "100%",
    height: "100%",
    display: 'block',
    backgroundColor: '#000'
});
const Video = () => {
    const { setVideoRef, autoPlay, changeMute } = usePlayerContext()
    const videoRef = useRef<HTMLVideoElement>(null)
    const [mode, setMode] = useState('')
    useEffect(() => {




        setVideoRef?.(videoRef.current!)
        const vid = document.getElementById("reza") as HTMLVideoElement;
        if (vid)
            for (let i = 0; i < vid.textTracks.length; i++) {
                console.log(vid.textTracks[i].mode)

                setMode(vid.textTracks[i].mode)
            }

    }, [])

    const showMe = () => {

        console.log('first')
        let trackElem = document.querySelector("track")!;
        let track = trackElem.track as any;
        track.mode = "showing";

        for (const cue of track.cues) {

            cue.pauseOnExit = true;
        }

    }

    return (
        <>


            {/* <video id='reza' width="600" height="400" controls crossOrigin='anonymous'>
                <source src="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2.mp4" type="video/mp4" />
                <track label="en" kind="subtitles" srcLang="en" src={'https://gotranscript.com/samples/captions-example.srt'} />
                <track label="fa" kind="subtitles" srcLang="fa" src="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt" />
            </video> */}
            <button style={{ position: 'fixed', zIndex: '10000000' }} onClick={showMe}>
                {mode}
            </button>

            <VideoTag ref={videoRef} autoPlay={autoPlay} playsInline muted id='video_player' crossOrigin='anonymous' controls>
                <track label="p2" kind="subtitles" srcLang="en" src="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt" default />
            </VideoTag>

        </>
    )
}

export default Video