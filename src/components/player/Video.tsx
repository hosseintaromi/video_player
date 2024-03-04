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
    const { setVideoRef, autoPlay,changeMute } = usePlayerContext()
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setVideoRef?.(videoRef.current!)

        setTimeout(() => {
            //changeMute(false)
        }, 2000);
    }, [])

    return (
        <VideoTag ref={videoRef} autoPlay={autoPlay} playsInline muted id='video_player' />
    )
}

export default Video