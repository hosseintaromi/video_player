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
    const { setVideoRef, autoPlay } = usePlayerContext()
    const [mode, setMode] = useState('')
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        setVideoRef?.(videoRef.current!)
    }, [])

    // const showMe = () => {

    //     console.log('first')
    //     let trackElem = document.querySelector("track")!;
    //     let track = trackElem.track as any;
    //     track.mode = "showing";

    //     for (const cue of track.cues) {

    //         cue.pauseOnExit = true;
    //     }

    // }

    return (

        <VideoTag ref={videoRef} autoPlay={autoPlay} playsInline muted id='video_player' crossOrigin='anonymous'>
            {/* <track label="p2" kind="subtitles" srcLang="en" src="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt" default /> */}
        </VideoTag>
    )
}

export default Video