import React, { useEffect, useRef } from 'react'
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

    useEffect(() => {
        setVideoRef?.(videoRef.current!)
        // const vid = document.getElementById("reza") as HTMLVideoElement;
        // console.log(vid?.textTracks)
        // if (videoRef.current)
        //     for (let i = 0; i < videoRef.current.textTracks.length; i++) {
        //         console.log(videoRef.current.textTracks[i].mode)
        //         videoRef.current.textTracks[i].mode = "showing";
        //     }
        setTimeout(() => {
            //changeMute(false)
        }, 2000);
    }, [])

    return (
        <>

            <video id='reza' width="600" height="400" controls crossOrigin='anonymous'>
                <source src="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2.mp4" type="video/mp4" />
                {/* <track label="pt" kind="subtitles" srcLang="en" src={'https://gotranscript.com/samples/captions-example.srt'} default /> */}

                <track label="pt" kind="subtitles" srcLang="en" src="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt" default />
            </video>
            {/* <VideoTag ref={videoRef} autoPlay={autoPlay} playsInline muted id='video_player' crossOrigin='anonymous' controls>
                <track label="p1" kind="subtitles" srcLang="en" src={'https://gotranscript.com/samples/captions-example.srt'} default />
                <track label="p2" kind="subtitles" srcLang="en" src="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt" default />
            </VideoTag> */}
        </>
    )
}

export default Video