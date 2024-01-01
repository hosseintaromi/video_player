import React, { useEffect, useRef } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'

const Video = () => {
    const { setVideoRef, isAutoPlay: getAutoPlay } = usePlayerContext()
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setVideoRef?.(videoRef.current!)
    }, [])

    return (
        <video className='video-tag' ref={videoRef} autoPlay={getAutoPlay()} muted id='video_player' />
    )
}

export default Video