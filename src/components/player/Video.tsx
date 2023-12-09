import React, { useEffect, useRef } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import styled from '@emotion/styled'

const VideoTag = styled.video({
    width: "100%",
    display: 'block'
});
const Video = () => {
    const { setVideoRef, isAutoPlay: getAutoPlay } = usePlayerContext()
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setVideoRef?.(videoRef.current!)
    }, [])

    return (
        <VideoTag ref={videoRef} autoPlay={getAutoPlay()} muted id='video_player' />
    )
}

export default Video