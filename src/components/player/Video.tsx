import React, { useEffect, useRef } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'

const Video = () => {
    const { setVideoRef } = usePlayerContext()
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setVideoRef?.(videoRef.current!)
    }, [])

    return (
        <video ref={videoRef} autoPlay muted id='video_player' />
    )
}

export default Video